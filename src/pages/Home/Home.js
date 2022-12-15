import Texte from "../../components/Texte/Texte";
import Topbar from "../../components/Topbar/Topbar";
import SlideshowApp from "../../components/SlideshowApp/SlideshowApp";

function Home() {
  return (
    <div className="Home">
      <Topbar />
      <Texte />
      <SlideshowApp />
    </div>
  );
}
export default Home;
