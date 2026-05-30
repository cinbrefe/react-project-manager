const variants = {
	primary: "bg-accent text-white hover:bg-white hover:text-ink",
	ghost: "bg-transparent border border-line text-ink-soft hover:text-ink hover:border-ink",
};

export default function Button({ children, className = "", variant = "primary", ...props }) {
	return (
		<button
			className={`px-4 py-2 text-xs md:text-base rounded-md transition-colors duration-200 ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
