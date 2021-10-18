import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateAnswerForm from "./CreateAnswerForm";

function CreateAnswerFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)} className="btn">
				Answer this question
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateAnswerForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default CreateAnswerFormModal;
