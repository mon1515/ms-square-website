import Image from "next/image";

const projects = [
  {
    title: "مباني مصنع صوفيا للمياه",
    titleEn: "Sofia Water Factory",
    text: "إنشاء المباني الرئيسية للمصنع شاملة الأعمال الإنشائية بالخرسانة المسلحة، البناء، أنظمة الأسقف، وأعمال الموقع الخارجية. تم التنفيذ بالكامل حسب المواصفات الهندسية المعتمدة.",
    image: "/assets/projects/project-photo-1.jpg",
  },
  {
    title: "مصنع سالي للصابون — مباني وتشطيبات",
    titleEn: "Sally Soap Factory",
    text: "تنفيذ مباني المصنع مع كامل أعمال التشطيب المعماري الداخلي والخارجي، لتسليم منشأة صناعية جاهزة وظيفياً وبمعايير جودة عالية.",
    image: "/assets/projects/project-photo-4.jpg",
  },
  {
    title: "شركة البرجوب — ورشة ومكاتب مبيعات",
    titleEn: "Albarjoub Company",
    text: "إنشاء مرافق الورشة ومكاتب المبيعات، شاملة الأعمال المدنية، التشطيبات المعمارية، تمديدات المرافق، والبنية التحتية الداعمة.",
    image: "/assets/projects/project-photo-6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            مشاريعنا
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            من مشاريعنا المنفذة
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.titleEn}
              className="group overflow-hidden rounded-2xl border border-neutral-light shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.titleEn}
                </p>
                <h3 className="mt-1 mb-3 text-lg font-bold text-primary">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-dark/80">
                  {project.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
