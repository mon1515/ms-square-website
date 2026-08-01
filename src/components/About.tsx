import { Target, Eye, Building2 } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "من نحن",
    text: "MS Square شركة سودانية متخصصة بالمقاولات والإنشاءات، تقدم حلول هندسية وإنشائية متكاملة للقطاعين العام والخاص — من الإنشاء الكامل إلى التشطيبات، إعادة التأهيل، الصيانة، ودعم البنية التحتية، بالإضافة لتوريد مواد البناء.",
  },
  {
    icon: Target,
    title: "الرسالة",
    text: "تقديم حلول إنشائية وهندسية موثوقة تلبي أعلى معايير الجودة والسلامة والكفاءة، مع بناء علاقات طويلة الأمد مع العملاء عبر الاحترافية والشفافية والأداء المستمر.",
  },
  {
    icon: Eye,
    title: "الرؤية",
    text: "أن تصبح MS Square من الشركات الرائدة بالمقاولات والهندسة بالسودان والمنطقة، عبر تنفيذ مشاريع مستدامة والحفاظ على أعلى معايير التنفيذ وكسب ثقة العملاء بالتميز بكل مرحلة من مراحل المشروع.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            عن الشركة
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            من نحن، رسالتنا، ورؤيتنا
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-light bg-neutral-light/60 p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
              <p className="leading-relaxed text-neutral-dark/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
