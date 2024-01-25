import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Project2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "project2-home.jpeg",
    "car1.jpeg",
    "car2.jpeg",
    "faq.jpeg",
    "project2-contact.jpeg",
  ];
  const totalImages = images.length;

  // Function to handle next and previous buttons
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <section className="project2">
      <div className="project2-container">
        <div className="">
          <div className="image">
            <button className="btn-left" onClick={handlePrev}>
              <FaAngleLeft />
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            />
            <button className="btn-right" onClick={handleNext}>
              <FaAngleRight />
            </button>
          </div>
          <div className="text">
            <h1>
              Rent a car<span>Web Application</span>
            </h1>
            <p>
              The Car Application is a React.js project with Sass styling,
              featuring a list of hardcoded cars. It demonstrates fundamental
              React concepts, including state management and component-based
              design. The styling, organized with Sass, ensures a modular
              approach to design.
            </p>
            {/* <p>
              It was created by me for users to search for recipe of their
              favourite foods,where data is fetched from an API
            </p> */}
            <p>
              <span>React</span>
              <span>SASS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project2;
