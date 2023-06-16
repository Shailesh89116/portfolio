import "./skills.scss"
import { UilBracketsCurly, UilAngleDown, UilServerNetwork, UilCloudDatabaseTree } from '@iconscout/react-unicons'

const Skills = () => {
  return (
    <div className="skillPage">
      <div className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>

        <div className="skills_container container grid">
            <div>
                {/* ====================Skill-1================ */}
                <div className="skills_content">
                    <div className="skills_header">
                    <UilBracketsCurly className="skills_icon"/>

                    <div className="">
                        <h1 className="skills_title">
                            Frontend Developer
                        </h1>
                        <span className="skills_subtitle">More than 1 year</span>
                    </div>
                    
                    <UilAngleDown className="skills_arrow"/>
                    </div>
                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">HTML/CSS</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_html"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Javascript</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_javascript"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">ReactJs</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_reactjs"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Redux</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_redux"></span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ====================Skill-2================ */}
                <div className="skills_content">
                    <div className="skills_header">
                    <UilServerNetwork className="skills_icon"/>

                    <div className="">
                        <h1 className="skills_title">
                            Backend Developer
                        </h1>
                        <span className="skills_subtitle">More than 1 year</span>
                    </div>
                    
                    <UilAngleDown className="skills_arrow"/>
                    </div>
                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">NodeJS</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_nodejs"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">ExpressJs</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_expressjs"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">MongoDB</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_mongodb"></span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ====================Skill-3================ */}
                <div className="skills_content">
                    <div className="skills_header">
                    <UilCloudDatabaseTree className="skills_icon"/>

                    <div className="">
                        <h1 className="skills_title">
                            DevOps
                        </h1>
                        <span className="skills_subtitle">More than 6 months</span>
                    </div>
                    
                    <UilAngleDown className="skills_arrow"/>
                    </div>
                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">AWS</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_aws"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Docker</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_docker"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Kubernetes</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_kubernetes"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
