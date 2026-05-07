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
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button onClick={onClose}>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
}
