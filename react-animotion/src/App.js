import './App.css';
import test from './test-vrm.png'

function App() {
  return (
    <>
    <p id = "logo">Animotion</p>

    <div class = "vrm-container">
      <button class="vrm-selector glow-on-hover" type="button" onClick={GoToWebapp(vrm)}>
        <img class="vrm-image" src={test} alt="virtual model black haired boy with glasses"/>
      </button>
    
      <button class="vrm-selector glow-on-hover" type="button">
        <img class="vrm-image" src={test} alt="virtual model black haired boy with glasses"/>
      </button>
    
      <button class="vrm-selector glow-on-hover" type="button">
        <img class="vrm-image" src={test} alt="virtual model black haired boy with glasses"/>
      </button>
    </div>

    <div class="container">
      <a href="webapp" class="btn btn-primary">Mediaplayer</a>
      <a href="about" class="btn btn-primary">About us</a>
    </div>
    </>
  );
}

function GoToWebapp(vrm) {
  
}

export default App;
