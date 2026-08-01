import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 inline-block rounded-lg bg-white p-2">
              <Image
                src="/assets/ms-square-logo.png"
                alt="MS Square Engineering"
                width={140}
                height={140}
                className="h-12 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              شركة سودانية متخصصة بالمقاولات والإنشاءات، تقدم حلول هندسية
              وإنشائية متكاملة للقطاعين العام والخاص.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">من نحن</a></li>
              <li><a href="#services" className="hover:text-white">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-white">مشاريعنا</a></li>
              <li><a href="#why-us" className="hover:text-white">ليش MS Square</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+249 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@mssquare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>الخرطوم، السودان</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} MS Square Engineering. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
