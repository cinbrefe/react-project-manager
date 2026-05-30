export default function Input({ textarea, label, type = "text", className = "mb-4", ...props }) {
	const classes = "w-full p-2 border border-line bg-white rounded-lg text-ink placeholder:text-muted focus:outline-none focus:border-accent";

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			{label && (
				<label htmlFor={props.id} className="text-body">
					{label}
				</label>
			)}
			{textarea ? (
				<textarea className={classes} {...props} />
			) : (
				<input type={type} className={classes} {...props} />
			)}
		</div>
	);
}
