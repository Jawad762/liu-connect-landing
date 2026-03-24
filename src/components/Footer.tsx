import { Link } from 'react-router-dom'
import { LogoIcon } from './icons'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/6 max-w-5xl mx-auto px-6 md:px-10 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LogoIcon className="w-8 h-8" />
          <span className="text-white/30 text-sm">© 2026 LIU Connect</span>
        </div>
        <nav className="flex gap-6 text-white/30 text-sm">
          <Link to="/privacy" className="hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
