import Texte from './components/Texte/Texte';
import Topbar from "./components/Topbar/Topbar";
import SlideshowApp from './components/SlideshowApp/SlideshowApp';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Texte />
      <SlideshowApp />
    </div>
  );
}
export default App;
