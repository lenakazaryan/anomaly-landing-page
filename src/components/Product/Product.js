import Title from "./Title";
import Video from "./Video";
import Job from "./Job";
import Possibilities from "./Possibilities";
import ReadyToWork from "./ReadyToWork";
import { useState, useEffect } from "react";

function Product() {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [modalIsOpen]);

  return (
    <div className="App">
      <Title />
      <Video setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <Job />
      <Possibilities />
      <ReadyToWork />
    </div>
  );
}

export default Product;
