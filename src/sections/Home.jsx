import Carousel from "../components/Carousel"

function Home() {
    return (
        <div className="home-container">
            <div className="scroll" name="home" />
            <div className="home">
                <div className="gallery">
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Home