import aboutImage from '../images/aboutImage.png'

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="section">
                <div className="scroll" name="about-us"></div>
                <div className="about-us">
                    <img className="about-us__image" src={aboutImage} alt="aboutUs" />
                    <div className="about-us-info">
                        <div className="wrapper">
                            <h2 className="about-us__title">Quienes <span className="about-us__title-color">Somos</span></h2>
                            <p className="about-us__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam porro illo fugiat facilis quidem doloremque! Corporis sapiente officia tempore, ad quae magnam enim earum quibusdam tenetur, nesciunt numquam! Saepe.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, facilis! Exercitationem voluptatibus eligendi deleniti eius. Eveniet debitis nobis iusto consequuntur praesentium sit modi ratione assumenda? Perferendis officiis rem aperiam corrupti.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
