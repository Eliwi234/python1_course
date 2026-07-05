import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  GraduationCap,
  LockKeyhole,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./styles.css";

const sessions = [
  {
    id: 1,
    date: "2026-07-02",
    day: "الخميس",
    title: "مقدمة في بايثون وبيئة العمل",
    summary:
      "تعرف على لغة بايثون، لماذا نستخدمها، تثبيت الأدوات، وتشغيل أول برنامج بطريقة بسيطة.",
    materialHref: "/materials/1.pdf",
  },
  {
    id: 2,
    date: "2026-07-05",
    day: "الأحد",
    title: "المتغيرات وأنواع البيانات",
    summary:
      "فهم المتغيرات، الأرقام، النصوص، القيم المنطقية، وكيفية تخزين المعلومات داخل البرنامج.",
  },
  {
    id: 3,
    date: "2026-07-07",
    day: "الثلاثاء",
    title: "العمليات الحسابية والمنطقية",
    summary:
      "استخدام العمليات الرياضية، المقارنات، والمنطق لبناء تعبيرات تساعد البرنامج على اتخاذ معنى واضح.",
    materialHref: "/materials/3.pdf",
  },
  {
    id: 4,
    date: "2026-07-09",
    day: "الخميس",
    title: "التعامل مع النصوص (Strings)",
    summary:
      "تقطيع النصوص، دمجها، تنسيقها، واستخدام أهم الدوال التي تجعل التعامل مع الجمل أسهل.",
    materialHref: "/materials/4.pdf",
  },
  {
    id: 5,
    date: "2026-07-12",
    day: "الأحد",
    title: "جمل التحكم الشرطية",
    summary:
      "بناء قرارات داخل الكود باستخدام if و elif و else وربط الشروط بسيناريوهات عملية.",
  },
  {
    id: 6,
    date: "2026-07-14",
    day: "الثلاثاء",
    title: "جمل التكرار (Loops)",
    summary:
      "تنفيذ أوامر متكررة باستخدام for و while مع أمثلة على العد، البحث، ومعالجة القوائم.",
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
];

const specialGreetings = {
  "منار الشتار": "أهلاً بكِ يا منار في رحلتكِ لتعلم بايثون",
  "ليا ابو نبوت": "أهلاً بكِ يا ليا في رحلتكِ لتعلم بايثون",
};

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

  const progress = useMemo(() => calculateProgress(), []);
  const completedSessions = Math.round((progress / 100) * sessions.length);
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

  if (!enteredName) {
    return (
      <main className="min-h-screen overflow-hidden bg-black text-white">
        <BackgroundGrid />
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
                    placeholder="مثال: منار الشتار"
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
      <section className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
        <Header greeting={greeting} progress={progress} completedSessions={completedSessions} />
        <SessionGrid />
      </section>
    </main>
  );
}

function Header({ greeting, progress, completedSessions }) {
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
            12 جلسة عملية مرتبة زمنياً، الساعة 7:00 مساءً بتوقيت سوريا، مع ملفات
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
            مكتمل حتى الآن: {completedSessions} من 12 جلسة حسب تاريخ اليوم.
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
