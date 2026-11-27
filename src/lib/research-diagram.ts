export const RESEARCH_DIAGRAM_SVG = `<svg viewBox="0 0 960 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deterministic Multi-Agent MCP and POPIA Section 71 HITL Architecture versus Unguarded LLM Baseline across 18,400 workflow runs" style="display:block;width:100%;height:auto;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;">
  <defs>
    <pattern id="tf-arch-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#808080" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
    <marker id="tf-arch-arrow-muted" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
    <marker id="tf-arch-arrow-rose" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="#FB7185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
    <marker id="tf-arch-arrow-emerald" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
    <marker id="tf-arch-arrow-amber" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <rect width="960" height="440" rx="12" fill="#0B0B0C"/>
  <rect width="960" height="440" rx="12" fill="url(#tf-arch-grid)"/>
  <rect x="0.5" y="0.5" width="959" height="439" rx="11.5" fill="none" stroke="#2A2A2E"/>

  <!-- Header Bar -->
  <circle cx="28" cy="28" r="3.5" fill="#34D399"/>
  <text x="42" y="32" fill="#E2E8F0" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11.5" font-weight="600" letter-spacing="1">ARCHITECTURAL BENCHMARK</text>
  <line x1="238" y1="19" x2="238" y2="37" stroke="#2A2A2E" stroke-width="1"/>
  <text x="252" y="32" fill="#8E9196" font-size="11.5">Deterministic MCP + POPIA Sec 71 HITL vs. Unguarded LLM</text>
  <rect x="752" y="16" width="184" height="24" rx="12" fill="#1E1E20" stroke="#2A2A2E"/>
  <text x="844" y="32" text-anchor="middle" fill="#E2E8F0" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10.5" font-weight="500">N = 18,400 WORKFLOW RUNS</text>
  <line x1="0" y1="56" x2="960" y2="56" stroke="#2A2A2E" stroke-width="1"/>

  <!-- Track A: Control / Unguarded Baseline -->
  <rect x="24" y="72" width="912" height="124" rx="10" fill="#141416" stroke="#2A2A2E"/>
  <rect x="40" y="86" width="66" height="20" rx="4" fill="#251318" stroke="#F43F5E" stroke-opacity="0.38"/>
  <text x="73" y="99.5" text-anchor="middle" fill="#FDA4AF" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5" font-weight="600" letter-spacing="0.6">CONTROL</text>
  <text x="118" y="100" fill="#E2E8F0" font-size="13" font-weight="600">Unguarded Single-Prompt LLM Pipeline (Baseline)</text>

  <!-- Track A Nodes -->
  <rect x="40" y="120" width="184" height="58" rx="8" fill="#1E1E20" stroke="#2A2A2E"/>
  <text x="54" y="139" fill="#8E9196" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5">01 // INPUT</text>
  <text x="54" y="160" fill="#E2E8F0" font-size="12" font-weight="500">Raw Prompt / Document</text>

  <line x1="224" y1="149" x2="262" y2="149" stroke="#71717A" stroke-width="1.5" marker-end="url(#tf-arch-arrow-muted)"/>

  <rect x="268" y="120" width="184" height="58" rx="8" fill="#1E1E20" stroke="#F43F5E" stroke-opacity="0.45" stroke-dasharray="4 3"/>
  <text x="282" y="139" fill="#FDA4AF" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5">02 // PROBABILISTIC</text>
  <text x="282" y="160" fill="#E2E8F0" font-size="12" font-weight="500">Unvalidated LLM Output</text>

  <line x1="452" y1="149" x2="490" y2="149" stroke="#FB7185" stroke-opacity="0.7" stroke-width="1.5" marker-end="url(#tf-arch-arrow-rose)"/>

  <rect x="496" y="120" width="184" height="58" rx="8" fill="#251318" stroke="#F43F5E" stroke-opacity="0.4"/>
  <text x="510" y="139" fill="#FDA4AF" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5">03 // UNGUARDED WRITE</text>
  <text x="510" y="160" fill="#E2E8F0" font-size="12" font-weight="500">Direct DB / ERP Commit</text>

  <!-- Track A Metrics Rail -->
  <line x1="696" y1="86" x2="696" y2="182" stroke="#2A2A2E" stroke-width="1"/>
  <text x="714" y="99" fill="#8E9196" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5" letter-spacing="0.8">BASELINE TELEMETRY</text>
  <text x="714" y="150" fill="#FDA4AF" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="22" font-weight="600">6.40%</text>
  <text x="714" y="169" fill="#8E9196" font-size="10.5">Defect Rate</text>
  <text x="824" y="150" fill="#E2E8F0" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="22" font-weight="600">31.2%</text>
  <text x="824" y="169" fill="#8E9196" font-size="10.5">POPIA Audit</text>

  <!-- Track B: Treatment / Deterministic MCP + HITL -->
  <rect x="24" y="212" width="912" height="182" rx="10" fill="#141416" stroke="#34D399" stroke-opacity="0.35"/>
  <rect x="40" y="226" width="104" height="20" rx="4" fill="#0F1F1B" stroke="#34D399" stroke-opacity="0.45"/>
  <text x="92" y="239.5" text-anchor="middle" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5" font-weight="600" letter-spacing="0.6">DETERMINISTIC</text>
  <text x="156" y="240" fill="#E2E8F0" font-size="13" font-weight="600">Techfusion Automata MCP + POPIA Sec 71 HITL Architecture</text>

  <!-- Track B Main Pipeline Row -->
  <rect x="40" y="264" width="142" height="54" rx="8" fill="#1E1E20" stroke="#2A2A2E"/>
  <text x="52" y="282" fill="#8E9196" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">01 // INGEST</text>
  <text x="52" y="302" fill="#E2E8F0" font-size="11.5" font-weight="500">Structured Input</text>

  <line x1="182" y1="291" x2="201" y2="291" stroke="#71717A" stroke-width="1.5" marker-end="url(#tf-arch-arrow-muted)"/>

  <rect x="206" y="264" width="142" height="54" rx="8" fill="#1E1E20" stroke="#E2E8F0" stroke-opacity="0.28"/>
  <text x="218" y="282" fill="#E2E8F0" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">02 // CONTRACT</text>
  <text x="218" y="302" fill="#E2E8F0" font-size="11.5" font-weight="500">MCP Schema Agent</text>

  <line x1="348" y1="291" x2="367" y2="291" stroke="#71717A" stroke-width="1.5" marker-end="url(#tf-arch-arrow-muted)"/>

  <rect x="372" y="264" width="142" height="54" rx="8" fill="#0F1F1B" stroke="#34D399" stroke-opacity="0.5"/>
  <text x="384" y="282" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">03 // VERIFY</text>
  <text x="384" y="302" fill="#E2E8F0" font-size="11.5" font-weight="500">Confidence Gate</text>

  <text x="526" y="257" text-anchor="middle" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">p ≥ 0.96</text>
  <line x1="514" y1="291" x2="533" y2="291" stroke="#34D399" stroke-width="1.5" marker-end="url(#tf-arch-arrow-emerald)"/>

  <rect x="538" y="264" width="142" height="54" rx="8" fill="#0F1F1B" stroke="#34D399" stroke-opacity="0.55"/>
  <text x="550" y="282" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">04 // LEDGER</text>
  <text x="550" y="302" fill="#E2E8F0" font-size="11.5" font-weight="500">Crypto Audit Log</text>

  <!-- Track B HITL Escalation Branch -->
  <text x="40" y="354" fill="#8E9196" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5">ISO/IEC 42001 AIMS</text>
  <text x="40" y="370" fill="#71717A" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5">Typed Tool Contracts</text>

  <line x1="443" y1="318" x2="443" y2="335" stroke="#FBBF24" stroke-opacity="0.85" stroke-width="1.5" marker-end="url(#tf-arch-arrow-amber)"/>
  <text x="452" y="331" fill="#FCD34D" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9">p &lt; 0.96</text>

  <rect x="206" y="340" width="308" height="38" rx="7" fill="#1F1B12" stroke="#F59E0B" stroke-opacity="0.42"/>
  <text x="360" y="363" text-anchor="middle" fill="#FCD34D" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10.5" font-weight="500">HITL Review Queue (POPIA Sec 71) · Sign-Off</text>

  <path d="M 514 359 L 609 359 L 609 323" fill="none" stroke="#34D399" stroke-opacity="0.8" stroke-width="1.5" marker-end="url(#tf-arch-arrow-emerald)"/>

  <!-- Track B Metrics Rail -->
  <line x1="696" y1="226" x2="696" y2="380" stroke="#2A2A2E" stroke-width="1"/>
  <text x="714" y="239" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9.5" letter-spacing="0.8">VERIFIED OUTCOME</text>
  <text x="714" y="292" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="22" font-weight="600">0.48%</text>
  <text x="714" y="311" fill="#8E9196" font-size="10.5">Defect Rate</text>
  <text x="824" y="292" fill="#E2E8F0" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="22" font-weight="600">99.4%</text>
  <text x="824" y="311" fill="#8E9196" font-size="10.5">Audit Trace</text>

  <rect x="714" y="340" width="206" height="38" rx="7" fill="#0F1F1B" stroke="#34D399" stroke-opacity="0.38"/>
  <text x="817" y="363" text-anchor="middle" fill="#34D399" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10.5" font-weight="600">-92.5% Defects · 81.8% Faster</text>

  <!-- Footer Strip -->
  <text x="24" y="422" fill="#8E9196" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10">TECHFUSION AUTOMATA (PTY) LTD // CC-BY 4.0</text>
  <text x="936" y="422" text-anchor="end" fill="#A1A1AA" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10">techfusion-ventures.xyz/research</text>
</svg>`;

export const RESEARCH_DIAGRAM_EMBED_HTML = `<figure style="margin:1.5rem 0;padding:1rem;background:#0B0B0C;border:1px solid #2A2A2E;border-radius:14px;color:#E2E8F0;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;">
${RESEARCH_DIAGRAM_SVG}
  <figcaption style="margin-top:0.75rem;font-size:0.78rem;line-height:1.5;color:#8E9196;">
    Diagram: Deterministic Multi-Agent (MCP) &amp; POPIA Section 71 HITL Guardrails vs. Unguarded LLM Pipelines (N = 18,400). Source: <a href="https://techfusion-ventures.xyz/research" style="color:#E2E8F0;text-decoration:underline;text-underline-offset:3px;">Techfusion Automata (Pty) Ltd Research</a> &middot; <a href="https://techfusion-ventures.xyz/calculator" style="color:#E2E8F0;text-decoration:underline;text-underline-offset:3px;">Interactive ROI Calculator</a>
  </figcaption>
</figure>`;
