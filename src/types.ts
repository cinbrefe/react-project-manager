export type Task = {
	id: string;
	text: string;
};

export type Project = {
	id: string;
	title: string;
	description: string;
	dueDate: string;
	tasks: Task[];
};

export type NewProjectData = Omit<Project, 'id' | 'tasks'>;

export type ProjectState = {
	projects: Project[];
	selectedProjectId: string | null | undefined;
};
