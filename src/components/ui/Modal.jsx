import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function Modal({ children, buttonCaption, isOpen, onClose }) {
	const dialog = useRef();

	useEffect(() => {
		if (isOpen) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [isOpen]);

	return createPortal(
		<dialog ref={dialog} className="w-[90vw] max-w-md max-h-[80vh] overflow-y-auto p-6 rounded-md shadow-md backdrop:bg-ink/80">
			{children}
			<form method="dialog" className="mt-4 flex justify-end">
				<Button onClick={onClose}>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
}
