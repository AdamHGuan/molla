import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateQuestionForm from "./CreateQuestionForm";

function CreateQuestionFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>Create Question</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateQuestionForm />
				</Modal>
			)}
		</>
	);
}

export default CreateQuestionFormModal;
