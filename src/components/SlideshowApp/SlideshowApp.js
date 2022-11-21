import Slideshow from "../Slideshow/Slideshow";

const SlideshowApp = () => {
  const slides = [
    { url: "http://localhost:3000/carroussel_img_1.jpg"}, // Asssassin
    { url: "http://localhost:3000/carroussel_img_2.jpg"}, // Chevalier sur un bateau

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