export default function Input({ textarea, label, type = "text", ...props }) {
	const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
	return (
		<p className="text-stone-600 mb-4">
			<label htmlFor={props.id} className="text-sm font-bold uppercase text-stone-500">
				{label}
			</label>
			{textarea ? (
				<textarea className={classes} {...props} />
			) : (
				<input type={type} className={classes} {...props} />
			)}
		</p>
	);
}
