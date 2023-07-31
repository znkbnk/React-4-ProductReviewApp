import React, { useState } from 'react';

// Sample product data
const productsData = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product.',
    price: 10,
    reviews: [],
  },
  // Add more products here...
];

function ProductReviewApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleReviewSubmit = (rating, comment) => {
    if (selectedProduct) {
      const newReview = {
        product: selectedProduct.name,
        rating,
        comment,
      };

      setReviews([...reviews, newReview]);
      setSelectedProduct(null);
    }
  };

  const renderProducts = () => {
    return productsData.map((product) => (
      <div key={product.id} onClick={() => handleProductClick(product)}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    ));
  };

  const renderProductDetails = () => {
    if (!selectedProduct) {
      return null;
    }

    return (
      <div>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
        <p>Price: ${selectedProduct.price}</p>
        <h3>Reviews:</h3>
        {selectedProduct.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {selectedProduct.reviews.map((review, index) => (
              <li key={index}>
                Rating: {review.rating}, Comment: {review.comment}
              </li>
            ))}
          </ul>
        )}
        <hr />
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    );
  };

  return (
    <div>
      <h1>Product Review App</h1>
      <div className="product-list">{renderProducts()}</div>
      <div className="product-details">{renderProductDetails()}</div>
    </div>
  );
}

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setRating(5);
    setComment('');
  };

  return (
    <div>
      <h3>Submit a Review</h3>
      <label>
        Rating:
        <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} />
      </label>
      <br />
      <label>
        Comment:
        <textarea value={comment} onChange={handleCommentChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ProductReviewApp;
