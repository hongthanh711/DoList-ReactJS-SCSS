import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TicketInput({ handleClick }) {
  TicketInput.propTypes = {
    handleClick: PropTypes.func.isRequired,
  };
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleCreate = () => {
    handleClick(name);
    setName("");
  };

  return (
    <>
      <input
        value={name}
        type="text"
        placeholder="New list"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleCreate();
          }
        }}
      />
      <button className="button-create" type="button" onClick={handleCreate}>
        Create
      </button>
    </>
  );
}
