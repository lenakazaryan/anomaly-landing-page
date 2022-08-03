import "./App.css";
import tw from "tailwind-styled-components";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Video from "./components/Video";
import Job from "./components/Job";
import Possibilities from "./components/Possibilities";
import ReadyToWork from "./components/ReadyToWork";
import Footer from "./components/Footer";
import FooterChild from "./components/FooterChild";
import { useState, useEffect } from "react";
import VideoOverlay from "./components/VideoOverlay";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hidden, isHidden] = useState(true);

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      {modalIsOpen ? (
        <VideoOverlay closeModal={closeModal} hidden={hidden} />
      ) : null}
      <Navbar hidden={hidden} isHidden={isHidden} />
      <Title/>
      <Video openModal={openModal} />
      <Job />
      <Possibilities />
      <ReadyToWork />
      <Footer />
      <FooterChild />
    </div>
  );
}

export default App;
