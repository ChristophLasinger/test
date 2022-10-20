function SelectModel(model) {
  window.localStorage.setItem("vrm", model);
  window.location.href="webapp/index.html";
}

export default function Home() {
  return (
    <>
    <p id = "logo">Animotion</p>
    <div className = "vrm-container">
      <button className="vrm-selector glow-on-hover" type="button" onClick={() => {SelectModel("https://cdn.glitch.global/14365248-98f0-4e5a-a5a3-1a7cd5ad47c8/uwugirl.vrm?v=1652337472157")}}>
        <img className="vrm-image" src="/images/test.png" alt="virtual model black haired boy with glasses"/>
      </button>

      <button className="vrm-selector glow-on-hover" type="button" onClick={() => {SelectModel("https://cdn.glitch.me/14365248-98f0-4e5a-a5a3-1a7cd5ad47c8/rich_girl.vrm?v=1663588646001")}}>
        <img className="vrm-image" src="images/test.png" alt="virtual model black haired boy with glasses"/>
      </button>
  
      <button className="vrm-selector glow-on-hover" type="button" onClick={() => {SelectModel("Model3")}}>
        <img className="vrm-image" src="images/test.png" alt="virtual model black haired boy with glasses"/>
      </button>
    </div>

    <div className="container">
      <a href="webapp" className="btn btn-primary">Mediaplayer</a>
      <a href="about" className="btn btn-primary">About us</a>
    </div>
    <a href="/webapp/index.html">amogus</a>
    </>
  )
}