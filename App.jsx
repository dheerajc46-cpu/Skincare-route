import { useState } from "react";

const morningSteps = [
  { id: "m1", step: 1, time: "~6:00 AM", title: "Cleanse", product: "Minimalist 2% Salicylic Acid Face Wash", duration: "60 sec", week: 1, icon: "💧", color: "#38BDF8", how: "Wet face with lukewarm water. Massage gently in circular motions for 60 seconds. Rinse thoroughly. Pat dry — never rub.", tip: "Hot water strips oils. Lukewarm only!" },
  { id: "m2", step: 2, time: "~6:08 AM", title: "Vitamin C Serum", product: "Minimalist 10% Vitamin C Serum", duration: "Wait 5 min", week: 3, icon: "🍊", color: "#FB923C", how: "Apply 3–4 drops. Gently press into skin. Let absorb fully before next step.", tip: "Slight tingle is normal. Brightens skin over time." },
  { id: "m3", step: 3, time: "~6:14 AM", title: "Niacinamide Serum", product: "Minimalist 10% Niacinamide Serum", duration: "Wait 3 min", week: 1, icon: "✨", color: "#C084FC", how: "Apply 3–4 drops after Vit C absorbs. Press gently. Focus on cheeks and nose.", tip: "Most important step. Reduces pores & dark spots." },
  { id: "m4", step: 4, time: "~6:18 AM", title: "Moisturize", product: "Neutrogena Hydro Boost Water Gel", duration: "1 min", week: 1, icon: "🌊", color: "#22D3EE", how: "Pea-sized amount. Apply upward strokes across face and neck.", tip: "Oily skin still needs moisture — skipping makes oiliness worse." },
  { id: "m5", step: 5, time: "~6:20 AM", title: "Sunscreen", product: "Minimalist SPF 50 PA++++ Sunscreen", duration: "Done!", week: 1, icon: "☀️", color: "#FACC15", how: "2 full finger lengths of product. Apply to face, neck, and scalp. Always the last step.", tip: "Jaipur sun is harsh. SPF prevents dark spots from worsening." },
];

const eveningSteps = [
  { id: "e1", step: 1, time: "~9:30 PM", title: "Double Cleanse", product: "Minimalist 2% Salicylic Acid Face Wash", duration: "90 sec", week: 1, icon: "🌙", color: "#818CF8", how: "Wash face thoroughly to remove SPF, sweat and oil. Take your time.", tip: "Most important cleanse of the day. Remove everything." },
  { id: "e2", step: 2, time: "~9:33 PM", title: "Niacinamide Serum", product: "Minimalist 10% Niacinamide Serum", duration: "Wait 3 min", week: 1, icon: "✨", color: "#C084FC", how: "Apply 3–4 drops. Press gently into skin. Focus on pores and dark spots.", tip: "AM + PM niacinamide accelerates results significantly." },
  { id: "e3", step: 3, time: "~9:37 PM", title: "Retinol", product: "Minimalist 0.3% Retinol Serum with Q10", duration: "Wait 5 min", week: 5, icon: "🔬", color: "#F87171", how: "Pea-sized amount only. Apply evenly, avoid eye area. Start 2 nights/week, build up slowly.", tip: "⚠️ Night only! Mild peeling first 2 weeks is normal." },
  { id: "e4", step: 4, time: "~9:43 PM", title: "Eye Cream", product: "Minimalist Vit K + Retinal + Caffeine Eye Cream", duration: "30 sec", week: 2, icon: "👁️", color: "#34D399", how: "Tiny amount under each eye. Tap gently with ring finger — never drag.", tip: "Ring finger applies least pressure. Always use it around eyes." },
  { id: "e5", step: 5, time: "~9:46 PM", title: "Night Moisturize", product: "Neutrogena Hydro Boost Water Gel", duration: "Done!", week: 1, icon: "😴", color: "#A78BFA", how: "Apply generously — skin repairs at night. Include neck. Slightly more than morning.", tip: "Consistent night moisture = faster results." },
];

const weeklySteps = [
  { id: "w1", day: "Tue & Fri Night", title: "Exfoliate", product: "Minimalist 25% AHA + 5% PHA + 2% BHA Peeling Solution", week: 5, icon: "⚗️", color: "#FF7043", how: "Apply thin layer on dry face. Leave exactly 10 mins. Rinse thoroughly. Night only. Skip retinol this night.", tip: "🚨 Strong acid peel — patch test first. If burning, rinse immediately." },
];

const timeline = [
  { week: "Week 1–2", label: "Foundation", desc: "Cleanse + Niacinamide + SPF. Let skin adjust.", color: "#38BDF8" },
  { week: "Week 3–4", label: "Brighten", desc: "Add Vitamin C (AM) + Eye Cream (PM).", color: "#FB923C" },
  { week: "Week 5–6", label: "Exfoliate", desc: "Add AHA/BHA peel on Tue & Fri nights.", color: "#C084FC" },
  { week: "Week 7+", label: "Renew", desc: "Add Retinol at night, 2x/week first.", color: "#F87171" },
  { week: "Month 3", label: "Glow Up ✨", desc: "Full routine in place. Visible glow & reduced spots!", color: "#4ADE80" },
];

const tips = [
  { icon: "🚿", text: "Never sleep without washing your face" },
  { icon: "☀️", text: "SPF every morning — no exceptions, even indoors" },
  { icon: "💧", text: "Drink 8–10 glasses of water daily" },
  { icon: "🛏️", text: "Change pillowcase every 3–4 days" },
  { icon: "🙌", text: "Never touch face with unwashed hands" },
  { icon: "⏳", text: "Skin takes 4–6 weeks to visibly change — be patient!" },
  { icon: "🥗", text: "Eat less oily & spicy food. More fruits & veggies" },
  { icon: "😴", text: "Get 7–8 hours of sleep. Skin repairs while you sleep" },
];

const products = [
  { name: "Minimalist Salicylic + LHA 2% Face Cleanser 100ml", price: "₹239–299", week: "Week 1" },
  { name: "Minimalist 10% Niacinamide Face Serum 30ml", price: "₹570–599", week: "Week 1" },
  { name: "Minimalist SPF 50 PA++++ Sunscreen 50g", price: "₹379–399", week: "Week 1" },
  { name: "Neutrogena Hydro Boost Water Gel 50g", price: "₹1,071–1,190", week: "Week 1" },
  { name: "Minimalist 10% Vitamin C Face Serum 10ml", price: "₹299", week: "Week 3" },
  { name: "Minimalist Vit K + Retinal + Caffeine Eye Cream 14g", price: "₹599", week: "Week 2" },
  { name: "Minimalist 25% AHA + 5% PHA + 2% BHA Peeling Solution 30ml", price: "₹699", week: "Week 5" },
  { name: "Minimalist 0.3% Retinol Face Serum with Q10 30ml", price: "₹527–599", week: "Week 7" },
];

const today = () => new Date().toISOString().split("T")[0];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [tab, setTab] = useState("morning");
  const [expanded, setExpanded] = useState(null);
  const [checked, setChecked] = useState({});
  const [confetti, setConfetti] = useState(false);

  const todayKey = today();
  const todayChecked = checked[todayKey] || {};

  const toggleStep = (id) => {
    const newChecked = { ...checked };
    if (!newChecked[todayKey]) newChecked[todayKey] = {};
    newChecked[todayKey][id] = !newChecked[todayKey][id];
    const allIds = [...morningSteps, ...eveningSteps].map(s => s.id);
    const allDone = allIds.every(i => newChecked[todayKey][i]);
    if (allDone) { setConfetti(true); setTimeout(() => setConfetti(false), 2500); }
    setChecked(newChecked);
  };

  const getProgress = (steps) => {
    const done = steps.filter(s => todayChecked[s.id]).length;
    return { done, total: steps.length, pct: Math.round((done / steps.length) * 100) };
  };

  const mProg = getProgress(morningSteps);
  const eProg = getProgress(eveningSteps);
  const totalPct = Math.round(((mProg.done + eProg.done) / (mProg.total + eProg.total)) * 100);
  const currentSteps = tab === "morning" ? morningSteps : tab === "evening" ? eveningSteps : weeklySteps;
  const currentProg = tab === "morning" ? mProg : tab === "evening" ? eProg : { done: 0, total: 1, pct: 0 };

  const progressRing = (pct, size = 56, stroke = 5, color = "#C084FC") => {
    const r = (size - stroke * 2) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (pct / 100) * circ;
    return (
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
          strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.6s ease" }} />
      </svg>
    );
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "linear-gradient(160deg, #0d0d1a 0%, #1a0d2e 50%, #0d1a2e 100%)",
      fontFamily: "'Trebuchet MS', sans-serif", color: "#f0ece4",
      display: "flex", flexDirection: "column", overflow: "hidden",
      maxWidth: "480px", margin: "0 auto",
    }}>
      {confetti && (
        <div style={{ position: "absolute", inset: 0, zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "64px", marginBottom: "12px" }}>🎉</div>
            <div style={{ fontSize: "24px", fontWeight: "800", color: "#FACC15" }}>Full Day Done!</div>
            <div style={{ fontSize: "14px", color: "#a89cc8", marginTop: "6px" }}>Amazing consistency. Keep it up!</div>
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "80px" }}>

        {/* HOME */}
        {screen === "home" && (
          <div style={{ padding: "20px 16px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "12px", color: "#7c72a0", letterSpacing: "2px", textTransform: "uppercase" }}>Good day,</div>
                <div style={{ fontSize: "22px", fontWeight: "800" }}>Dheeraj 👋</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  {progressRing(totalPct, 56, 5, totalPct === 100 ? "#4ADE80" : "#C084FC")}
                  <span style={{ position: "absolute", fontSize: "11px", fontWeight: "800", color: totalPct === 100 ? "#4ADE80" : "#C084FC" }}>{totalPct}%</span>
                </div>
                <div style={{ fontSize: "9px", color: "#7c72a0", marginTop: "2px" }}>TODAY</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
              {[{ label: "☀️ Morning", prog: mProg, color: "#FB923C", tab: "morning" }, { label: "🌙 Evening", prog: eProg, color: "#818CF8", tab: "evening" }].map(c => (
                <div key={c.tab} onClick={() => { setTab(c.tab); setScreen("routine"); }}
                  style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", padding: "16px", cursor: "pointer", border: `1px solid ${c.color}30`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: -10, right: -10, fontSize: "50px", opacity: 0.08 }}>{c.tab === "morning" ? "☀️" : "🌙"}</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "10px" }}>{c.label}</div>
                  <div style={{ fontSize: "26px", fontWeight: "900", color: c.color }}>{c.prog.done}<span style={{ fontSize: "14px", color: "#7c72a0", fontWeight: "400" }}>/{c.prog.total}</span></div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", marginTop: "10px" }}>
                    <div style={{ height: "100%", borderRadius: "4px", background: c.color, width: `${c.prog.pct}%`, transition: "width 0.5s" }} />
                  </div>
                  <div style={{ fontSize: "10px", color: "#7c72a0", marginTop: "4px" }}>{c.prog.pct}% done</div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", borderRadius: "14px", padding: "14px 16px", marginBottom: "20px" }}>
              <div style={{ fontSize: "11px", color: "#FACC15", fontWeight: "700", letterSpacing: "1px", marginBottom: "4px" }}>💡 DAILY TIP</div>
              <div style={{ fontSize: "13px", color: "#d4cfec", lineHeight: 1.5 }}>{tips[new Date().getDay() % tips.length].icon} {tips[new Date().getDay() % tips.length].text}</div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "16px", padding: "16px", marginBottom: "16px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", marginBottom: "14px" }}>📈 Your Journey</div>
              {timeline.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: t.color, boxShadow: `0 0 6px ${t.color}`, marginTop: "3px" }} />
                    {i < timeline.length - 1 && <div style={{ width: "2px", height: "24px", background: "rgba(255,255,255,0.1)", marginTop: "2px" }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: t.color, fontWeight: "700" }}>{t.week}</span>
                      <span style={{ fontSize: "10px", background: `${t.color}20`, color: t.color, padding: "1px 6px", borderRadius: "10px" }}>{t.label}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#a89cc8", marginTop: "2px" }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROUTINE */}
        {screen === "routine" && (
          <div style={{ padding: "20px 16px 0" }}>
            <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>
              {tab === "morning" ? "☀️ Morning Routine" : tab === "evening" ? "🌙 Evening Routine" : "📅 Weekly Tasks"}
            </div>
            <div style={{ fontSize: "12px", color: "#7c72a0", marginBottom: "16px" }}>
              {tab !== "weekly" ? `${currentProg.done}/${currentProg.total} steps completed today` : "Twice a week"}
            </div>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "4px", gap: "4px", marginBottom: "16px" }}>
              {["morning", "evening", "weekly"].map(t => (
                <button key={t} onClick={() => { setTab(t); setExpanded(null); }} style={{
                  flex: 1, padding: "8px 4px", borderRadius: "8px", border: "none", cursor: "pointer",
                  fontSize: "11px", fontWeight: "700",
                  background: tab === t ? "linear-gradient(135deg, #C084FC, #818CF8)" : "transparent",
                  color: tab === t ? "#fff" : "#7c72a0", transition: "all 0.2s",
                }}>{t === "morning" ? "☀️ AM" : t === "evening" ? "🌙 PM" : "📅 Weekly"}</button>
              ))}
            </div>
            {currentSteps.map((item) => {
              const isChecked = !!todayChecked[item.id];
              const isOpen = expanded === item.id;
              const isWeekly = tab === "weekly";
              return (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <div style={{
                    background: isChecked ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isChecked ? "#4ADE8040" : isOpen ? `${item.color}40` : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "14px", overflow: "hidden", transition: "all 0.3s",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px" }}>
                      {!isWeekly && (
                        <div onClick={() => toggleStep(item.id)} style={{
                          width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0, cursor: "pointer",
                          background: isChecked ? "#4ADE80" : "rgba(255,255,255,0.08)",
                          border: `2px solid ${isChecked ? "#4ADE80" : "rgba(255,255,255,0.2)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "14px", transition: "all 0.2s", color: "#0d0d1a", fontWeight: "800",
                        }}>{isChecked ? "✓" : ""}</div>
                      )}
                      <div style={{ width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0, background: `${item.color}18`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{item.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }} onClick={() => setExpanded(isOpen ? null : item.id)}>
                        <div style={{ fontSize: "15px", fontWeight: "700", textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "#7c72a0" : "#f0ece4" }}>{item.title}</div>
                        <div style={{ fontSize: "11px", color: "#7c72a0", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.product}</div>
                        <div style={{ fontSize: "10px", color: item.color, marginTop: "2px" }}>{isWeekly ? `📅 ${item.day}` : `⏱ ${item.duration} · ${item.time}`}</div>
                      </div>
                      <div onClick={() => setExpanded(isOpen ? null : item.id)} style={{ color: "#7c72a0", fontSize: "16px", cursor: "pointer", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>⌄</div>
                    </div>
                    {isOpen && (
                      <div style={{ padding: "0 14px 14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ paddingTop: "12px", fontSize: "13px", color: "#d4cfec", lineHeight: "1.7", marginBottom: "10px" }}>
                          <strong style={{ color: "#fff" }}>How to apply:</strong><br />{item.how}
                        </div>
                        <div style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, borderRadius: "10px", padding: "10px 12px", fontSize: "12px", color: item.color, lineHeight: 1.6 }}>💡 {item.tip}</div>
                        {item.week > 1 && <div style={{ marginTop: "8px", background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", borderRadius: "8px", padding: "8px 12px", fontSize: "11px", color: "#FACC15" }}>⏳ Start this from Week {item.week}</div>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TIPS & SHOP */}
        {screen === "tips" && (
          <div style={{ padding: "20px 16px 0" }}>
            <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>⚡ Golden Rules</div>
            <div style={{ fontSize: "12px", color: "#7c72a0", marginBottom: "20px" }}>Follow these for best results</div>
            {tips.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "12px", background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "14px" }}>
                <div style={{ fontSize: "22px", flexShrink: 0 }}>{t.icon}</div>
                <div style={{ fontSize: "13px", color: "#d4cfec", lineHeight: 1.6, paddingTop: "2px" }}>{t.text}</div>
              </div>
            ))}
            <div style={{ marginTop: "8px" }}>
              <div style={{ fontSize: "16px", fontWeight: "800", marginBottom: "12px" }}>🛒 Products to Buy</div>
              {products.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "12px 14px", marginBottom: "8px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#f0ece4" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "#7c72a0", marginTop: "2px" }}>{p.price} · Nykaa / Amazon.in</div>
                  </div>
                  <div style={{ fontSize: "9px", background: "#C084FC22", color: "#C084FC", padding: "3px 8px", borderRadius: "20px", fontWeight: "700", flexShrink: 0 }}>{p.week}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(13,13,26,0.97)", backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex", padding: "10px 0 16px",
      }}>
        {[{ id: "home", icon: "🏠", label: "Home" }, { id: "routine", icon: "📋", label: "Routine" }, { id: "tips", icon: "💡", label: "Tips & Shop" }].map(n => (
          <button key={n.id} onClick={() => setScreen(n.id)} style={{
            flex: 1, border: "none", background: "transparent", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "6px 0",
          }}>
            <span style={{ fontSize: "20px" }}>{n.icon}</span>
            <span style={{ fontSize: "10px", fontWeight: "700", color: screen === n.id ? "#C084FC" : "#4a4468", letterSpacing: "0.5px" }}>{n.label}</span>
            {screen === n.id && <div style={{ width: "20px", height: "2px", background: "#C084FC", borderRadius: "2px" }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
