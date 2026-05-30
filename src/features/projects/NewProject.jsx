import { useState, useRef } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import ContentPanel from "../../components/ui/ContentPanel";

export default function NewProject({ onAdd, onCancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	const [modalOpen, setModalOpen] = useState(false);
	const [errors, setErrors] = useState([]);

	function handleClick() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		const newErrors = [];
		if (enteredTitle.trim() === "") newErrors.push("Title is required.");
		if (enteredDescription.trim() === "") newErrors.push("Description is required.");
		if (enteredDueDate.trim() === "") newErrors.push("Due date is required.");

		if (newErrors.length > 0) {
			setErrors(newErrors);
			setModalOpen(true);
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
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} buttonCaption="OK">
				<h2 className="text-heading my-4">Invalid Input</h2>
				<p className="text-body mb-4">
					Oops ... looks like you forgot to enter a value.
				</p>
				<p className="text-body mb-4">
					Please make sure you provide a valid value for every input field.
				</p>
				<ul className="text-body list-disc list-inside">
					{errors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			</Modal>
			<ContentPanel>
				<h1 className="text-page-title mb-2">New project</h1>
				<p className="mb-8">Add it to your project list.</p>
				<div>
					<Input label="Title" id="title" ref={title} placeholder="e.g. Website Redesign" />
					<Input label="Description" id="description" textarea ref={description} placeholder="What is this project about?" />
					<Input label="Due Date" id="due-date" type="date" ref={dueDate} />
				</div>
				<div className="flex items-center justify-between gap-4 mt-6">
					<Button variant="ghost" onClick={onCancel}>Cancel</Button>
					<Button onClick={handleClick}>Save</Button>
				</div>
			</ContentPanel>
</>
	);
}
