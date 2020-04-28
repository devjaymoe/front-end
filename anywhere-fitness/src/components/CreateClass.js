import React, { useState } from "react";
import axios from "axios";

const CreateClass = (props) => {
  const [createClass, setCreateClass] = useState({
    id: "",
    name: "",
    time: "",
    duration: "",
    intensity: "",
    location: "",
    maxSize: "",
    classType: "",
    imgUrl: "",
    equiptmentRequired: "",
    arrivalDescription: "",
    additionalInfo: "",
    cost: "",
    description: "",
    address: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setCreateClass({
      ...createClass,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("https://anywherefitness-api.herokuapp.com/classes", createClass)
      .then((res) => {
        setCreateClass({
          id: Date.now(),
          name: "",
          time: "",
          duration: "",
          intensity: "",
          location: "",
          maxSize: "",
          classType: "",
          imgUrl: "",
          equiptmentRequired: "",
          arrivalDescription: "",
          additionalInfo: "",
          cost: "",
          description: "",
          address: "",
          startDate: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <h3>Create class</h3>
      <form onSubmit={submit}>
        <label htmlFor="name">
          Class Name
          <Input
            id="name"
            type="text"
            name="name"
            value={createClass.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="description">
          Class description
          <Input
            id="description"
            type="text"
            name="description"
            value={createClass.description}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="cost">
          Class cost in US dollars
          <Input
            id="cost"
            type="text"
            name="cost"
            value={createClass.cost}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="cost">
          Class cost in US dollars
          <Input
            id="cost"
            type="text"
            name="cost"
            value={createClass.cost}
            onChange={handleChange}
            required
          />
        </label>
      </form>
    </div>
  );
};

export default CreateClass;
