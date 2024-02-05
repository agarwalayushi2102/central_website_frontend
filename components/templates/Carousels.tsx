
'use client'
import { useState } from "react";
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./custom-styles.css"; // Import custom styles


export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className="itemP" interval={4000}>
          <img
            src={item.imageUrl}
            style={{ maxWidth: '60rem', height: '40rem', margin: '0 auto' }}
            alt="slides"
          />
          <Carousel.Caption className="caption">
            {/* Add your caption content here if needed */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
