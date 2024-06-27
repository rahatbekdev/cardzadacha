import React, { useState } from "react";
import { Button, TextField, styled } from "@mui/material";

export const Modal = ({ openModal, setOpenModal, addPerson }) => {
  const [image, setImageValue] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 1000);
    addPerson({ image, title, id });
    setOpenModal(false);
  };

  return (
    <ModalBackground open={openModal}>
      <ModalContent>
        <TextField
          fullWidth
          label="image"
          type="url"
          value={image}
          onChange={(e) => setImageValue(e.target.value)}
        />
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add client
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled("div")`
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;
