import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditAnswerForm from "./EditAnswerForm";

function EditAnswerFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)} className="btn">
				Edit Answer
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditAnswerForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default EditAnswerFormModal;
