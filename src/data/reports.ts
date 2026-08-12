import type { ComponentType } from "react";
import { Stethoscope, School, Zap } from "lucide-react";
import HealthCenterReport from "@/components/reports/HealthCenterReport";
import SudanSchoolsReport from "@/components/reports/SudanSchoolsReport";
import ElectricalWiringReport from "@/components/reports/ElectricalWiringReport";

export type ReportDefinition = {
  slug: string;
  namespace: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  Component: ComponentType;
};

export const reports: ReportDefinition[] = [
  {
    slug: "health-center-rehabilitation",
    namespace: "assessmentReport",
    icon: Stethoscope,
    Component: HealthCenterReport,
  },
  {
    slug: "sudan-school-rehabilitation-cost",
    namespace: "sudanSchoolsReport",
    icon: School,
    Component: SudanSchoolsReport,
  },
  {
    slug: "electrical-wiring-school-rehabilitation",
    namespace: "electricalWiringReport",
    icon: Zap,
    Component: ElectricalWiringReport,
  },
];

export function getReport(slug: string) {
  return reports.find((report) => report.slug === slug);
}
