export interface CalculatorInputs {
  /** Monthly volume of documents, cases, or workflow runs */
  monthlyWorkflowVolume: number;
  /** Average manual minutes required per case/document */
  manualMinutesPerRun: number;
  /** Fully loaded hourly staff cost in ZAR */
  hourlyStaffCostZar: number;
  /** Target automation & IDP/MCP deflection rate (0 to 98%) */
  targetAutomationRatePct: number;
  /** Estimated error/rework cost per failed audit or compliance defect in ZAR */
  costPerComplianceDefectZar: number;
  /** Annual contract / project investment in ZAR (also used for B-BBEE 135% calculation) */
  annualContractSpendZar: number;
}

export interface CalculatorResults {
  clampedInputs: CalculatorInputs;
  annualManualHours: number;
  annualHoursReclaimed: number;
  annualManualLaborCostZar: number;
  annualLaborSavingsZar: number;
  unguardedDefectCount: number;
  mcpHitlDefectCount: number;
  annualComplianceRiskSavingsZar: number;
  grossAnnualBenefitZar: number;
  netAnnualBenefitZar: number;
  netRoiPct: number;
  paybackMonths: number;
  bbbeeRecognizedSpendZar: number;
  bbbeeProcurementBonusZar: number;
}

function safeNumber(value: unknown, fallback: number, min: number, max: number): number {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num) || Number.isNaN(num)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, num));
}

/**
 * Deterministic Enterprise AI ROI, POPIA Defect Reduction & B-BBEE 135% Calculator.
 * Hardened against NaN, Infinity, negative numbers, zero division, and extreme inputs (Tactic 41).
 */
export function calculateEnterpriseRoi(raw: Partial<CalculatorInputs>): CalculatorResults {
  const clampedInputs: CalculatorInputs = {
    monthlyWorkflowVolume: safeNumber(raw.monthlyWorkflowVolume, 4500, 0, 10_000_000),
    manualMinutesPerRun: safeNumber(raw.manualMinutesPerRun, 22, 0, 10_000),
    hourlyStaffCostZar: safeNumber(raw.hourlyStaffCostZar, 420, 0, 50_000),
    targetAutomationRatePct: safeNumber(raw.targetAutomationRatePct, 82, 0, 98),
    costPerComplianceDefectZar: safeNumber(raw.costPerComplianceDefectZar, 1850, 0, 1_000_000),
    annualContractSpendZar: safeNumber(raw.annualContractSpendZar, 650_000, 0, 500_000_000),
  };

  const annualVolume = clampedInputs.monthlyWorkflowVolume * 12;
  const automationRatio = clampedInputs.targetAutomationRatePct / 100;

  // 1. Labor Hours & Cost
  const annualManualHours = Math.round((annualVolume * clampedInputs.manualMinutesPerRun) / 60);
  const annualHoursReclaimed = Math.round(annualManualHours * automationRatio);
  const annualManualLaborCostZar = Math.round(annualManualHours * clampedInputs.hourlyStaffCostZar);
  const annualLaborSavingsZar = Math.round(annualHoursReclaimed * clampedInputs.hourlyStaffCostZar);

  // 2. POPIA Sec 71 / Audit Defect Reduction (Benchmark: 6.4% baseline manual/unguarded defect rate vs 0.48% MCP+HITL)
  const baselineDefectRate = 0.064;
  const guardedDefectRate = 0.0048;
  const unguardedDefectCount = Math.round(annualVolume * baselineDefectRate);
  const mcpHitlDefectCount = Math.round(
    annualVolume * (baselineDefectRate * (1 - automationRatio) + guardedDefectRate * automationRatio)
  );
  const avoidedDefects = Math.max(0, unguardedDefectCount - mcpHitlDefectCount);
  const annualComplianceRiskSavingsZar = Math.round(
    avoidedDefects * clampedInputs.costPerComplianceDefectZar
  );

  // 3. Gross & Net Annual Benefit + ROI + Payback
  const grossAnnualBenefitZar = annualLaborSavingsZar + annualComplianceRiskSavingsZar;
  const netAnnualBenefitZar = grossAnnualBenefitZar - clampedInputs.annualContractSpendZar;

  let netRoiPct = 0;
  let paybackMonths = 0;

  if (clampedInputs.annualContractSpendZar > 0) {
    netRoiPct = Number(
      ((netAnnualBenefitZar / clampedInputs.annualContractSpendZar) * 100).toFixed(1)
    );
    if (grossAnnualBenefitZar > 0) {
      paybackMonths = Number(
        Math.min(120, (clampedInputs.annualContractSpendZar / grossAnnualBenefitZar) * 12).toFixed(1)
      );
    } else {
      paybackMonths = 0;
    }
  }

  // 4. B-BBEE Level 1 (135% Recognition) Procurement Value
  const bbbeeRecognizedSpendZar = Math.round(clampedInputs.annualContractSpendZar * 1.35);
  const bbbeeProcurementBonusZar = Math.round(clampedInputs.annualContractSpendZar * 0.35);

  return {
    clampedInputs,
    annualManualHours,
    annualHoursReclaimed,
    annualManualLaborCostZar,
    annualLaborSavingsZar,
    unguardedDefectCount,
    mcpHitlDefectCount,
    annualComplianceRiskSavingsZar,
    grossAnnualBenefitZar,
    netAnnualBenefitZar,
    netRoiPct,
    paybackMonths,
    bbbeeRecognizedSpendZar,
    bbbeeProcurementBonusZar,
  };
}
