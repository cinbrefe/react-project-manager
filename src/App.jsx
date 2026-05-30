import { useProjectState } from "./hooks/useProjectState";

import Sidebar from "./features/projects/Sidebar";
import NoProjectSelected from "./features/projects/NoProjectSelected";
import NewProject from "./features/projects/NewProject";
import Project from "./features/projects/Project";

function App() {
	const {
		projectState,
		selectedProject,
		handleStartedAddProject,
		handleAddProject,
		handleCancelAddProject,
		handleViewProject,
		handleDeleteProject,
		handleAddTask,
		handleDeleteTask,
	} = useProjectState();

	let content;

	if (projectState.selectedProjectId === null) {
		content = <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />;
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onAddStartedProject={handleStartedAddProject} />;
	} else {
		content = (
			<Project
				project={selectedProject}
				onDelete={handleDeleteProject}
				onAddTask={handleAddTask}
				onDeleteTask={handleDeleteTask}
			/>
		);
	}

	return (
		<main className="w-full bg-card flex flex-col min-h-screen md:max-w-5xl md:mx-8 md:my-8 md:flex-row md:min-h-fit md:rounded-[8px] md:shadow-lg xl:mx-auto">
			<Sidebar
				onAddStartedProject={handleStartedAddProject}
				projects={projectState.projects}
				onViewProject={handleViewProject}
				selectedProjectId={projectState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
