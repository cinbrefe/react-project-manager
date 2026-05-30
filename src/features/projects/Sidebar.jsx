import { Folder } from "lucide-react";

import Button from "../../components/ui/Button";

export default function Sidebar({ onAddStartedProject, projects, onViewProject, selectedProjectId }) {
	return (
		<aside className="w-full md:w-64 md:shrink-0 px-6 py-6 md:px-8 md:py-10 bg-sidebar border-b md:border-b-0 md:border-r border-line/60 md:rounded-l-[8px]">
			<div className="flex items-center justify-between md:flex-col md:items-start md:gap-4 mb-4 md:mb-8">
				<h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">Projects</h2>
				<Button onClick={onAddStartedProject}>+ Add Project</Button>
			</div>
			<ul className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-x-visible md:gap-2">
				{projects.map((project) => (
					<li key={project.id}>
						<button
							className={`min-w-0 md:min-w-0 md:w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
								project.id === selectedProjectId
									? "bg-accent text-white font-medium"
									: "text-ink-soft hover:text-ink hover:bg-white/60"
							}`}
							onClick={() => onViewProject(project.id)}
						>
							<Folder size={14} className="shrink-0" />
							{project.title}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
