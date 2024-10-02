import React from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

// Define the types for different variants and alignments
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'caption'
type TypographyAlign = 'left' | 'center' | 'right' | 'justify'

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  tag?: TypographyVariant
  align?: TypographyAlign
  className?: string // To allow custom Tailwind classes
  children: React.ReactNode
}

const typographyVariants = cva('-tracking-[0.2]', {
  variants: {
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    type: {
      '@12': 'text-[12px] ',
      '@14': 'text-[14px] leading[1.5]',
      '@16': 'text-[16px] leading[1.5]',
      '@18': 'text-[18px] leading[1.5]',
      '@20': 'text-[20px] leading[1.5]',
      '@24': 'text-[24px] leading[1.5]',
      '@32': 'text-[32px] leading[1.5]',
      '@36': 'text-[36px] leading[1.5]',
      '@40': 'text-[40px] leading[1.5]',
      '@72': 'text-[72px] leading[1.5]',
    },
    defaultVariants: {
      weight: 'regular',
      type: '@14',
    },
  },
})

// Map typography variants to their respective HTML tags
const variantTags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p', // Default to <p> for body text
  caption: 'span', // Use <span> for caption text
}
// A mapping of text alignments to Tailwind classes
const alignmentStyles: Record<TypographyAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

const Typography: React.FC<TypographyProps> = ({
  tag = 'body',
  align = 'left',
  type = '@12',
  weight = 'regular',
  className,
  children,
}: TypographyProps) => {
  const Tag = variantTags[tag]

  // Combine Tailwind classes from variant, alignment, and any custom classes

  // Render the appropriate tag with the correct Tailwind classes
  return (
    <Tag
      className={cn(
        typographyVariants({ type, weight, className }),
        alignmentStyles[align]
      )}
    >
      {children}
    </Tag>
  )
}

export default Typography
