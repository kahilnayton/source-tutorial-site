
import React, { useState } from "react";
import { navigate } from 'gatsby';

const CustomForm = () => {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    navigate(`/search?keywords=${title}`) 
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="Submit" />
      </label>
    </form>
  );
};

export default CustomForm;
