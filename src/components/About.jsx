import "./about.scss";
import { UilDownloadAlt } from '@iconscout/react-unicons'

const About = () => {
  return (
    <div className="aboutPage">
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img src="src/assets/shailesh.png" alt="" className="about_img" />

            <div className="about_data">
                <p className="about_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur odio laboriosam eveniet numquam, ea culpa perferendis repellat veritatis, ut, est assumenda quae aliquam. Mollitia maiores ipsum dolore culpa quibusdam?
                </p>

                <div className="about_info">
                    <div>
                        <span className="about_info-title">
                            08+
                        </span>
                        <span className="about_info-name">Years <br /> experience</span>
                    </div>
                    <div>
                        <span className="about_info-title">
                            20+
                        </span>
                        <span className="about_info-name">Completed <br /> projects</span>
                    </div>
                    <div>
                        <span className="about_info-title">
                            01+
                        </span>
                        <span className="about_info-name">Company  <br /> worked</span>
                    </div> 
                </div>
                <div className="about_buttons">
                    <a href="" download="" className="button button--flex">Download CV<UilDownloadAlt className="button_icon"/>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
