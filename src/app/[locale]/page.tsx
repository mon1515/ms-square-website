import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlueprintBuilding from "@/components/BlueprintBuilding";
import About from "@/components/About";
import Services from "@/components/Services";
import CostEstimates from "@/components/CostEstimates";
import AssessmentReport from "@/components/AssessmentReport";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BlueprintBuilding />
        <About />
        <Services />
        <CostEstimates />
        <AssessmentReport />
        <WhyUs />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
