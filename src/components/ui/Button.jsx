const VARIANTS = {
  primary:
    'bg-accent text-[#04120f] hover:bg-accent-soft shadow-[0_0_0_1px_rgba(45,212,191,0.4)] hover:shadow-[0_0_24px_-4px_rgba(45,212,191,0.55)]',
  secondary:
    'bg-transparent text-text border border-border hover:border-accent-dim hover:text-accent-soft',
  ghost: 'bg-transparent text-text-muted hover:text-accent-soft',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent'

  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${className}`} {...rest}>
      {Icon && iconPosition === 'left' && <Icon size={16} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} aria-hidden="true" />}
    </Tag>
  )
}
