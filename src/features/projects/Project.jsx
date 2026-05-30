import { Calendar, Trash2 } from "lucide-react";

import Button from "../../components/ui/Button";
import Tasks from "../tasks/Tasks";
import ContentPanel from "../../components/ui/ContentPanel";

export default function Project({ project, onDelete, onAddTask, onDeleteTask }) {
	if (!project) {
		return (
			<ContentPanel className="flex-1">
				<p className="text-error">Project not found.</p>
			</ContentPanel>
		);
	}

	const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<ContentPanel>
			<header className="pb-4 mb-4">
				<div className="flex items-start gap-2 justify-between mb-1">
					<h1 className="text-page-title">{project.title}</h1>
					<Button variant="ghost" onClick={onDelete} className="flex items-center gap-2">
						<Trash2 size={16} className="mr-1" />
						Delete
					</Button>
				</div>
				<div className="inline-flex items-center gap-1.5 rounded-md bg-white border border-line text-xs text-ink-soft py-0.5 px-2.5 mb-3">
					<Calendar size={13} className="shrink-0" />
					{formattedDate}
				</div>
				<p className="whitespace-pre-wrap">{project.description}</p>
			</header>
			<Tasks tasks={project.tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
		</ContentPanel>
	);
}
