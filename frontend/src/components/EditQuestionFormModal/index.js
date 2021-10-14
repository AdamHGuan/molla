import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditQuestionForm from "./EditQuestionForm";

function EditQuestionFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>Edit Question</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditQuestionForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default EditQuestionFormModal;
