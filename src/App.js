import "./App.css";
import tw from "tailwind-styled-components";
import Navbar from "./components/Navbar";
import Title from "./components/Title"
import Video from "./components/Video";
import Job from "./components/Job";
import Possibilities from "./components/Possibilities";
import ReadyToWork from "./components/ReadyToWork";
import Footer from "./components/Footer";
import FooterChild from "./components/FooterChild";
import { useState } from "react";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-red-400
`;

function App() {
  const [hidden, isHidden] = useState(true)
  return (
    <div className="App">
      <Navbar hidden={hidden} isHidden={isHidden} />
      <Title hidden={hidden} isHidden={isHidden}/>
      <Video/>
      <Job/>
      <Possibilities/>
      <ReadyToWork/>
      <Footer/>
      <FooterChild/>
    </div>
  );
}

export default App;
