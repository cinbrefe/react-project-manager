import { useState, useRef } from "react";

import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";

export default function NewProject({ onAdd, onCancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleClick() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (
			enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''
		) {
			setIsModalOpen(true);
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				buttonCaption="Close"
			>
				<h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value</p>
				<p className="text-stone-600 mb-4">Please make sure you provide a valid value for all fields.</p>
			</Modal>
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
					<Input label="Description" id="description" textarea ref={description} />
					<Input label="Due Date" id="due-date" type="date" ref={dueDate} />
				</div>
			</section>
		</>
	);
}
