import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteQuestionForm from "./DeleteQuestionForm";

function DeleteQuestionFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)} className="btn">
				Delete Question
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteQuestionForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default DeleteQuestionFormModal;
