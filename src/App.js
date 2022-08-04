// import "./App.css";
// import Products from "./components/Products/Products";
// import Main from "./components/Main/Main"

// function App() {
//   return (
//     <div className="App">
//       <Products />
//       <Main/>
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
// import Title from "../../components/Title";
// import Video from "../../components/Video";
// import Job from "../../components/Job";
// import Possibilities from "../../components/Possibilities";
// import ReadyToWork from "../../components/ReadyToWork";
import Footer from "./components/Footer";
import FooterChild from "./components/FooterChild";
import { useState, useEffect } from "react";
import VideoOverlay from "./components/VideoOverlay";
import Product from "./components/Product/Product";
import Main from "./components/Main/Main";

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
      <Navbar hidden={hidden} isHidden={isHidden} />
      <Main />
      {/* <Title/>
      <Video openModal={openModal} />
      <Job />
      <Possibilities />
      <ReadyToWork /> */}
      <Footer />
      <FooterChild />
    </div>
  );
}

export default App;
