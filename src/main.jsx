import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  GraduationCap,
  LockKeyhole,
  Printer,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./styles.css";

const sessions = [
  {
    id: 1,
    date: "2026-07-02",
    day: "الخميس",
    title: "مرحباً بك في عالم البرمجة",
    summary:
      "رحلتنا الأولى مع بايثون: ما هي البرمجة، ما هي بايثون، وكيف نجعل الكمبيوتر يطبع أول رسالة باستخدام print().",
    materialHref: "/materials/1.pdf",
  },
  {
    id: 2,
    date: "2026-07-05",
    day: "الأحد",
    title: "صناديق الكنوز: المتغيرات",
    summary:
      "فهم المتغيرات كصناديق نحفظ فيها الأسماء والأرقام والمعلومات، مع قواعد التسمية واستخدام print() لعرض المحتوى.",
    materialHref: "/materials/2.pdf",
  },
  {
    id: 3,
    date: "2026-07-07",
    day: "الثلاثاء",
    title: "أنواع الكنوز: أرقام ونصوص",
    summary:
      "التعرف على أنواع البيانات الأساسية في بايثون مثل النصوص، الأرقام الصحيحة، والأرقام العشرية، واستخدام type() لاكتشاف النوع.",
    materialHref: "/materials/3.pdf",
  },
  {
    id: 4,
    date: "2026-07-09",
    day: "الخميس",
    title: "الآلة الحاسبة الذكية",
    summary:
      "استخدام بايثون كآلة حاسبة ذكية للتعامل مع الجمع والطرح والضرب والقسمة وبناء تعبيرات رياضية بسيطة.",
    materialHref: "/materials/4.pdf",
  },
  {
    id: 5,
    date: "2026-07-12",
    day: "الأحد",
    title: "لعبة الكلمات: Strings",
    summary:
      "التعامل مع النصوص في بايثون: كتابة الكلمات، دمج الجمل، واستخدام أدوات بسيطة تجعل النصوص أكثر متعة ووضوحاً.",
    materialHref: "/materials/5.pdf",
  },
  {
    id: 6,
    date: "2026-07-14",
    day: "الثلاثاء",
    title: "كيف يقرر الكمبيوتر؟ If-Else",
    summary:
      "تعلم كيف يتخذ الكمبيوتر قرارات باستخدام if و else، وربط الشروط بأمثلة سهلة من الحياة اليومية.",
    materialHref: "/materials/6.pdf",
  },
  {
    id: 7,
    date: "2026-07-16",
    day: "الخميس",
    title: "القوائم (Lists)",
    summary:
      "إنشاء القوائم، إضافة وحذف العناصر، الفهرسة، والمرور على البيانات بطريقة منظمة.",
  },
  {
    id: 8,
    date: "2026-07-19",
    day: "الأحد",
    title: "المجموعات المتقدمة (Tuples, Sets, Dicts)",
    summary:
      "مقارنة هياكل البيانات الأساسية واختيار النوع المناسب عند تخزين البيانات واسترجاعها.",
  },
  {
    id: 9,
    date: "2026-07-21",
    day: "الثلاثاء",
    title: "مراجعة وتطبيقات عملية",
    summary:
      "حل تمارين تجمع المفاهيم السابقة وتحويل الأفكار النظرية إلى خطوات برمجية قابلة للتنفيذ.",
  },
  {
    id: 10,
    date: "2026-07-23",
    day: "الخميس",
    title: "مشروع صغير 1",
    summary:
      "بناء مشروع تطبيقي صغير من الصفر مع تقسيم المشكلة إلى مدخلات، معالجة، ومخرجات.",
  },
  {
    id: 11,
    date: "2026-07-26",
    day: "الأحد",
    title: "مشروع صغير 2",
    summary:
      "تطوير مشروع ثان يثبت مهارات التحكم، التكرار، وهياكل البيانات مع تحسين تجربة المستخدم.",
  },
  {
    id: 12,
    date: "2026-07-28",
    day: "الثلاثاء",
    title: "مراجعة نهائية واختبار",
    summary:
      "مراجعة شاملة للمستوى الأول، اختبار قصير، وخريطة واضحة للانتقال إلى المرحلة التالية.",
  },
  {
    id: 13,
    date: "2026-07-30",
    day: "الخميس",
    title: "جلسة إضافية",
    summary: "سيتم تحديث محتوى هذه الجلسة بعد إرسال المفاهيم الجديدة.",
  },
];

const certificateConfetti = [
  { left: "6%", top: "18%", color: "#00d4ff", delay: "0s" },
  { left: "14%", top: "62%", color: "#facc15", delay: "0.3s" },
  { left: "22%", top: "32%", color: "#fb7185", delay: "0.8s" },
  { left: "34%", top: "76%", color: "#34d399", delay: "0.15s" },
  { left: "48%", top: "16%", color: "#ffffff", delay: "0.55s" },
  { left: "62%", top: "68%", color: "#facc15", delay: "0.95s" },
  { left: "76%", top: "24%", color: "#00d4ff", delay: "0.45s" },
  { left: "88%", top: "58%", color: "#fb7185", delay: "0.7s" },
  { left: "94%", top: "34%", color: "#34d399", delay: "0.2s" },
];

const specialGreetings = {
  "منار الشتار": "أهلاً بكِ يا منار في رحلتكِ لتعلم بايثون",
  "ليا ابو نبوت": "أهلاً بكِ يا ليا في رحلتكِ لتعلم بايثون",
};

const kidFriendlyTips = [
  {
    emoji: "✨",
    title: "سحر صغير",
    text: "print() يجعل الكمبيوتر يكتب لك رسالة جميلة على الشاشة!",
  },
  {
    emoji: "🧠",
    title: "لعبة الذكاء",
    text: "المتغيرات مثل صناديق صغيرة تحفظ أشياءك المفضلة.",
  },
  {
    emoji: "🎈",
    title: "مغامرة جديدة",
    text: "كل جلسة جديدة تشبه فتح صندوق كنز مليء بالأفكار!",
  },
  {
    emoji: "🚀",
    title: "قفزة ممتعة",
    text: "إذا أردت التكرار، for loop مثل رحلة قصيرة جدًا مع خطوات متتالية.",
  },
];

const questChallenges = [
  {
    title: "مهمة البرمجة الأولى",
    prompt: "اكتب السطر الذي يجعل الكمبيوتر يقول مرحبا",
    answer: "print(\"مرحبا\")",
    hint: "استخدم print() مع نصوص",
  },
  {
    title: "مهمة المتغيرات",
    prompt: "ما اسم الصندوق الذي يحتفظ بالرقم 7؟",
    answer: "x = 7",
    hint: "فكر في اسم مختصر",
  },
  {
    title: "مهمة القرار",
    prompt: "كيف تجعل الكمبيوتر يختار بين نعم ولا؟",
    answer: "if / else",
    hint: "هذا المفهوم يقرر بين خيارين",
  },
];

const monthNames = new Intl.DateTimeFormat("ar-SY", {
  month: "long",
  day: "numeric",
});

function getSessionDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function normalizeArabicName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function calculateProgress() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const completed = sessions.filter((session) => today >= getSessionDate(session.date)).length;
  return Math.round((completed / sessions.length) * 100);
}

function App() {
  const [studentName, setStudentName] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [funTipIndex, setFunTipIndex] = useState(0);
  const [questIndex, setQuestIndex] = useState(0);
  const [questInput, setQuestInput] = useState("");
  const [questStatus, setQuestStatus] = useState("idle");
  const [tapFeedback, setTapFeedback] = useState("✨ اضغط هنا!");

  const progress = useMemo(() => calculateProgress(), []);
  const completedSessions = Math.round((progress / 100) * sessions.length);
  const isCourseComplete = completedSessions >= sessions.length;
  const normalizedName = normalizeArabicName(enteredName);
  const greeting =
    specialGreetings[normalizedName] ||
    `أهلاً بك في رحلة بايثون${normalizedName ? `، ${normalizedName}` : ""}`;

  function handleSubmit(event) {
    event.preventDefault();
    const name = normalizeArabicName(studentName);
    if (name) {
      setEnteredName(name);
    }
  }

  function handlePrintCertificate() {
    window.print();
  }

  function handleNextFunTip() {
    setFunTipIndex((current) => (current + 1) % kidFriendlyTips.length);
  }

  function handleQuestSubmit(event) {
    event.preventDefault();
    const currentQuest = questChallenges[questIndex];
    if (questInput.trim() === currentQuest.answer) {
      setQuestStatus("success");
      setQuestIndex((current) => (current + 1) % questChallenges.length);
      setQuestInput("");
    } else {
      setQuestStatus("error");
    }
  }

  function handleNextQuest() {
    setQuestIndex((current) => (current + 1) % questChallenges.length);
    setQuestInput("");
    setQuestStatus("idle");
  }

  function handleTapFeedback() {
    const reactions = [
      "🌈 رائع!",
      "✨ أنت فعلًا ضغطت!",
      "💫 هذا سحر بايثون!",
      "🎉 ممتاز، استمر!",
    ];
    setTapFeedback(reactions[Math.floor(Math.random() * reactions.length)]);
  }

  if (!enteredName) {
    return (
      <main className="min-h-screen overflow-hidden bg-black text-white">
        <BackgroundGrid />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="quest-card mb-6 overflow-hidden rounded-[1.75rem] border border-fuchsia-400/30 bg-gradient-to-br from-slate-950 via-purple-950/80 to-cyan-950/70 p-5 shadow-2xl"
        >
          <button
            type="button"
            onClick={handleTapFeedback}
            className="magic-button mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-200"
          >
            <span className="text-lg">🪄</span>
            {tapFeedback}
          </button>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="quest-emoji flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                🐍
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                  Python Adventure
                </p>
                <h2 className="mt-2 text-xl font-black text-white">
                  {questChallenges[questIndex].title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {questChallenges[questIndex].prompt}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleNextQuest}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-slate-200"
            >
              مهمة أخرى
            </button>
          </div>

          <form onSubmit={handleQuestSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={questInput}
              onChange={(event) => setQuestInput(event.target.value)}
              placeholder="اكتب إجابتك هنا"
              className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-black/50 px-4 text-white outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="min-h-12 rounded-2xl bg-fuchsia-400 px-4 font-black text-slate-950"
            >
              أرسل
            </button>
          </form>

          <div className="mt-3 text-sm text-slate-300">
            {questStatus === "success" && (
              <p className="text-emerald-300">🌈 ممتاز! لقد أنقذت المهمة وساعدت البايثون على الوميض في الشاشة.</p>
            )}
            {questStatus === "error" && (
              <p className="text-rose-300">💫 جرّب مرة أخرى، والخيط السحري يقول: {questChallenges[questIndex].hint}</p>
            )}
            {questStatus === "idle" && <p>✨ {questChallenges[questIndex].hint}</p>}
          </div>
        </motion.div>
        <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="mb-8 flex items-center gap-3 text-neon-blue">
              <Code2 className="h-7 w-7" />
              <span className="text-sm font-bold uppercase tracking-[0.26em] text-neon-soft">
                Python Level 1
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.7 }}
                  className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl"
                >
                  بوابتك التفاعلية لتعلم بايثون من الصفر.
                </motion.h1>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-300">
                  أدخلي أو أدخل الاسم للانتقال إلى لوحة المنهج، الجلسات، الملفات،
                  ونسبة التقدم في الكورس.
                </p>
                <KidFriendlyPanel funTipIndex={funTipIndex} onNextTip={handleNextFunTip} />
              </div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="rounded-[2rem] border border-neon-blue/25 bg-white/[0.06] p-5 shadow-neon backdrop-blur-xl sm:p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-blue/15 text-neon-blue">
                  <UserRound className="h-7 w-7" />
                </div>
                <label htmlFor="student-name" className="text-xl font-extrabold">
                  الاسم الكامل
                </label>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="student-name"
                    type="text"
                    value={studentName}
                    onChange={(event) => setStudentName(event.target.value)}
                    placeholder="مثال: منار الشتار او ليا ابو نبوت"
                    className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-black/55 px-5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-neon-blue focus:shadow-neon-sm"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-neon-blue px-6 font-extrabold text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-black"
                  >
                    دخول
                    <Sparkles className="h-5 w-5" />
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <BackgroundGrid />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="quest-card mx-auto mb-6 max-w-3xl overflow-hidden rounded-[1.75rem] border border-fuchsia-400/30 bg-gradient-to-br from-slate-950 via-purple-950/80 to-cyan-950/70 p-5 shadow-2xl"
      >
        <button
          type="button"
          onClick={handleTapFeedback}
          className="magic-button mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-200"
        >
          <span className="text-lg">🪄</span>
          {tapFeedback}
        </button>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">
              Code Quest
            </p>
            <h2 className="mt-2 text-xl font-black text-white">
              {questChallenges[questIndex].title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {questChallenges[questIndex].prompt}
            </p>
          </div>
          <button
            type="button"
            onClick={handleNextQuest}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/10 px-3 py-2 text-sm font-bold text-slate-200"
          >
            مهمة أخرى
          </button>
        </div>

        <form onSubmit={handleQuestSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={questInput}
            onChange={(event) => setQuestInput(event.target.value)}
            placeholder="اكتب إجابتك هنا"
            className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-black/50 px-4 text-white outline-none placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="min-h-12 rounded-2xl bg-emerald-400 px-4 font-black text-slate-950"
          >
            تحقق
          </button>
        </form>

        <div className="mt-3 text-sm text-slate-300">
          {questStatus === "success" && (
            <p className="text-emerald-300">✅ ممتاز! هذه إجابة صحيحة، وها قد بدأت تشعر وكأنك مبرمج حقيقي.</p>
          )}
          {questStatus === "error" && (
            <p className="text-rose-300">⚠️ جرّب مرة أخرى،Hint: {questChallenges[questIndex].hint}</p>
          )}
          {questStatus === "idle" && <p>💡 {questChallenges[questIndex].hint}</p>}
        </div>
      </motion.div>
      <section className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
        <Header
          greeting={greeting}
          progress={progress}
          completedSessions={completedSessions}
          totalSessions={sessions.length}
        />
        <KidFriendlyPanel funTipIndex={funTipIndex} onNextTip={handleNextFunTip} />
        <SessionGrid />
        <CertificateStage
          isUnlocked={isCourseComplete}
          studentName={normalizedName}
          totalSessions={sessions.length}
          onPrint={handlePrintCertificate}
        />
        <EndingReward />
      </section>
    </main>
  );
}

function KidFriendlyPanel({ funTipIndex, onNextTip }) {
  const tip = kidFriendlyTips[funTipIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="kid-friendly-panel mb-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-neon backdrop-blur-xl sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-2 text-sm font-bold text-amber-200">
            <Sparkles className="h-4 w-4" />
            لعبة صغيرة مع بايثون
          </div>
          <p className="mt-3 text-base leading-8 text-slate-300">
            هذا الجزء يجعل الصفحة أكثر حيوية للأطفال، مع فكرة لطيفة واحدة تتغير كل مرة.
          </p>
        </div>

        <button
          type="button"
          onClick={onNextTip}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neon-blue/30 bg-neon-blue/10 px-4 py-2 text-sm font-black text-neon-soft transition hover:bg-neon-blue/20"
        >
          <Sparkles className="h-4 w-4" />
          فكرة جديدة
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 sm:flex-row sm:items-start">
        <div className="kid-friendly-emoji flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          {tip.emoji}
        </div>
        <div>
          <p className="text-sm font-black text-white">{tip.title}</p>
          <p className="mt-1 text-sm leading-7 text-slate-300">{tip.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Header({ greeting, progress, completedSessions, totalSessions }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-neon backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-2 text-sm font-bold text-neon-soft">
            <GraduationCap className="h-4 w-4" />
            كورس بايثون - المستوى الأول
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">{greeting}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            {totalSessions} جلسة عملية مرتبة زمنياً، الساعة 7:00 مساءً بتوقيت سوريا، مع ملفات
            للتحميل ومراجعات تطبيقية.
          </p>
        </div>

        <div className="w-full rounded-3xl border border-neon-blue/20 bg-black/45 p-5 lg:max-w-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-extrabold text-white">تقدم الكورس</span>
            <span className="text-2xl font-black text-neon-blue">{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-neon-blue shadow-neon-sm"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-300">
            مكتمل حتى الآن: {completedSessions} من {totalSessions} جلسة حسب تاريخ اليوم.
          </p>
        </div>
      </div>
    </motion.header>
  );
}

function SessionGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sessions.map((session, index) => (
        <SessionCard key={session.id} session={session} index={index} />
      ))}
    </section>
  );
}

function EndingReward() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="ending-reward relative mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-cyan-950/70 to-fuchsia-950/70 p-6 shadow-2xl sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="ending-star absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-cyan-300" />
        <span className="ending-star absolute left-[80%] top-[30%] h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
        <span className="ending-star absolute left-[20%] bottom-[20%] h-2 w-2 rounded-full bg-amber-300" />
        <span className="ending-star absolute right-[15%] bottom-[15%] h-3 w-3 rounded-full bg-emerald-300" />
      </div>

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Mission Complete</p>
          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">أنت قريب من أن تصبح مبرمجًا صغيرًا!</h3>
          <p className="mt-3 text-base leading-8 text-slate-300">
            كل جلسة جديدة تعني خطوة جديدة في عالم البرمجة، وكل فكرة صغيرة تجعل البايثون أكثر سحرًا.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4 text-center backdrop-blur">
          <div className="text-4xl">🎉</div>
          <p className="mt-2 text-sm font-black text-cyan-200">مكافأة صغيرة</p>
          <p className="mt-1 text-sm text-slate-300">اكتشف، جرّب، وابدأ كتابة أول سطر برمجي اليوم.</p>
        </div>
      </div>
    </motion.section>
  );
}

function CertificateStage({ isUnlocked, studentName, totalSessions, onPrint }) {
  const displayName = studentName || "نجم بايثون";
  const remainingSessions = Math.max(totalSessions - sessions.filter((session) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today >= getSessionDate(session.date);
  }).length, 0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.65 }}
      className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-neon backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {certificateConfetti.map((piece, index) => (
          <span
            key={index}
            className="certificate-confetti"
            style={{
              left: piece.left,
              top: piece.top,
              backgroundColor: piece.color,
              animationDelay: piece.delay,
            }}
          />
        ))}
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
            {isUnlocked ? <Award className="h-4 w-4" /> : <LockKeyhole className="h-4 w-4" />}
            شهادة نهاية الكورس
          </div>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {isUnlocked ? "مبروك! الشهادة جاهزة" : "الشهادة تنتظرك في النهاية"}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            {isUnlocked
              ? "بعد إنهاء كل الجلسات، تظهر الشهادة كهدية صغيرة تشجع الطالب على الاحتفال بإنجازه."
              : `أكمل الجلسات المتبقية وستظهر الشهادة هنا. المتبقي: ${remainingSessions} جلسة.`}
          </p>
        </div>

        <motion.div
          key={isUnlocked ? "certificate-ready" : "certificate-locked"}
          initial={{ opacity: 0, scale: 0.92, rotate: isUnlocked ? -2 : 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 16 }}
          className={`certificate-card ${isUnlocked ? "certificate-card-ready" : "certificate-card-locked"}`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-sky-400/40 bg-slate-950/90 px-3 py-1 text-[11px] font-black tracking-[0.3em] text-sky-200">
              PYTHON LEVEL 1
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sky-300 shadow-lg ring-1 ring-white/20">
              {isUnlocked ? <Code2 className="h-6 w-6" /> : <LockKeyhole className="h-6 w-6" />}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-300/70 bg-slate-950/95 p-3 text-right shadow-inner">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-sky-300">
              Python snippet
            </p>
            <p className="mt-2 font-mono text-sm font-semibold text-sky-100">
              &gt;&gt;&gt; print(&quot;Hello, Python&quot;)
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-extrabold text-sky-700">شهادة رحلة بايثون</p>
            <h3 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              {displayName}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm font-bold leading-7 text-slate-700">
              {isUnlocked
                ? `أتم ${totalSessions} جلسة في كورس بايثون للمستوى الأول، وتعلم خطواته الأولى في البرمجة بثقة ومرح.`
                : "أكمل كل الجلسات حتى تنفتح هذه الشهادة باسمك."}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-black text-slate-700">
            <span className="rounded-full bg-sky-100 px-3 py-2">def</span>
            <span className="rounded-full bg-emerald-100 px-3 py-2">import</span>
            <span className="rounded-full bg-amber-100 px-3 py-2">for loop</span>
          </div>

          <button
            type="button"
            onClick={onPrint}
            disabled={!isUnlocked}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            <Printer className="h-4 w-4" />
            طباعة الشهادة
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SessionCard({ session, index }) {
  const sessionDate = getSessionDate(session.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isComplete = today >= sessionDate;
  const formattedDate = monthNames.format(sessionDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.45 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition hover:border-neon-blue/70 hover:shadow-neon"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neon-blue/30 bg-neon-blue/10 text-neon-blue">
          {isComplete ? <CheckCircle2 className="h-6 w-6" /> : <LockKeyhole className="h-6 w-6" />}
        </div>
        <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-extrabold text-neon-soft">
          الجلسة {session.id}
        </span>
      </div>

      <h2 className="text-xl font-black leading-8 text-white">{session.title}</h2>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-neon-blue" />
          <span>
            {session.day} {formattedDate}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-neon-blue" />
          <span>7:00 مساءً بتوقيت سوريا</span>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{session.summary}</p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-3">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-extrabold text-white">ملفات الدرس</span>
          <ArrowDownToLine className="h-5 w-5 text-neon-blue" />
        </div>
        <DownloadButton href={session.materialHref} icon={<FileText className="h-4 w-4" />} label="PDF" />
      </div>

      {session.materialHref ? (
        <a
          href={session.materialHref}
          download
          className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white px-4 text-sm font-black text-black transition hover:bg-neon-blue"
        >
          تحميل المادة العلمية
          <ArrowDownToLine className="h-4 w-4" />
        </a>
      ) : (
        <span className="mt-3 inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-black text-slate-400">
          قريباً
        </span>
      )}
    </motion.article>
  );
}

function DownloadButton({ href, icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-bold text-slate-500">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      download
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-sm font-bold text-white transition hover:border-neon-blue hover:text-neon-blue"
    >
      {icon}
      {label}
    </a>
  );
}

function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,212,255,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.09),transparent_24%),linear-gradient(135deg,#000_0%,#020817_52%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
{/* <script>
  let interactions = 0;

window.addEventListener("mousemove", () => interactions++);
window.addEventListener("click", () => interactions++);
window.addEventListener("keydown", () => interactions++);
 </script> */}
