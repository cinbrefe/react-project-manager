import Button from "../../components/ui/Button";

export default function Sidebar({ onAddStartedProject, projects, onViewProject, selectedProjectId }) {
	return (
		<aside className="w-1/3 bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
			<h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
				Your Projects
			</h2>
			<Button onClick={onAddStartedProject}>+ Add Project</Button>
			<ul className="mt-8">
				{projects.map((project) => {
					const isSelected = project.id === selectedProjectId;
					const cssClasses = `w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${
						isSelected ? "bg-stone-800 text-stone-200" : "text-stone-400"
					}`;

					return (
						<li key={project.id}>
							<button
								className={cssClasses}
								onClick={() => onViewProject(project.id)}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
