import React from 'react';
import './HomePage.css';
import Slider from 'react-slick';

function HomePage() {
  const images = [
    'https://example.com/slide1.jpg',
    'https://example.com/slide2.jpg',
    'https://example.com/slide3.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const products = [
    {
      id: 1,
      name: 'Pizza',
      image: 'https://example.com/pizza.jpg',
      price: '$9.99'
    },
    {
      id: 2,
      name: 'Burger',
      image: 'https://example.com/burger.jpg',
      price: '$6.99'
    },
    {
      id: 3,
      name: 'Taco',
      image: 'https://example.com/taco.jpg',
      price: '$3.99'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      image: 'https://example.com/john.jpg',
      comment: 'I love the food at this restaurant!'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: 'https://example.com/sarah.jpg',
      comment: 'The service here is amazing!'
    },
    {
      id: 3,
      name: 'Mike Lee',
      image: 'https://example.com/mike.jpg',
      comment: 'The prices are so affordable!'
    }
  ];

  return (
    <div className="home">
      <Slider {...settings}>
  {images.map(image => (
    <div key={image}>
      <img src={image} alt="Slider" />
    </div>
  ))}
</Slider>
      <div className="content">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Testimonials</h2>
        <div className="testimonials">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} />
              <p>{testimonial.comment}</p>
              <cite>{testimonial.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;