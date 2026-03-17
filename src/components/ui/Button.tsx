import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-secondary font-semibold hover:bg-primary-light active:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-200',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-200',
  ghost:
    'text-accent hover:text-primary hover:bg-white/5 transition-all duration-200',
  whatsapp:
    'bg-whatsapp text-white font-semibold hover:bg-whatsapp-dark active:bg-whatsapp-dark shadow-lg shadow-whatsapp/30 hover:shadow-whatsapp/50 transition-all duration-200',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const { variant = 'primary', size = 'md', className, ...rest } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-sans font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary disabled:opacity-50 disabled:pointer-events-none select-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, ...anchorRest } = props
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorRest}
      />
    )
  }

  const { as: _as, variant: _v, size: _s, ...buttonRest } = props as ButtonAsButton
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonRest}
    />
  )
})

Button.displayName = 'Button'
