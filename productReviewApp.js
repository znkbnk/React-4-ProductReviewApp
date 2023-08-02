// Step 4: Create a ProductReviewApp component


import React, { useState } from 'react';
import productsData from './productsData'; // Assuming the productsData array is provided in a separate file

const ProductReviewApp = () => {
  // Step 5: Create the state variables
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Step 6: Create helper functions
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleReviewSubmit = (rating, comment) => {
    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);
  };

  // Step 7: Render the product list
  const renderProducts = () => {
    return productsData.map((product) => (
      <div key={product.id} onClick={() => handleProductClick(product)}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    ));
  };

  // Step 8: Render product details and reviews
  const renderProductDetails = () => {
    if (!selectedProduct) return null;

    const productReviews = reviews.filter((review) => review.productId === selectedProduct.id);

    return (
      <div>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
        <p>Price: ${selectedProduct.price}</p>
        <h3>Reviews</h3>
        {productReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {productReviews.map((review, index) => (
              <li key={index}>
                Rating: {review.rating} / 5, Comment: {review.comment}
              </li>
            ))}
          </ul>
        )}

        {/* Step 13: Integrate the ReviewForm component */}
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    );
  };

  return (
    <div>
      <h1>Product Review App</h1>
      {/* Step 7: Render the product list */}
      {renderProducts()}
      {/* Step 8: Render product details and reviews */}
      {renderProductDetails()}
    </div>
  );
};

export default ProductReviewApp;
