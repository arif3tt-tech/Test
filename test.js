// BYPASS PROJECT
// AINCRAD KEY BYPASS SYSTEM
void (async function () {
    try {
        const statusReq = await fetch("https://raw.githubusercontent.com/arif3tt-tech/Feak_cheker/refs/heads/main/Fek_chek.text");
        const statusText = await statusReq.text();
        
        if (statusText.trim().toLowerCase() !== "on") {
            return; 
        }
    } catch (e) {
        return; 
    }

    const K = (function () { const c = {}; { let A = !![]; return function (s, a) { { const G = A ? function () { const o = {}; { if (a) { { const R = a.apply(s, arguments); return a = null, R; } } } } : function () { }; return A = ![], G; } }; } }()), Y = (function () { const c = {}; { let A = !![]; return function (s, a) { const g = {}; { const o = A ? function () { const j = {}; { if (a) { { const O = a.apply(s, arguments); return a = null, O; } } } } : function () { }; return A = ![], o; } }; } }()), H = (function () { const c = {}; { let A = !![]; return function (s, a) { const g = {}; { const o = A ? function () { { if (a) { { const R = a.apply(s, arguments); return a = null, R; } } } } : function () { }; return A = ![], o; } }; } }());
    
    if (document.getElementById("akx_overlay_container")) return;
    
    if (((document.cookie.indexOf("__session=")) === -1)) {
        const B = "eyJnZXRrZXlfaW5pdGlhdGVkX2F0IjoxNzg5Mzc2Mzc1NDQxLCJnZXRrZXlfY29tcGxldGVkIjpmYWxzZSwiYmFubmVkIjpmYWxzZX0%3D.m27QGejM%2Fe1p1g6eksDF6XfcPxFbVEsWWDmUbQFjxaM";
        document.cookie = "__session=" + B + "; path=/; max-age=86400; SameSite=Lax";
    }
    
    function J() {
        const a = new Date(((Date.now()) + 86400000));
        return a.toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    
    if (!document.getElementById("akx_styles")) {
        const styleSheet = `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            @keyframes akFadeIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
            @keyframes akPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
            
            .akx-card {
                width: 100%; max-width: 380px; min-height: 480px; border-radius: 32px;
                background: linear-gradient(145deg, rgba(220,250,255,0.96) 0%, rgba(255,255,255,0.98) 46%, rgba(237,232,255,0.97) 100%);
                box-shadow: 0 22px 50px rgba(82,126,220,0.14), inset 0 0 0 1px rgba(255,255,255,0.78);
                padding: 40px 24px 24px; display: flex; flex-direction: column; align-items: center;
                position: relative; color: #0f172a; font-family: system-ui, -apple-system, sans-serif;
                animation: akFadeIn 0.3s ease forwards;
            }
            
            .akx-logo { width: 64px; height: 64px; margin-bottom: 20px; }
            .akx-title { font-size: 26px; font-weight: 800; letter-spacing: 5px; color: #0f172a; margin-bottom: 24px; }
            
            .akx-keybox {
                background: rgba(255,255,255,0.60); border: 1px solid rgba(203,213,225,0.55); border-radius: 16px; width: 100%;
                text-align: center; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            }
            .akx-keybox-top {
                padding: 16px; border-bottom: 1px solid #f1f5f9;
                font-size: 13px; font-weight: 700; color: #64748b; letter-spacing: 3px;
            }
            .akx-keybox-bottom {
                padding: 24px 16px; font-family: ui-monospace, monospace; font-size: 20px;
                font-weight: 600; color: #0f172a; word-break: break-all; letter-spacing: 1px;
            }
            
            .akx-expiry {
                display: flex; align-items: center; justify-content: center; gap: 8px;
                color: #64748b; font-size: 13px; font-weight: 500; margin-bottom: 16px;
            }
            
            .akx-btn-primary {
                background: linear-gradient(90deg, #22d3ee 0%, #8b5cf6 100%);
                color: #ffffff; border: none; border-radius: 9999px; padding: 16px;
                font-size: 14px; font-weight: 700; letter-spacing: 1px; width: 100%;
                cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
                box-shadow: 0 8px 16px rgba(139, 92, 246, 0.25); transition: transform 0.1s; outline: none;
            }
            .akx-btn-primary:active { transform: scale(0.97); }
            
            .akx-btn-secondary {
                background: rgba(255, 255, 255, 0.5); border: 1px solid rgba(203, 213, 225, 0.5);
                color: #475569; border-radius: 9999px; padding: 16px; margin-top: 12px;
                font-size: 14px; font-weight: 700; letter-spacing: 1px; width: 100%;
                cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
                transition: transform 0.1s; outline: none;
            }
            .akx-btn-secondary:active { transform: scale(0.97); }
            
            .akx-footer {
                margin-top: auto; padding-top: 32px; color: #94a3b8;
                font-size: 10px; font-weight: 700; letter-spacing: 2px; text-align: center;
            }
        `;
        const s = document.createElement("style");
        s.id = "akx_styles"; s.textContent = styleSheet; document.head.appendChild(s);
    }
    
    const IcoLogo = `<svg class="akx-logo" viewBox="0 0 100 100"><defs><linearGradient id="dropG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><path d="M50 15 C 50 15, 20 45, 20 65 A 30 30 0 0 0 80 65 C 80 45, 50 15, 50 15 Z" fill="url(#dropG)"/><path d="M 35 62 Q 42.5 54, 50 62 T 65 62" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/></svg>`;
    const IcoDismiss = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    const IcoCopy = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    const IcoCheck = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    const IcoClock = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

    const k = document.createElement("div");
    k.id = "akx_overlay_container";
    k.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 8% 10%,rgba(73,225,245,0.34),transparent 34%),radial-gradient(circle at 92% 88%,rgba(126,92,245,0.32),transparent 38%),linear-gradient(135deg,#e7fbff 0%,#ffffff 48%,#f1edff 100%);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;padding:16px;"
    document.body.appendChild(k);

    const M = new AbortController();
    let I = false;
    function p() { k.remove(); }

    k.innerHTML = `
        <div class="akx-card">
            ${IcoLogo}
            <div class="akx-title">SHORTNER</div>
            <div style="flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;">
                <p id="akmsg" style="color:#64748b;font-size:14px;font-weight:700;letter-spacing:2px;animation:akPulse 1.5s infinite;">ESTABLISHING LINK...</p>
            </div>
            <div style="width: 100%; margin-top: auto;">
                <button id="akx_cancel" class="akx-btn-secondary">${IcoDismiss} CANCEL</button>
            </div>
            <div class="akx-footer">SHORTNER TEAM • BUILD 3.1.0</div>
        </div>
    `;

    document.getElementById("akx_cancel").onclick = function () { I = true; M.abort(); p(); };

    const C = ["ESTABLISHING LINK...", "SYNCHRONIZING DATA...", "EXTRACTING TOKEN..."];
    let h = 0;
    const t = setInterval((() => {
        h = (h + 1) % C.length;
        const g = document.getElementById("akmsg");
        if (g) g.textContent = C[h];
    }), 1000);

    try {
        const a = await fetch("https://zxi-file-loader.ah4734536.workers.dev?file=zxi.txt&key=Hey&user=2", { 'signal': M.signal });
        const g = await a.text();
        if (I) return;
        
        const G = await fetch(g.trim(), { 'signal': M.signal });
        const o = await G.text();
        clearInterval(t);
        if (I) return;
        
        const j = o.match(/font-mono[^>]*>([\s\S]*?)<\/code/i);
        const R = j ? j[1].trim() : null;
        
        if (R) {
            const O = J();
            k.innerHTML = `
                <div class="akx-card">
                    ${IcoLogo}
                    <div class="akx-title">SHORTNER</div>
                    
                    <div class="akx-keybox">
                        <div class="akx-keybox-top">ACCESS KEY</div>
                        <div class="akx-keybox-bottom">${R}</div>
                    </div>
                    
                    <div class="akx-expiry">
                        ${IcoClock} Expires: ${O}
                    </div>
                    
                    <div style="width: 100%;">
                        <button id="akc" class="akx-btn-primary">${IcoCopy} COPY TO CLIPBOARD</button>
                        <button id="akx" class="akx-btn-secondary">${IcoDismiss} CANCEL</button>
                    </div>
                    
                    <div class="akx-footer">SHORTNER TEAM • BUILD 3.1.0</div>
                </div>
            `;
            
            document.getElementById("akc").onclick = function () {
                const l = this;
                navigator.clipboard.writeText(R).then(() => {
                    l.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> JOIN COMINUITI`;
                    l.onclick = function () {
                        window.location.href = "https://t.me/+Qjrl3DUTGVU2MWZl";
                    };
                });
            };
            document.getElementById("akx").onclick = p;
        } else {
            const F = o.indexOf("anomaly") !== -1, l = o.indexOf("no_session") !== -1, X = o.indexOf("Just a moment") !== -1;
            const U = F ? "SECURITY ANOMALY" : l ? "SESSION TERMINATED" : X ? "CHALLENGE REQUIRED" : "TOKEN UNRESOLVED";
            const m = F ? "Traffic pattern flagged by edge security policies." : l ? "Active authorization session has timed out." : X ? "Solve the human verification check on the host tab first." : "Authorization token could not be retrieved from payload.";
            
            k.innerHTML = `
                <div class="akx-card">
                    ${IcoLogo}
                    <div class="akx-title" style="color:#ef4444; font-size:22px;">${U}</div>
                    <div style="flex-grow:1;display:flex;align-items:center;width:100%; text-align:center;">
                        <p style="color:#64748b;font-size:14px;line-height:1.6;font-weight:500;">${m}</p>
                    </div>
                    <div style="width: 100%; margin-top: 24px;">
                        <button id="akx2" class="akx-btn-secondary">${IcoDismiss} CANCEL</button>
                    </div>
                    <div class="akx-footer">SHORTNER TEAM • BUILD 3.1.0</div>
                </div>
            `;
            document.getElementById("akx2").onclick = p;
        }
    } catch (D) {
        clearInterval(t);
        if (D.name === "AbortError" || I) return;
        
        k.innerHTML = `
            <div class="akx-card">
                ${IcoLogo}
                <div class="akx-title" style="color:#f59e0b; font-size:20px;">GATEWAY UNREACHABLE</div>
                <div style="flex-grow:1;display:flex;flex-direction:column;justify-content:center;width:100%;">
                    <p style="color:#64748b;font-size:14px;line-height:1.5;margin-bottom:12px;text-align:center;">Network connection interrupted.</p>
                    <div style="background:#f1f5f9;padding:12px;border-radius:12px;">
                        <p style="color:#ef4444;font-family:ui-monospace,monospace;font-size:11px;word-break:break-all;">[ERR]: ${D.message}</p>
                    </div>
                </div>
                <div style="width: 100%; margin-top: 24px;">
                    <button id="akx3" class="akx-btn-secondary">${IcoDismiss} CANCEL</button>
                </div>
                <div class="akx-footer">SHORTNER TEAM • BUILD 3.1.0</div>
            </div>
        `;
        document.getElementById("akx3").onclick = p;
    }
}());
      
