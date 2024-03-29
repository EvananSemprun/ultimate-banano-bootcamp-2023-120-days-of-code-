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
      name: 'Pizza Margarita',
      image: 'https://media.istockphoto.com/id/1280329631/es/foto/pizza-margherita-italiana-con-tomates-y-queso-mozzarella-sobre-tabla-de-cortar-de-madera-de.jpg?b=1&s=170667a&w=0&k=20&c=gTgQv0LgV6j4XnCGSiKMXQJIwhezI3NMWIz7FWpwJV4=',
      price: '$9.99'
    },
    {
      id: 2,
      name: 'Hamburguesa clásica',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFtYnVyZ3Vlc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '$6.99'
    },
    {
      id: 3,
      name: 'Tacos al pastor',
      image: 'https://media.istockphoto.com/id/1318944407/es/foto/tacos-de-cerdo-llamados-al-pastor-con-pi%C3%B1a-en-fondo-oscuro-tacos-mexicanos.jpg?b=1&s=170667a&w=0&k=20&c=6Bcb0jI2B7OSveR1voFxWjXDF-AflPrYYnkdu0lkAnQ=',
      price: '$3.99'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      comment: 'I love the food at this restaurant!'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      comment: 'The service here is amazing!'
    },
    {
      id: 3,
      name: 'Mike Lee',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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