import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditAnswerForm from "./EditAnswerForm";

function EditAnswerFormModal({ answer, setAnswerId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				onClick={(() => setShowModal(true), setAnswerId(answer.id))}
				className="btn"
			>
				Edit Answer
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditAnswerForm setShowModal={setShowModal} answer={answer} />
				</Modal>
			)}
		</>
	);
}

export default EditAnswerFormModal;
