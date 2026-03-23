import { useState } from “react”;

const workouts = [
{
id: 1,
title: “IRON SWEAT”,
subtitle: “30-Min Dumbbell HIIT”,
duration: “30 MIN”,
level: “Intermediate”,
equipment: “Light Dumbbells”,
tag: “HIIT”,
color: “#FF4D00”,
bg: “#0D0D0D”,
phases: [
{
name: “WARM-UP”,
time: “5 min”,
icon: “🔥”,
exercises: [
{ name: “Jumping Jacks”, reps: “30 sec”, note: “Arms wide” },
{ name: “Hip Circles”, reps: “30 sec each side”, note: “Loosen hips” },
{ name: “Arm Swings”, reps: “30 sec”, note: “Cross-body” },
{ name: “High Knees”, reps: “45 sec”, note: “Pump arms” },
{ name: “Shoulder Rolls + Chest Openers”, reps: “1 min”, note: “Slow & controlled” },
],
},
{
name: “BLOCK 1 — HIIT CIRCUIT”,
time: “12 min”,
icon: “⚡”,
note: “4 rounds · 30 sec ON / 10 sec REST”,
exercises: [
{ name: “Dumbbell Squat Jumps”, reps: “30 sec”, note: “Hold DBs at sides” },
{ name: “Renegade Row Push-Up”, reps: “30 sec”, note: “Alternate rows” },
{ name: “DB Swing (Kettlebell-style)”, reps: “30 sec”, note: “Hip hinge power” },
{ name: “Lateral Shuffle + DB Curl”, reps: “30 sec”, note: “3 shuffles, 1 curl” },
],
},
{
name: “BLOCK 2 — BODYWEIGHT BLAST”,
time: “8 min”,
icon: “💥”,
note: “2 rounds · 40 sec ON / 20 sec REST”,
exercises: [
{ name: “Burpee to Tuck Jump”, reps: “40 sec”, note: “No DBs needed” },
{ name: “Push-Up to T-Rotation”, reps: “40 sec”, note: “Alternate sides” },
{ name: “Mountain Climbers”, reps: “40 sec”, note: “Drive knees hard” },
{ name: “Plyo Lunge”, reps: “40 sec”, note: “Switch in air” },
],
},
{
name: “COOL-DOWN”,
time: “5 min”,
icon: “🧊”,
exercises: [
{ name: “Child’s Pose”, reps: “1 min”, note: “Breathe deep” },
{ name: “Standing Quad Stretch”, reps: “30 sec each”, note: “Balance focus” },
{ name: “Pigeon Pose”, reps: “1 min each”, note: “Hip flexors” },
{ name: “Chest Doorframe Stretch”, reps: “1 min”, note: “Open chest” },
],
},
],
},
{
id: 2,
title: “FAST BURN”,
subtitle: “30-Min CrossFit-Style”,
duration: “30 MIN”,
level: “Beginner–Int.”,
equipment: “Light Dumbbells”,
tag: “CROSSFIT”,
color: “#00D4FF”,
bg: “#050F1A”,
phases: [
{
name: “WARM-UP”,
time: “5 min”,
icon: “🔥”,
exercises: [
{ name: “Inchworm Walk-Out”, reps: “5 reps”, note: “Slow, controlled” },
{ name: “Leg Swings”, reps: “10 each side”, note: “Front/back & lateral” },
{ name: “World’s Greatest Stretch”, reps: “5 each side”, note: “Thoracic rotation” },
{ name: “DB Deadlift (light)”, reps: “10 reps”, note: “Warm the hinge” },
],
},
{
name: “AMRAP — 12 MINUTES”,
time: “12 min”,
icon: “⚡”,
note: “As Many Rounds As Possible · Rest only when needed”,
exercises: [
{ name: “10 DB Thrusters”, reps: “10 reps”, note: “Squat + press” },
{ name: “10 DB Romanian Deadlifts”, reps: “10 reps”, note: “Slow & squeeze” },
{ name: “10 Push-Ups”, reps: “10 reps”, note: “Full range” },
{ name: “200m Sprint in Place”, reps: “30 sec”, note: “All-out effort” },
],
},
{
name: “FOR TIME — FINISHER”,
time: “8 min”,
icon: “🏁”,
note: “3 Rounds · Log your time”,
exercises: [
{ name: “15 DB Goblet Squats”, reps: “15 reps”, note: “Hold 1 DB at chest” },
{ name: “12 DB Bent-Over Rows”, reps: “12 reps”, note: “Both arms” },
{ name: “10 Jump Squats”, reps: “10 reps”, note: “No DBs” },
{ name: “5 Burpees”, reps: “5 reps”, note: “Full extension” },
],
},
{
name: “COOL-DOWN”,
time: “5 min”,
icon: “🧊”,
exercises: [
{ name: “Cat-Cow Breathing”, reps: “1 min”, note: “Spine mobility” },
{ name: “Seated Hamstring Stretch”, reps: “1 min each”, note: “Reach for toes” },
{ name: “90/90 Hip Stretch”, reps: “1 min each”, note: “Rotate front to back” },
{ name: “Diaphragmatic Breathing”, reps: “1 min”, note: “Reset nervous system” },
],
},
],
},
{
id: 3,
title: “GRIND SESSION”,
subtitle: “45-Min HIIT + Run Hybrid”,
duration: “45 MIN”,
level: “Intermediate”,
equipment: “Light Dumbbells + Running”,
tag: “HIIT + RUN”,
color: “#FFD600”,
bg: “#0A0A00”,
phases: [
{
name: “WARM-UP”,
time: “5 min”,
icon: “🔥”,
exercises: [
{ name: “Dynamic Walking Lunges”, reps: “10 each side”, note: “Add arm reach” },
{ name: “Lateral Band Walk / Lateral Shuffle”, reps: “30 sec each way”, note: “Activate glutes” },
{ name: “Arm Circles + Shoulder Mobility”, reps: “1 min”, note: “Small to large” },
{ name: “Light Jog in Place”, reps: “1 min”, note: “Build heart rate” },
],
},
{
name: “RUN INTERVAL 1”,
time: “5 min”,
icon: “🏃”,
note: “Outside or treadmill · Moderate pace (Zone 2–3)”,
exercises: [
{ name: “Steady Run”, reps: “5 min”, note: “Conversational effort” },
],
},
{
name: “HIIT BLOCK 1”,
time: “10 min”,
icon: “⚡”,
note: “40 sec ON / 20 sec REST · 3 rounds”,
exercises: [
{ name: “DB Snatch (alternating)”, reps: “40 sec”, note: “Explosive hips” },
{ name: “Push-Up Burpee”, reps: “40 sec”, note: “Full push-up at bottom” },
{ name: “DB Lateral Lunge + Curl”, reps: “40 sec”, note: “Alternate sides” },
{ name: “Tuck Jumps”, reps: “40 sec”, note: “Drive knees to chest” },
],
},
{
name: “RUN INTERVAL 2”,
time: “5 min”,
icon: “🏃”,
note: “Push the pace — Zone 3–4”,
exercises: [
{ name: “Tempo Run”, reps: “5 min”, note: “Uncomfortable but sustainable” },
],
},
{
name: “HIIT BLOCK 2”,
time: “10 min”,
icon: “💥”,
note: “45 sec ON / 15 sec REST · 3 rounds”,
exercises: [
{ name: “DB Clean + Press”, reps: “45 sec”, note: “Power from hips” },
{ name: “V-Up + DB Pass”, reps: “45 sec”, note: “Pass DB feet to hands” },
{ name: “Squat Jump + DB Overhead Hold”, reps: “45 sec”, note: “Arms locked out” },
{ name: “Plank DB Drag”, reps: “45 sec”, note: “Cross-body drag” },
],
},
{
name: “COOL-DOWN”,
time: “5 min”,
icon: “🧊”,
exercises: [
{ name: “Walking Cool-Down”, reps: “1 min”, note: “Lower heart rate” },
{ name: “Standing IT Band Stretch”, reps: “45 sec each”, note: “Runners essential” },
{ name: “Hip Flexor Kneeling Lunge”, reps: “1 min each”, note: “Deep psoas stretch” },
{ name: “Supine Spinal Twist”, reps: “45 sec each”, note: “Release back tension” },
],
},
],
},
{
id: 4,
title: “THE CRUSHER”,
subtitle: “50-Min Full Body HIIT”,
duration: “50 MIN”,
level: “Advanced”,
equipment: “Light Dumbbells”,
tag: “HIIT”,
color: “#FF006E”,
bg: “#0D000A”,
phases: [
{
name: “WARM-UP”,
time: “7 min”,
icon: “🔥”,
exercises: [
{ name: “Foam Roll / Floor Mobility”, reps: “2 min”, note: “Quads, lats, thoracic” },
{ name: “Jumping Jacks”, reps: “1 min”, note: “Build blood flow” },
{ name: “Squat to Stand”, reps: “10 reps”, note: “Hamstring + hip opener” },
{ name: “Bear Crawl Forward / Backward”, reps: “30 sec each”, note: “Prime shoulders” },
{ name: “DB Deadlift Warm-Up”, reps: “12 reps light”, note: “Groove the hinge” },
],
},
{
name: “BLOCK A — LOWER BODY POWER”,
time: “12 min”,
icon: “⚡”,
note: “EMOM (Every Minute on the Minute) · 12 rounds”,
exercises: [
{ name: “Odd mins: 10 DB Jump Squats”, reps: “10 reps”, note: “Light DBs at sides” },
{ name: “Even mins: 12 DB Reverse Lunges”, reps: “12 reps”, note: “6 each leg” },
],
},
{
name: “BLOCK B — UPPER BODY BURN”,
time: “10 min”,
icon: “💪”,
note: “3 rounds · 40 sec ON / 20 sec REST”,
exercises: [
{ name: “DB Arnold Press”, reps: “40 sec”, note: “Rotate palms in to out” },
{ name: “Renegade Row”, reps: “40 sec”, note: “Tight plank, alternate” },
{ name: “DB Chest Fly on Floor”, reps: “40 sec”, note: “Slow eccentric” },
{ name: “Tricep Push-Up + DB Kickback”, reps: “40 sec”, note: “Combo move” },
],
},
{
name: “BLOCK C — METABOLIC FINISHER”,
time: “12 min”,
icon: “🏁”,
note: “4 rounds · 35 sec ON / 10 sec REST”,
exercises: [
{ name: “DB Hang Power Clean”, reps: “35 sec”, note: “Hip drive = power” },
{ name: “Lateral Burpee Over DB”, reps: “35 sec”, note: “Jump laterally over DB” },
{ name: “DB Russian Twist”, reps: “35 sec”, note: “Feet elevated” },
{ name: “Sprint in Place”, reps: “35 sec”, note: “ALL OUT” },
],
},
{
name: “COOL-DOWN”,
time: “9 min”,
icon: “🧊”,
exercises: [
{ name: “Full Body Floor Stretch Flow”, reps: “3 min”, note: “Child’s pose, cobra, seated fold” },
{ name: “Figure-4 Glute Stretch”, reps: “1 min each”, note: “Supine” },
{ name: “Doorframe Chest Stretch”, reps: “1 min”, note: “Open the pec minor” },
{ name: “Legs-Up-the-Wall”, reps: “2 min”, note: “Flush legs, parasympathetic reset” },
],
},
],
},
{
id: 5,
title: “LONG GAME”,
subtitle: “50-Min CrossFit Endurance”,
duration: “50 MIN”,
level: “Intermediate–Adv.”,
equipment: “Light Dumbbells”,
tag: “CROSSFIT”,
color: “#00FF94”,
bg: “#000D07”,
phases: [
{
name: “WARM-UP”,
time: “7 min”,
icon: “🔥”,
exercises: [
{ name: “Jump Rope / Jump Rope Sim”, reps: “2 min”, note: “Use imaginary rope” },
{ name: “PVC / Broomstick Pass-Throughs”, reps: “10 reps”, note: “Shoulder mobility” },
{ name: “Good Mornings (bodyweight)”, reps: “12 reps”, note: “Hip hinge pattern” },
{ name: “Air Squat + Overhead Reach”, reps: “10 reps”, note: “Ankle + thoracic” },
{ name: “DB Deadlift Build-Up”, reps: “3x8 ascending”, note: “Gradually increase effort” },
],
},
{
name: “PART 1 — CHIPPER”,
time: “15 min”,
icon: “⚡”,
note: “Complete each set once, in order, for time”,
exercises: [
{ name: “50 Jumping Jacks”, reps: “50 reps”, note: “Fast & rhythmic” },
{ name: “40 DB Goblet Squats”, reps: “40 reps”, note: “1 DB at chest” },
{ name: “30 Push-Ups”, reps: “30 reps”, note: “Modify on knees if needed” },
{ name: “20 DB Deadlifts”, reps: “20 reps”, note: “Both DBs” },
{ name: “10 Burpee + Broad Jump”, reps: “10 reps”, note: “Land soft, jump forward” },
],
},
{
name: “PART 2 — STRENGTH COMPLEX”,
time: “15 min”,
icon: “💪”,
note: “5 rounds, rest 90 sec between rounds”,
exercises: [
{ name: “5 DB Hang Cleans”, reps: “5 reps”, note: “Explosive pull” },
{ name: “5 DB Front Squats”, reps: “5 reps”, note: “DBs on shoulders” },
{ name: “5 DB Push Press”, reps: “5 reps”, note: “Dip & drive” },
{ name: “10 DB Romanian Deadlifts”, reps: “10 reps”, note: “Slow & long” },
],
},
{
name: “PART 3 — CORE CASH-OUT”,
time: “5 min”,
icon: “🔩”,
note: “2 rounds · No rest between exercises”,
exercises: [
{ name: “DB Suitcase March (in place)”, reps: “30 sec each side”, note: “Anti-lateral flexion” },
{ name: “Hollow Body Hold”, reps: “30 sec”, note: “Lower back flat” },
{ name: “DB Windmill”, reps: “8 reps each side”, note: “Light DB overhead” },
{ name: “Dead Bug + DB Chest Press”, reps: “10 reps”, note: “Combo stability” },
],
},
{
name: “COOL-DOWN”,
time: “8 min”,
icon: “🧊”,
exercises: [
{ name: “Slow Walk / March in Place”, reps: “1 min”, note: “Bring HR down” },
{ name: “Downward Dog Flow”, reps: “2 min”, note: “Pedal heels” },
{ name: “Pigeon Pose”, reps: “1 min each”, note: “Hip opener” },
{ name: “Seated Spinal Twist”, reps: “45 sec each”, note: “Full rotation” },
{ name: “Savasana / Box Breathing”, reps: “2 min”, note: “4-4-4-4 breath pattern” },
],
},
],
},
];

const tagColors = {
HIIT: “#FF4D00”,
CROSSFIT: “#00D4FF”,
“HIIT + RUN”: “#FFD600”,
};

export default function App() {
const [active, setActive] = useState(0);
const [expandedPhase, setExpandedPhase] = useState(null);
const w = workouts[active];

return (
<div style={{
minHeight: “100vh”,
background: “#080808”,
fontFamily: “‘Barlow Condensed’, sans-serif”,
color: “#fff”,
overflowX: “hidden”,
}}>
<style>{`@import url('<https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Barlow:wght@400;500&display=swap>'); * { box-sizing: border-box; margin: 0; padding: 0; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; } .workout-card { cursor: pointer; transition: all 0.2s ease; border: 2px solid transparent; } .workout-card:hover { transform: translateY(-2px); } .phase-row { cursor: pointer; transition: background 0.15s ease; } .phase-row:hover { background: rgba(255,255,255,0.03); } .ex-row { animation: slideIn 0.2s ease forwards; opacity: 0; } @keyframes slideIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } } .pill { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; } @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }`}</style>

```
  {/* Header */}
  <div style={{
    padding: "32px 24px 20px",
    borderBottom: "1px solid #1a1a1a",
    display: "flex",
    alignItems: "flex-end",
    gap: "12px",
  }}>
    <div>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "#555", fontWeight: 700, marginBottom: 4, textTransform: "uppercase" }}>Home Training</div>
      <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -1, lineHeight: 1, textTransform: "uppercase" }}>Workout<br /><span style={{ color: w.color }}>Plans</span></div>
    </div>
    <div style={{ marginLeft: "auto", textAlign: "right" }}>
      <div style={{ fontSize: 11, color: "#444", letterSpacing: 2, textTransform: "uppercase" }}>Equipment</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#aaa" }}>Light Dumbbells Only</div>
    </div>
  </div>

  {/* Workout Selector */}
  <div style={{
    display: "flex",
    gap: "10px",
    padding: "20px 24px",
    overflowX: "auto",
    borderBottom: "1px solid #111",
  }}>
    {workouts.map((wk, i) => (
      <div
        key={wk.id}
        className="workout-card"
        onClick={() => { setActive(i); setExpandedPhase(null); }}
        style={{
          minWidth: 140,
          background: active === i ? wk.color + "18" : "#111",
          border: `2px solid ${active === i ? wk.color : "#1e1e1e"}`,
          borderRadius: 12,
          padding: "14px 16px",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 2, color: wk.color, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>{wk.duration}</div>
        <div style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 6 }}>{wk.title}</div>
        <div style={{ fontSize: 10, color: "#555", fontWeight: 500 }}>{wk.subtitle}</div>
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: wk.color + "22",
          color: wk.color,
          borderRadius: 4,
          padding: "1px 6px",
          fontSize: 8,
          fontWeight: 800,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}>{wk.tag}</div>
      </div>
    ))}
  </div>

  {/* Main Workout View */}
  <div style={{ padding: "24px" }}>
    {/* Workout Header */}
    <div style={{
      background: `linear-gradient(135deg, ${w.color}22 0%, ${w.bg} 60%)`,
      border: `1px solid ${w.color}33`,
      borderRadius: 16,
      padding: "28px",
      marginBottom: 20,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", right: -20, top: -20,
        width: 160, height: 160,
        borderRadius: "50%",
        background: w.color + "0a",
        border: `1px solid ${w.color}15`,
      }} />
      <div style={{ fontSize: 11, letterSpacing: 4, color: w.color, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>{w.tag} · {w.duration}</div>
      <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>{w.title}</div>
      <div style={{ fontSize: 16, color: "#888", fontWeight: 500, marginTop: 4, marginBottom: 16 }}>{w.subtitle}</div>
      <div style={{ display: "flex", gap: 16 }}>
        {[["Level", w.level], ["Equipment", w.equipment], ["Phases", w.phases.length + " phases"]].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontSize: 9, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>{k}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#ddd" }}>{v}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Phases */}
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {w.phases.map((phase, pi) => {
        const isOpen = expandedPhase === pi;
        return (
          <div key={pi} style={{
            background: "#0f0f0f",
            border: `1px solid ${isOpen ? w.color + "55" : "#1a1a1a"}`,
            borderRadius: 12,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}>
            <div
              className="phase-row"
              onClick={() => setExpandedPhase(isOpen ? null : pi)}
              style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ fontSize: 22 }}>{phase.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{phase.name}</div>
                {phase.note && <div style={{ fontSize: 11, color: w.color, fontWeight: 600, marginTop: 2 }}>{phase.note}</div>}
              </div>
              <div style={{
                background: w.color + "22",
                color: w.color,
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}>{phase.time}</div>
              <div style={{ color: isOpen ? w.color : "#444", fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</div>
            </div>

            {isOpen && (
              <div style={{ borderTop: `1px solid #1a1a1a` }}>
                {phase.exercises.map((ex, ei) => (
                  <div key={ei} className="ex-row" style={{
                    animationDelay: `${ei * 0.04}s`,
                    padding: "12px 20px 12px 58px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: ei < phase.exercises.length - 1 ? "1px solid #161616" : "none",
                    gap: 12,
                  }}>
                    <div style={{
                      width: 20, height: 20,
                      border: `2px solid ${w.color}44`,
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, fontWeight: 900, color: w.color,
                      flexShrink: 0,
                    }}>{ei + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{ex.name}</div>
                      {ex.note && <div style={{ fontSize: 11, color: "#555", marginTop: 1 }}>{ex.note}</div>}
                    </div>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#888",
                      textAlign: "right",
                      minWidth: 80,
                      letterSpacing: 0.5,
                    }}>{ex.reps}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>

    {/* Tip */}
    <div style={{
      marginTop: 24,
      padding: "16px 20px",
      background: "#0f0f0f",
      border: "1px solid #1a1a1a",
      borderRadius: 12,
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
    }}>
      <div style={{ fontSize: 18 }}>💡</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#666", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Coach's Tip</div>
        <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>
          Keep dumbbells light enough to maintain form at high intensity. Focus on <span style={{ color: w.color, fontWeight: 700 }}>explosive power</span> and clean movement — not just getting through the reps.
        </div>
      </div>
    </div>
  </div>
</div>
```

);
}