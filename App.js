import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Image from './Image';
import { product } from './product';

const firstName = "YourFirstName"; // Provide your first name here

const App = () => {
  return (
    <>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Hello, {firstName ? firstName : "there"}!
      </p>
      {firstName && (
        <div style={{ textAlign: 'center' }}>
          <img src={product.image} alt="Product" style={{ width: '200px', marginTop: '20px' }} />
        </div>
      )}
    </>
  );
};

export default App;
