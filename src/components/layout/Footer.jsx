import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

const links = [
  { href: profile.social.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: `mailto:pitawalacha@gmail.com`, label: 'Email', Icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-faint font-mono">
          &copy; {new Date().getFullYear()} Janani Pitawala. Built with React &amp; Tailwind CSS.
        </p>

        <ul className="flex items-center gap-4">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="text-text-faint transition-colors hover:text-accent-soft"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
