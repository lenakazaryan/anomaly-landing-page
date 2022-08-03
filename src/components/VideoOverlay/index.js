function VideoOverlay({ closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="w-screen h-screen bg-overLaybg absolute  top-0 left-0 flex justify-center items-center z-52"
    >
      <iframe
        className="h-[300px] p-[50px] responsive-iframe w-[100%] sm:h-[500px] lg:h-[100%] max-w-[2105px] max-h-[1400px] z-50"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </div>
  );
}

export default VideoOverlay;
