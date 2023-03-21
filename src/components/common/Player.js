const Player = ({ url }) => {
  return (
    <video playsInline muted loop autoPlay>
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default Player;
