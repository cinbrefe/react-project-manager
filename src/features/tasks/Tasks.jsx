import { useRef } from "react";

import Input from "../../components/ui/Input";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
	const taskInput = useRef();

	function handleAddTaskClick() {
		const enteredTask = taskInput.current.value;

		if (enteredTask.trim() !== "") {
			onAddTask(enteredTask);
			taskInput.current.value = "";
		}
	}

	return (
		<section className="tasks">
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<div className="flex gap-4 mb-4">
				<Input id="task" ref={taskInput} />
				<button className="text-stone-700 hover:text-stone-950" onClick={handleAddTaskClick}>
					Add Task
				</button>
			</div>
			{tasks.length === 0 && <p className="text-stone-800">This project doesn&apos;t have any tasks yet.</p>}
			{tasks.length > 0 && (
				<ul className="p-4 mt-8 bg-stone-100 rounded-md">
					{tasks.map((task) => (
						<li className="flex items-center justify-between my-4" key={task.id}>
							<span>{task.text}</span>
							<button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
