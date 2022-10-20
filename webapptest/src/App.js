import './App.css';

function App() {
  return (
    <>
    <script src="lib_scripts/three.js"></script>
    <script src="lib_scripts/GLTFLoader.js"></script>
    <script src="lib_scripts/OrbitControls.js"></script>
    <script src="lib_scripts/three-vrm.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/holistic.js"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"
      crossOrigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/kalidokit@1.1/dist/kalidokit.umd.js"></script>
    <div className="screen">
      <div id="options">
        <span className="option make_white">webm video</span>
        <label className="switch">
          <input id="convert-to-gif" type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <span className="option make_white">gif (Chrome only)</span>
      </div>
      <video controls autoPlay playsInline></video>

      <div id="controls">
        <button className="button1 button2" id="btn-start-recording">Start Recording</button>
        <button className="button1 button2" id="btn-stop-recording" disabled>Stop Recording</button>
        <p id="message"/>
        <script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
        <script src="https://unpkg.com/@ffmpeg/ffmpeg@0.9.5/dist/ffmpeg.min.js"></script>
        <script src="./scripts/html_scripts.js"></script>
      </div>
    </div>
    <div className="preview">
      <video className="input_video" width="1280px" height="720px"  autoPlay muted playsInline></video>
      <canvas className="guides"></canvas>
      <section>
        <a className="button2 button1" href="selection.html"><p>back to menu</p></a>
      </section>
    </div>
    <script src="./scripts/script.js"></script>
    </>
  );
}
  
export default App;
