import { useRef } from "react";
import { ClipboardList, X } from "lucide-react";

import Button from "../../components/ui/Button";
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
		<section>
			<h2 className="text-heading mb-1">Tasks</h2>
			<p className="mb-4">Break this project into actionable steps.</p>
			<div className="flex gap-4 mb-4">
				<Input id="task" ref={taskInput} className="flex-1" placeholder="Add a new task…" />
				<Button onClick={handleAddTaskClick}>Add Task</Button>
			</div>
			{tasks.length === 0 && (
				<div className="bg-white flex flex-col items-center gap-2 py-8 px-4 rounded-lg text-center">
					<ClipboardList size={28} className="text-ink-faint" />
					<p className="text-body font-medium">No tasks yet</p>
					<p className="text-sm">Add your first task above to get started.</p>
				</div>
			)}
			{tasks.length > 0 && (
				<ul className="bg-white p-4 rounded-lg">
					{tasks.map((task) => (
						<li className="flex items-center justify-between py-3 first:pt-0 last:pb-0 border-b border-line last:border-0" key={task.id}>
							<span>{task.text}</span>
							<button onClick={() => onDeleteTask(task.id)} className="text-ink-faint hover:text-overdue transition-colors">
								<X size={16} />
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
