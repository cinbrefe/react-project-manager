import { useState } from 'react';

import type { Project, ProjectState, NewProjectData } from '@/types';

export function useProjectState() {
	const [projectState, setProjectState] = useState<ProjectState>({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleStartedAddProject() {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: null,
		}));
	}

	function handleAddProject(projectData: NewProjectData) {
		setProjectState((prevState) => {
			const newProject: Project = {
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

	function handleViewProject(projectId: string) {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: projectId,
		}));
	}

	function handleDeleteProject() {
		setProjectState((prevState) => {
			const remaining = prevState.projects.filter((project) => project.id !== prevState.selectedProjectId);
			return {
				...prevState,
				selectedProjectId: remaining.length > 0 ? remaining[0].id : undefined,
				projects: remaining,
			};
		});
	}

	function handleAddTask(text: string) {
		setProjectState((prevState) => ({
			...prevState,
			projects: prevState.projects.map((project) =>
				project.id === prevState.selectedProjectId
					? { ...project, tasks: [...project.tasks, { id: Math.random().toString(), text }] }
					: project,
			),
		}));
	}

	function handleDeleteTask(taskId: string) {
		setProjectState((prevState) => ({
			...prevState,
			projects: prevState.projects.map((project) =>
				project.id === prevState.selectedProjectId
					? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
					: project,
			),
		}));
	}

	const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

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
