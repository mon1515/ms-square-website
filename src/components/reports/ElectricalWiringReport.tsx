import { useTranslations } from "next-intl";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProcessFlowDiagram from "@/components/reports/electrical/ProcessFlowDiagram";
import CoordinationDiagram from "@/components/reports/electrical/CoordinationDiagram";
import ClassroomCircuitDiagram from "@/components/reports/electrical/ClassroomCircuitDiagram";
import CableFireCards from "@/components/reports/electrical/CableFireCards";
import OptionCompareCards from "@/components/reports/electrical/OptionCompareCards";

type Circuit = { title: string; note: string };
type FireCard = { title: string; text: string };
type Option = { title: string; badge: string; points: string[] };

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p) => (
        <p key={p} className="text-sm leading-relaxed text-neutral-dark/80">
          {p}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-neutral-dark/80">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-14 text-xl font-bold text-primary sm:text-2xl">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 mt-8 text-base font-bold text-neutral-dark">{children}</h3>;
}

function Callout({
  icon: Icon = ShieldAlert,
  title,
  text,
}: {
  icon?: typeof ShieldAlert;
  title: string;
  text: string;
}) {
  return (
    <div className="mt-6 flex gap-4 rounded-2xl bg-primary p-5 text-white sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-white/85">{text}</p>
      </div>
    </div>
  );
}

export default function ElectricalWiringReport() {
  const t = useTranslations("electricalWiringReport");

  const risks = t.raw("risks") as string[];
  const designFactors = t.raw("designFactors") as string[];
  const coordinationLabels = t.raw("coordinationLabels") as string[];
  const dbChecklist = t.raw("dbChecklist") as string[];
  const fireCards = t.raw("fireCards") as FireCard[];
  const copperSpec = t.raw("copperSpec") as string[];
  const connectionItems = t.raw("connectionItems") as string[];
  const earthingChecklist = t.raw("earthingChecklist") as string[];
  const testingChecklist = t.raw("testingChecklist") as string[];
  const classroomCircuits = t.raw("classroomCircuits") as Circuit[];
  const lightingScope = t.raw("lightingScope") as string[];
  const powerScope = t.raw("powerScope") as string[];
  const highLoadScope = t.raw("highLoadScope") as string[];
  const protectionScope = t.raw("protectionScope") as string[];
  const fireSafetyScope = t.raw("fireSafetyScope") as string[];
  const costFactors = t.raw("costFactors") as string[];
  const optionA = t.raw("optionA") as Option;
  const optionB = t.raw("optionB") as Option;
  const processSteps = t.raw("processSteps") as string[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h1>
          <p className="mt-3 text-2xl font-bold leading-tight text-primary sm:text-3xl">
            {t("heading")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-neutral-dark/70">{t("intro")}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s1Title")}</SectionHeading>
          <Prose paragraphs={[t("s1Text1"), t("s1Text2"), t("s1Text3")]} />
          <Callout icon={ShieldAlert} title={t("s1CalloutTitle")} text={t("s1CalloutText")} />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s2Title")}</SectionHeading>
          <Prose paragraphs={[t("s2Text1"), t("s2Text2"), t("s2Text3")]} />
          <p className="mt-5 text-sm font-bold text-neutral-dark">{t("risksLabel")}</p>
          <BulletList items={risks} />
          <p className="mt-5 text-sm leading-relaxed text-neutral-dark/80">{t("s2Closing")}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s3Title")}</SectionHeading>
          <Prose paragraphs={[t("s3Text1"), t("s3Text2"), t("s3Text3")]} />
          <p className="mt-5 text-sm font-bold text-neutral-dark">{t("designFactorsLabel")}</p>
          <BulletList items={designFactors} />
          <div className="mt-6 rounded-xl border border-neutral-light bg-neutral-light/40 p-5 text-center">
            <p className="text-sm text-neutral-dark/50 line-through">{t("s3WrongQuestion")}</p>
            <p className="mt-2 text-sm font-bold text-primary">{t("s3RightQuestion")}</p>
          </div>
          <div className="mt-6">
            <CoordinationDiagram labels={coordinationLabels} result={t("coordinationResult")} />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s4Title")}</SectionHeading>
          <Prose paragraphs={[t("s4Intro")]} />

          <SubHeading>{t("s4dbTitle")}</SubHeading>
          <p className="text-sm leading-relaxed text-neutral-dark/80">{t("s4dbIntro")}</p>
          <BulletList items={dbChecklist} />
          <p className="mt-4 text-sm leading-relaxed text-neutral-dark/80">{t("s4dbNote")}</p>

          <SubHeading>{t("s4lightTitle")}</SubHeading>
          <Prose paragraphs={[t("s4lightText1"), t("s4lightText2")]} />

          <SubHeading>{t("s4socketTitle")}</SubHeading>
          <Prose
            paragraphs={[t("s4socketText1"), t("s4socketText2"), t("s4socketText3"), t("s4socketText4")]}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s5Title")}</SectionHeading>
          <Prose paragraphs={[t("s5Text1"), t("s5Text2"), t("s5Text3"), t("s5Text4")]} />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s6Title")}</SectionHeading>
          <Prose paragraphs={[t("s6Text1"), t("s6Text2"), t("s6Text3"), t("s6Text4")]} />
          <div className="mt-6">
            <CableFireCards cards={fireCards} />
          </div>
          <Prose paragraphs={[t("s6Text5"), t("s6Text6")]} />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s7Title")}</SectionHeading>
          <Prose paragraphs={[t("s7Text1"), t("s7Text2")]} />
          <p className="mt-5 text-sm font-bold text-neutral-dark">{t("copperSpecLabel")}</p>
          <BulletList items={copperSpec} />
          <p className="mt-5 text-sm font-semibold italic text-neutral-dark/70">
            {t("s7Closing")}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s8Title")}</SectionHeading>
          <Prose paragraphs={[t("s8Text1"), t("s8Text2"), t("s8Text3")]} />
          <p className="mt-5 text-sm font-bold text-neutral-dark">{t("connectionItemsLabel")}</p>
          <BulletList items={connectionItems} />
          <p className="mt-5 text-sm leading-relaxed text-neutral-dark/80">{t("s8Closing")}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s9Title")}</SectionHeading>
          <Prose paragraphs={[t("s9Text1"), t("s9Text2")]} />
          <BulletList items={earthingChecklist} />
          <Prose paragraphs={[t("s9Text3"), t("s9Text4")]} />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s10Title")}</SectionHeading>
          <Prose paragraphs={[t("s10Text1"), t("s10Text2")]} />
          <BulletList items={testingChecklist} />
          <p className="mt-4 text-sm leading-relaxed text-neutral-dark/80">{t("s10Text4")}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-neutral-light/60 p-4 text-center">
              <p className="text-sm font-semibold text-neutral-dark/50 line-through">
                {t("s10Before")}
              </p>
            </div>
            <div className="rounded-xl bg-primary p-4 text-center">
              <p className="text-sm font-bold text-white">{t("s10After")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s11Title")}</SectionHeading>
          <Prose paragraphs={[t("s11Intro")]} />
          <div className="mt-6">
            <ClassroomCircuitDiagram boardLabel={t("classroomBoardLabel")} circuits={classroomCircuits} />
          </div>

          <SubHeading>{t("lightingTitle")}</SubHeading>
          <BulletList items={lightingScope} />
          <SubHeading>{t("powerTitle")}</SubHeading>
          <BulletList items={powerScope} />
          <SubHeading>{t("highLoadTitle")}</SubHeading>
          <BulletList items={highLoadScope} />
          <SubHeading>{t("protectionTitle")}</SubHeading>
          <BulletList items={protectionScope} />
          <SubHeading>{t("fireSafetyTitle")}</SubHeading>
          <BulletList items={fireSafetyScope} />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s12Title")}</SectionHeading>
          <Prose paragraphs={[t("s12Text1")]} />
          <div className="mt-4 rounded-xl border border-neutral-light bg-neutral-light/40 p-4 text-center" dir="ltr">
            <p className="font-bold text-primary">{t("exchangeRate")}</p>
            <p className="mt-1 text-xs text-neutral-dark/60">{t("exchangeFormula")}</p>
          </div>
          <Prose paragraphs={[t("s12Text2"), t("s12Text3")]} />
          <BulletList items={costFactors} />
          <Prose paragraphs={[t("s12Text4")]} />
          <div className="mt-4 space-y-2 rounded-xl border border-neutral-light bg-neutral-light/40 p-4 text-sm text-neutral-dark/80" dir="ltr">
            <p className="font-mono font-semibold text-primary">{t("s12Formula1")}</p>
            <p className="font-mono font-semibold text-primary">{t("s12Formula2")}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-dark/80">{t("s12Text5")}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s13Title")}</SectionHeading>
          <Prose paragraphs={[t("s13Intro")]} />
          <div className="mt-6">
            <OptionCompareCards optionA={optionA} optionB={optionB} />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-neutral-dark/80">{t("s13Closing")}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading>{t("s14Title")}</SectionHeading>
          <Prose paragraphs={[t("s14Text1"), t("s14Text2")]} />
          <Callout icon={AlertTriangle} title={t("s14PrincipleTitle")} text={t("s14PrincipleText")} />
          <Prose paragraphs={[t("s14Text3"), t("s14Text4")]} />
        </Reveal>

        <Reveal delay={0.05} className="mt-14 rounded-2xl bg-neutral-dark p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">{t("s15Title")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{t("s15Text1")}</p>
          <div className="mt-6">
            <ProcessFlowDiagram steps={processSteps} />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/70">{t("s15Text2")}</p>
        </Reveal>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs font-semibold uppercase tracking-wide text-neutral-dark/40">
          {t("closingTagline")}
        </p>
      </div>
    </section>
  );
}
