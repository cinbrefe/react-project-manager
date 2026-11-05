import type { ComponentProps } from 'react';

type InputProps = {
	label?: string;
	className?: string;
} & (({ textarea: true } & ComponentProps<'textarea'>) | ({ textarea?: false } & ComponentProps<'input'>));

export default function Input({ label, className = 'mb-4', ...props }: InputProps) {
	const classes =
		'w-full p-2 border border-line bg-white rounded-lg text-ink placeholder:text-muted focus:outline-none focus:border-accent';

	let field;

	if (props.textarea) {
		const { textarea, ...textareaProps } = props;
		field = <textarea className={classes} {...textareaProps} />;
	} else {
		const { textarea, type = 'text', ...inputProps } = props;
		field = <input type={type} className={classes} {...inputProps} />;
	}

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			{label && (
				<label htmlFor={props.id} className='text-body'>
					{label}
				</label>
			)}
			{field}
		</div>
	);
}
