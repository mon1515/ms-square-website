import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportTabs from "@/components/reports/ReportTabs";
import { reports, getReport } from "@/data/reports";

export function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const report = getReport(slug);
  if (!report) return {};

  const t = await getTranslations({ locale, namespace: report.namespace });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const report = getReport(slug);
  if (!report) notFound();

  const tabs = await Promise.all(
    reports.map(async (r) => {
      const rt = await getTranslations({ locale, namespace: r.namespace });
      return { slug: r.slug, label: rt("navLabel") };
    })
  );

  const ReportContent = report.Component;

  return (
    <>
      <Header />
      <main className="flex-1">
        <ReportTabs tabs={tabs} active={slug} />
        <ReportContent />
      </main>
      <Footer />
    </>
  );
}
