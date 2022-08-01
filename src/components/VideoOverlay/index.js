function VideoOverlay({ closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="w-full h-[100vh] bg-overLaybg fixed top-0 left-0 flex justify-center items-center z-50"
    >
      <iframe
        className="object-cover p-[50px] responsive-iframe w-[100%] sm:h-[400px] md:h-[100%] max-w-[2105px] max-h-[1400px] z-50"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </div>
  );
}

export default VideoOverlay;
