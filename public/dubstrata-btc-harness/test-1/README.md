# Test-1: 220 Cycles Evaluation & Benchmark Archive

This directory stores all telemetry, data snapshots, high-resolution visual dashboards, and performance analysis for **Test-1** (220 consecutive 5-minute cycles on Polymarket BTC Up/Down markets, 2026-09-20 to 2026-09-21).

## 📄 Main Report
👉 **Read the full performance report here:** [**ANALYSIS.md**](ANALYSIS.md)

---

## 📊 Summary Scorecard

| Metric | Benchmark Target | Test-1 Observed | Status |
| :--- | :--- | :--- | :--- |
| **Evaluated Cycles** | 220 Markets (~26.5h) | 220 Markets / 655 Stages | Complete |
| **Simulated Net PnL** | Positive | **+$81.90** | ✅ **Profitable** |
| **Directional Hit Rate (DHR)**| $\ge 54.0\%$ | **30.00%** | ❌ **FAIL** (Severe bearish drift bias) |
| **80% Band Coverage** | $75.0\% - 85.0\%$ | **71.90%** | ⚠️ **Marginal** |
| **Tail Blowout Rate** | $< 12.0\%$ | **0.95%** | ✅ **PASS** |
| **Trade Win Rate** | $\ge 55.0\%$ | **62.86%** (44W / 26L) | ✅ **PASS** (Saved by Stage 2 profit-takes) |
| **Brier Skill Score (BSS)** | $> 0.0$ | **-0.1838** | ❌ **FAIL** (Orderbook mid was superior) |
| **Mean Execution Latency** | $< 350\text{ ms}$ | **229.78 ms** (P95: 236.61 ms) | ✅ **PASS** |

---

## 📁 Directory Structure

- **[`ANALYSIS.md`](ANALYSIS.md)**: In-depth technical post-mortem, statistical hypothesis tests, PnL decomposition, and calibration recommendations for Test-2.
- **[`images/`](images/)**:
  - [`btc5m_forecast_eval.png`](images/btc5m_forecast_eval.png): Forecast accuracy, quantile coverage, and return delta scatter.
  - [`btc5m_alpha_decomposition.png`](images/btc5m_alpha_decomposition.png): Alpha edge vs spread friction vs latency drift.
  - [`btc5m_calibration_and_brier.png`](images/btc5m_calibration_and_brier.png): Empirical calibration curve vs ideal diagonal.
  - [`btc5m_execution_slippage.png`](images/btc5m_execution_slippage.png): End-to-end execution latency and CLOB slippage distribution.
  - [`btc5m_diebold_mariano.png`](images/btc5m_diebold_mariano.png): Statistical loss differential test vs Polymarket midpoint benchmark.
- **[`data/`](data/)**:
  - `audit.duckdb`: Complete, tamper-evident, SHA-256 hash-chained DuckDB database.
  - `*.csv` & `*.parquet`: Tabular exports for all 5 core tables (`audit_trail`, `execution_records`, `forecast_realizations`, `forecast_snapshots`, `market_resolutions`).
