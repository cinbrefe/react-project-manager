import { useState, useRef } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function NewProject({ onAdd, onCancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	const [errors, setErrors] = useState({});

	function handleClick() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		const newErrors = {};
		if (enteredTitle.trim() === "") newErrors.title = "Title is required.";
		if (enteredDescription.trim() === "") newErrors.description = "Description is required.";
		if (enteredDueDate.trim() === "") newErrors.dueDate = "Due date is required.";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});
		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<section className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<button
					className="text-stone-600 hover:text-stone-950"
					onClick={onCancel}
				>
					Cancel
				</button>
				<Button onClick={handleClick}>Save</Button>
			</menu>
			<div>
				<Input label="Title" id="title" ref={title} />
				{errors.title && <p className="text-red-500 text-sm -mt-3 mb-4">{errors.title}</p>}
				<Input label="Description" id="description" textarea ref={description} />
				{errors.description && <p className="text-red-500 text-sm -mt-3 mb-4">{errors.description}</p>}
				<Input label="Due Date" id="due-date" type="date" ref={dueDate} />
				{errors.dueDate && <p className="text-red-500 text-sm -mt-3 mb-4">{errors.dueDate}</p>}
			</div>
		</section>
	);
}
