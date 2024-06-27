import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import { Header } from "../components/Header";

export const HomePage = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb51Yj-DS6kVL7MmwQlcDzpdeYRaHK3Hd__g&s",
      title: "Person 1",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfGB34jFyqrMVl4x0yW5Q_LICjDM7a8J9mQ&s",
      title: "Person 2",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00ZT1jtWcl-wpBOre7RCPoL-_DicUYQnrOw&s",
      title: "Person 3",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXq5xr9NgBvJrx-lQ7bIMT1jjvdwKcEp-pQ&s",
      title: "Person 4",
    },
  ]);

  const addPerson = (person) => {
  
    setPersons([...persons, person]);
  };

  const handleDelete = (id) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
  };

  return (
    <div>
      <Header addPerson={addPerson} />
      <GridContainer>
        {persons.map((person) => (
          <DivPersons key={person.id}>
            <img src={person.image} alt={person.title} />
            <h1>{person.title}</h1>
            <MyButton variant="contained" onClick={() => handleDelete(person.id)}>
              Delete
            </MyButton>
          </DivPersons>
        ))}
      </GridContainer>
    </div>
  );
};

const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 16px;
`;

const DivPersons = styled("div")`
  text-align: center;
  border: 1px solid silver;
  background-color: blue;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const MyButton = styled(Button)`
  &:hover {
    background-color: red;
  }
`;
