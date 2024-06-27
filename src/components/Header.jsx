import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import { Modal } from "./Modal";

export const Header = ({ addPerson }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Div>
      <Button variant="contained" onClick={handleModalOpen}>
        Add Card
      </Button>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={handleModalClose}
          addPerson={addPerson}
        />
      )}
    </Div>
  );
};

const Div = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid red;
  padding: 10px;
  background-color: green;
`;
