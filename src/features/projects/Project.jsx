import Tasks from "../tasks/Tasks";

export default function Project({ project, onDelete, onAddTask, onDeleteTask }) {
	if (!project) {
		return (
			<section className="w-[35rem] mt-16">
				<p className="text-red-500">Project not found.</p>
			</section>
		);
	}

	const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<section className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center gap-4 justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
					<button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
				</div>
				<p className="mb-4 text-stone-400">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
			</header>
			<Tasks tasks={project.tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
		</section>
	);
}
