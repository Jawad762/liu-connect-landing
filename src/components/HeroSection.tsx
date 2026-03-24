import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../constants'
import { AppleIcon, PlayIcon } from './icons'

export function HeroSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-14 pb-20 md:pt-20 md:pb-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/18 text-accent text-[13px] font-medium px-4 py-1.5 rounded-full mb-7 tracking-wide">
            Exclusively for LIU Students
          </div>

          <h1 className="text-[50px] md:text-[62px] lg:text-[68px] font-bold tracking-[-0.04em] text-white leading-[1.03] mb-5">
            Your campus.<br />
            Your community.
          </h1>

          <p className="text-white/55 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[440px]">
            LIU Connect is where LIU students post, connect, and discover - a private social space built just for
            you.
          </p>

          <div id="download" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={APP_STORE_URL}
              className="flex items-center justify-center gap-3 bg-white text-black font-semibold text-[15px] px-7 py-3.5 rounded-2xl hover:bg-white/90 transition-colors"
            >
              <AppleIcon />
              App Store
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              className="flex items-center justify-center gap-3 bg-white/7 border border-white/10 text-white font-semibold text-[15px] px-7 py-3.5 rounded-2xl hover:bg-white/11 transition-colors"
            >
              <PlayIcon />
              Google Play
            </a>
          </div>
        </div>

        <div className="shrink-0 relative">
          <div
            className="relative w-[262px] md:w-[282px] overflow-hidden rotate-5"
          >
            <img
              src="/screenshot.png"
              alt="LIU Connect app - profile screen"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-44 h-12 bg-accent/20 blur-2xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
