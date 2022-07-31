function VideoOverlay({ closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="w-full h-[100vh] bg-overLaybg absolute flex justify-center items-center z-50"
    >
      <iframe
        className="responsive-iframe w-[100%] sm:h-[287px] md:h-[349px] lg:h-[390px] xl:h-[400px] 2xl:h-[95%] max-w-[85%] z-50"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </div>
  );
}

export default VideoOverlay;
