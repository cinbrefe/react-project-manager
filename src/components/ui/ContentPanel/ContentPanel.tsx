import type { ComponentProps } from 'react';

type ContentPanelProps = ComponentProps<'section'>;

export default function ContentPanel({ children, className = '', ...props }: ContentPanelProps) {
	return (
		<section className={`w-full md:flex-1 px-6 py-8 md:px-8 md:py-10 overflow-y-auto ${className}`} {...props}>
			{children}
		</section>
	);
}
