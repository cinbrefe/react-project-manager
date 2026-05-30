import noProjectsImg from "../../assets/no-projects.png";
import Button from "../../components/ui/Button";
import ContentPanel from "../../components/ui/ContentPanel";

export default function NoProjectSelected({ onAddStartedProject }) {
	return (
		<ContentPanel className="flex flex-col items-center justify-center flex-1 gap-4 text-center">
			<img
				src={noProjectsImg}
				alt="An empty task list"
				className="w-20 h-20 object-contain"
			/>
			<h1 className="text-page-title">Nothing here yet</h1>
			<p className="max-w-xs">
				Create your first project and start turning ideas into tasks.
			</p>
			<div className="mt-2">
				<Button onClick={onAddStartedProject}>Create your first project</Button>
			</div>
		</ContentPanel>
	);
}
