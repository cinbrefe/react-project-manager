import { useState } from "react";

export function useProjectState() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleStartedAddProject() {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: null,
		}));
	}

	function handleAddProject(projectData) {
		setProjectState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random().toString(),
				tasks: [],
			};

			return {
				...prevState,
				selectedProjectId: newProject.id,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleCancelAddProject() {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
		}));
	}

	function handleViewProject(projectId) {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: projectId,
		}));
	}

	function handleDeleteProject() {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
			projects: prevState.projects.filter(
				(project) => project.id !== prevState.selectedProjectId
			),
		}));
	}

	function handleAddTask(task) {
		setProjectState((prevState) => ({
			...prevState,
			projects: prevState.projects.map((project) =>
				project.id === prevState.selectedProjectId
					? { ...project, tasks: [...project.tasks, { id: Math.random().toString(), text: task }] }
					: project
			),
		}));
	}

	function handleDeleteTask(taskId) {
		setProjectState((prevState) => ({
			...prevState,
			projects: prevState.projects.map((project) =>
				project.id === prevState.selectedProjectId
					? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
					: project
			),
		}));
	}

	const selectedProject = projectState.projects.find(
		(project) => project.id === projectState.selectedProjectId
	);

	return {
		projectState,
		selectedProject,
		handleStartedAddProject,
		handleAddProject,
		handleCancelAddProject,
		handleViewProject,
		handleDeleteProject,
		handleAddTask,
		handleDeleteTask,
	};
}
