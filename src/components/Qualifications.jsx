import { useState } from "react";
import "./qualification.scss";
import {
  UilGraduationCap,
  UilBriefcase,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

const Qualifications = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  return (
    <div className="qualPage">
      <section className="qualification_section">
        <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div className={activeTab === 1 ? 'qualification_button button--flex active' : 'qualification_button button--flex'}  onClick={() => handleTabClick(1)}>
              <UilGraduationCap className="qualification_icon" />
              Education
            </div>

            <div className={activeTab === 2 ? 'qualification_button button--flex active' : 'qualification_button button--flex'}  onClick={() => handleTabClick(2)}>
              <UilBriefcase className="qualification_icon" />
              Work
            </div>
          </div>

          <div className="qualification_sections">
            {/* =============================Qualification Content1====================== */}
            <div className={activeTab === 1 ? 'qualification_content qualification_active' : 'qualification_content'} data-content id="education">
              {/* ======================Qualification 1========================= */}
              <div className="qualification_data">
                <div className="">
                  <h3 className="qualification_title">
                    Masters of Business Administration
                  </h3>
                  <span className="qualification_subtitle">
                    Mumbai University
                  </span>
                  <div className="qualification_calender">
                    <UilCalendarAlt /> 2019 - 2021
                  </div>
                </div>

                <div className="">
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
              </div>
              {/*  ======================Qualification 2========================= */}
              <div className="qualification_data">

                <div></div>

                <div className="">
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>

                <div className="">
                  <h3 className="qualification_title">
                    B.Sc.IT
                  </h3>
                  <span className="qualification_subtitle">
                    Mumbai University
                  </span>
                  <div className="qualification_calender">
                    <UilCalendarAlt /> 2016 - 2019
                  </div>
                </div>

              </div>
              {/* ======================Qualification 3========================= */}
              <div className="qualification_data">
                <div className="">
                  <h3 className="qualification_title">
                    HSC Science
                  </h3>
                  <span className="qualification_subtitle">
                    S.N. College
                  </span>
                  <div className="qualification_calender">
                    <UilCalendarAlt /> 2014 - 2016
                  </div>
                </div>

                <div className="">
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
              </div>
            </div>
            {/* "qualification_content qualification_active" */}
            {/* =============================Qualification Content2====================== */}
            <div className={activeTab === 2 ? 'qualification_content work_active' : 'qualification_content'} data-content id="work">
              {/* ======================Qualification 1========================= */}
              <div className="qualification_data">
                <div className="">
                  <h3 className="qualification_title">
                    Full Stack Developer
                  </h3>
                  <span className="qualification_subtitle">
                    Ovonts - Mumbai
                  </span>
                  <div className="qualification_calender">
                    <UilCalendarAlt /> Apr 2022 - Present
                  </div>
                </div>

                <div className="">
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualifications;
