import { useRef } from "react";
import { DisplaySection } from "./componets/DisplaySection";
import Jumbotron from "./componets/Jumbotorn";
import Nav from "./componets/Nav";
import SoundSecton from "./componets/SoundSection";
import WebgiViewer from "./componets/WebgiViewer";
import Loader from "./componets/Loader";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSecton />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
