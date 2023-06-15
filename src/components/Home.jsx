import "./home.scss";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
  UilMessage, UilMouseAlt2, UilArrowDown
} from "@iconscout/react-unicons";

const Home = () => {
  return (
    <div className="homePage">
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon"
              >
                <UilLinkedinAlt />
              </a>
              <a
                href="https://www.github.com/shailesh89116"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon"
              >
                <UilGithubAlt />
              </a>
              <a
                href="https://www.instagram.com/shaileshgehlot6990"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon"
              >
                <UilInstagram />
              </a>
            </div>

            <div className="home_img">
              <svg className="home_blob"
                 viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home_blob-img" x='12' y='18'
                    xlinkHref="src/assets/shailesh.png"
                  />
                </g>
              </svg>
            </div>

            <div className="home_data">
                <h1 className="home_title">Hi, I'am Shailesh</h1>
                <h3 className="home_subtitle">FullStack Developer</h3>
                <p className="home_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit modi iusto totam quaerat odit. Quo consequuntur voluptatibus corporis provident eos quia incidunt sint natus quae, labore dolor enim voluptate, cumque, blanditiis iure.</p>
                <a href="#contact" className="button button--flex">
                Contact Me<UilMessage className="button_icon"/>
                </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button--flex">
                <UilMouseAlt2 className="home_scroll-mouse" />
                <span className="home_scroll-name">
                    Scroll Down
                </span>
                <UilArrowDown className="home_scroll-arrow"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
