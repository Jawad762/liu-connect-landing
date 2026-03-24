import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../constants'
import { LogoIcon } from './icons'

export function Navbar() {
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : ''
  const isAndroid = userAgent.includes('android')
  const isAppleDevice =
    userAgent.includes('iphone') ||
    userAgent.includes('ipad') ||
    userAgent.includes('ipod') ||
    userAgent.includes('macintosh')

  const storeUrl = isAndroid ? GOOGLE_PLAY_URL : isAppleDevice ? APP_STORE_URL : '#download'

  return (
    <header className="relative z-20 max-w-5xl mx-auto flex items-center justify-between px-6 pt-6 pb-4 md:px-10 md:pt-8">
      <div className="flex items-center gap-2.5">
        <LogoIcon className="w-10 h-10" />
        <span className="text-white font-semibold text-[17px] tracking-tight">LIU Connect</span>
      </div>
      <a
        href={storeUrl}
        className="bg-accent hover:bg-[#1a8fdc] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
      >
        Get the App
      </a>
    </header>
  )
}
