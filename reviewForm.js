//ReviewForm.js

// Step 9: Create the ReviewForm component
import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  // Step 10: Add form fields
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // Step 10: Create event handlers
  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Step 11: Implement the form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit( rating, comment);
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={handleRatingChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      <br />
      <label>
        Comment:
        <textarea value={comment} onChange={handleCommentChange} />
      </label>
      <br />
      <button type='submit'>Submit Review</button>
    </form>
  );
};

export default ReviewForm;
