import Gallery from '../components/Gallery';

function Home() {
  return (
    <div className="home-container">
      <div className="scroll" name="home" />
      <div className="home">
        <div className="gallery">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
