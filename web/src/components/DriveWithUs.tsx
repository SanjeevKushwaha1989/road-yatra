import { CircleCheck } from "lucide-react";
import { CallIcon } from "@/components/BrandIcons";
import FeatureIcon from "@/components/FeatureIcon";

const DRIVER_APP_URL = "https://play.google.com/store/apps/details?id=in.roadyatra.driver";

/** Home page banner inviting drivers to join through the driver app. */
export default function DriveWithUs() {
  const phone = process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "";
  return (
    <section id="drive-with-us" className="section container-x scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-darker px-6 py-10 text-white sm:px-10 lg:py-12">
        <div className="saffron-gradient absolute inset-x-0 top-0 h-1" aria-hidden />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <FeatureIcon name="driver" tone="accent" />
              <p className="text-xs font-semibold tracking-wider text-gold uppercase">Drive with us</p>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Join JSS Travels as a driver partner</h2>
            <p className="deva mt-2 font-semibold text-gold">ड्राइवर बनें · जय श्री श्याम परिवार से जुड़ें</p>
            <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
              Drive on our daily Khatima–Delhi and Haridwar routes and outstation trips. Apply in the driver app with your licence and Aadhaar, and the office will call you after checking your details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={DRIVER_APP_URL} target="_blank" rel="noopener" className="btn-accent">
                Get the driver app
              </a>
              {phone && (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="btn bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
                  <CallIcon className="h-4 w-4" /> Call the office
                </a>
              )}
            </div>
          </div>
          <ul className="space-y-3">
            {[
              ["Duties on your phone", "See every trip assigned to you, with the passenger list and pickup points."],
              ["Scan tickets", "Check in passengers by scanning their QR code or entering the boarding OTP."],
              ["Cash and earnings", "Keep track of the cash you collect and the trips you have completed."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="font-semibold text-white">{t}</p>
                  <p className="text-sm text-slate-300">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
