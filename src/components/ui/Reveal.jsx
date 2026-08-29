import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Wraps children in a fade-up-on-scroll animation.
 * `as` lets the caller pick the rendered element (div, li, article, ...).
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
