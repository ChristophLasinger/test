import './style.css'

function App() {
  return (
    <>
    <script src="lib_scripts/three.js"></script>
    <script src="lib_scripts/GLTFLoader.js"></script>
    <script src="lib_scripts/OrbitControls.js"></script>
    <script src="lib_scripts/three-vrm.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/holistic.js"
      crossorigin="anonymous"
    ></script>

    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/kalidokit@1.1/dist/kalidokit.umd.js"></script>
    <div style="background-image: url(assets/animotion_pattern2.jpg)"class="screen">
      <div id="options">
        <span class="option make_white">webm video</span>
        <label class="switch">
          <input id="convert-to-gif" type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <span class="option make_white">gif (Chrome only)</span>
      </div>
      <video controls autoplay playsinline></video>

    <div id="controls">
    <button class="button1 button2" id="btn-start-recording">Start Recording</button>
    <button class="button1 button2" id="btn-stop-recording" disabled>Stop Recording</button>
    <p id="message"/>
    <script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
    <script src="https://unpkg.com/@ffmpeg/ffmpeg@0.9.5/dist/ffmpeg.min.js"></script>
    <script src="./scripts/html_scripts.js"></script>
  </div>
    </div>
    <div class="preview">
      <video class="input_video" width="1280px" height="720px"  autoplay muted playsinline></video>
      <canvas class="guides"></canvas>
      <section>
        <a class="button2 button1" href="selection.html"><p>back to menu</p></a>
      </section>
    </div>
    <script src="./scripts/script.js"></script>
    </>
  );
}
  
export default App;
