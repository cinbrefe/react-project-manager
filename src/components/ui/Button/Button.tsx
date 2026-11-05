import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
	variant?: keyof typeof variants;
};

const variants = {
	primary: 'bg-accent text-white hover:bg-white hover:text-ink',
	ghost: 'bg-transparent border border-line text-ink-soft hover:text-ink hover:border-ink',
	danger: 'bg-red-500 text-white',
} as const;

export default function Button({
	children,
	className = '',
	variant = 'primary',
	type = 'button',
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`px-4 py-2 text-xs md:text-base rounded-md transition-colors duration-200 ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
