import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`section-container flex items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'glass border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] py-2.5 px-5'
            : 'border-transparent py-3 px-5'
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-display font-semibold text-lg tracking-tight text-text hover:text-accent-soft transition-colors"
        >
          {profile.name === '[YOUR NAME]' ? (
            <span className="text-accent font-mono">{'</>'} Welcome</span>
          ) : (
            profile.name
          )}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeId === link.id ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-200 ${
                  activeId === link.id
                    ? 'text-accent-soft bg-surface-2'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-text hover:text-accent-soft"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden section-container overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass border border-border rounded-2xl p-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeId === link.id ? 'page' : undefined}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? 'text-accent-soft bg-surface-2'
                    : 'text-text-muted hover:text-text hover:bg-surface-2'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
