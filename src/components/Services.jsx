import { useState } from "react";
import "./services.scss";
import { UilWebGrid, UilArrowRight, UilTimes, UilCheckCircle, UilArrow  } from '@iconscout/react-unicons'

const Services = () => {

    const [open, setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <div className="servicePage">
    <section className="services section">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            {/* ====================Service 1==================== */}
            <div className="services_content">
                <div className="">
                <UilArrow className="services_icon"/>
                <h3 className="services_title">Frontend <br />Developement</h3>
                </div>

                <span className="button button--flex button--small button--link services_button" onClick={handleOpen}>
                    View More<UilArrowRight className="button_icon"/>
                </span>

                <div className={open ? `services_modal active` : `services_modal `}>
                    <div className="services_modal-content">
                        <h4 className="services_modal-title">Frontend <br />Developement</h4>
                        <UilTimes className="services_modal-close" onClick={handleClose}/>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </li>

                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* ====================Service 2==================== */}
             <div className="services_content">
                <div className="">
                <UilWebGrid className="services_icon"/>
                <h3 className="services_title">Backend<br />Developement</h3>
                </div>

                <span className="button button--flex button--small button--link services_button" onClick={handleOpen}>
                    View More<UilArrowRight className="button_icon"/>
                </span>

                <div className={open ? `services_modal active` : `services_modal `}>
                    <div className="services_modal-content">
                        <h4 className="services_modal-title">Backend<br />Developement</h4>
                        <UilTimes className="services_modal-close" onClick={handleClose}/>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </li>

                            <li className="services_modal-service">
                                <UilCheckCircle className="services_modal-icon"/>
                                <p className="services_modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
