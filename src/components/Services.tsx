import {
  Building,
  KeyRound,
  PaintRoller,
  Hammer,
  Construction,
  Landmark,
  Truck,
  ClipboardList,
  Settings2,
} from "lucide-react";

const services = [
  { icon: Building, title: "إنشاء المباني السكنية والتجارية والصناعية" },
  { icon: KeyRound, title: "مشاريع تسليم مفتاح (Turnkey) من التخطيط للتسليم النهائي" },
  { icon: PaintRoller, title: "الأعمال المعمارية وتشطيبات الديكور الداخلي" },
  { icon: Hammer, title: "إعادة تأهيل وترميم وصيانة المباني" },
  { icon: Construction, title: "الأعمال الإنشائية والمدنية (Civil & Structural)" },
  { icon: Landmark, title: "أعمال البنية التحتية وتطوير المواقع" },
  { icon: Truck, title: "توريد مواد البناء" },
  { icon: ClipboardList, title: "إدارة المشاريع والإشراف الهندسي" },
  { icon: Settings2, title: "حلول مقاولات عامة مخصصة حسب احتياج العميل" },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            خدماتنا
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            حلول مقاولات شاملة تحت سقف واحد
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={22} />
              </div>
              <p className="pt-1.5 font-semibold leading-snug text-neutral-dark">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
