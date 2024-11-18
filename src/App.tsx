import { useState } from "react";
import Modal from "./components/modal/Modal";
import InitialInfo from "./components/modal/contents/InitialInfo";
import Button from "./components/button/Button";
import "./reset.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button content="모달 열기" onClick={openModal} />

      {isModalOpen && (
        <Modal
          contents={<InitialInfo closeModal={closeModal} />}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
