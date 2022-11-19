import Slideshow from "../Slideshow/Slideshow";

const SlideshowApp = () => {
  const slides = [
    { url: "http://localhost:3001/image1.jpg", title: "Chevalier" },
    { url: "http://localhost:3001/image2.jpg", title: "Assasin sur bateau" },

  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
      <Slideshow slides={slides} />
      </div>
    </div>
  );
};

export default SlideshowApp;