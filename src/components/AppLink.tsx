'use client'
import {cn} from '@/lib/utils'
import {cva, VariantProps} from 'class-variance-authority'
import React, {AnchorHTMLAttributes, ReactNode} from 'react'
import Link from 'next/link';
import {usePathname} from "next/navigation";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof linkVariants> &
    React.RefAttributes<HTMLAnchorElement> & {
    children?: ReactNode
    activeClassName?: string;
    to: string;
}

const linkVariants = cva('text-base  rounded-xl', {
    variants: {
        variant: {
            default: '',
            solid: '',
        },
        size: {
            sm: '',
            md: '',
            lg: '',
        },
        underline: {
            true: 'underline decoration-solid',
            false: 'no-underline',
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
            underline: false,
        },
    },
})
const AppLink = ({
                     to,
                     variant,
                     underline,
                     activeClassName,
                     size,
                     className,
                     children,
                 }: LinkProps) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(to);
    return (
        <Link href={to}
              className={cn(
                  linkVariants({variant, size}),
                  isActive ? activeClassName || linkVariants({underline}) : '',
                  className
              )}
        >
            {children}
        </Link>
    )
}

export default AppLink
