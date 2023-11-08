import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const modalStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "236px",
  width: "80%",
  flexShrink: "0",
  background: "#252525",
};

const backdropStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  background: "rgb(196, 196, 196, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const pStyles = {
  color: "#CFCFCF",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "23px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const ModalButtonStyles = styled.button`
  background: ${(props) => props.$bgColor};
  width: 93px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 5px;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function ModalButton({ text, action, bgColor }) {
  return (
    <ModalButtonStyles $bgColor={bgColor} onClick={action}>
      {text}
    </ModalButtonStyles>
  );
}

function Backdrop({ children, closeModal }) {
  return ReactDOM.createPortal(
    <div style={backdropStyle} className="backdrop" onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("portal")
  );
}

function Modal({ closeModal, todoList, setTodoList }) {
  //   const navigate = useNavigate();

  const deleteTodo = () => {
    const todoID = document.getElementById("portal").dataset.noteid;
    const tempTodoList = [...todoList];
    tempTodoList.splice(
      tempTodoList.findIndex((todo) => todo.id === todoID),
      1
    );

    setTodoList(tempTodoList);
  };

  // localStorage.setItem("items", JSON.stringify(localNoteList));
  // navigate("/home");

  // console.log(localNoteList);
  //   };

  return (
    <Backdrop closeModal={closeModal}>
      <div
        style={modalStyles}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="./info.svg" alt="" />
        <p style={{ textAlign: "center" }}>Are your sure you want delete?</p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <ModalButton
            text={"Delete"}
            bgColor={"#F00"}
            action={deleteTodo}
          ></ModalButton>

          <ModalButton
            text={"Keep"}
            bgColor={"#30BE71"}
            action={closeModal}
          ></ModalButton>
        </div>
      </div>
    </Backdrop>
  );
}

export default Modal;
