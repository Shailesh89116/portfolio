import { useState } from "react"
import "./navbar.scss"
import { UilEstate, UilUser, UilFileAlt, UilBriefcase, UilScenery, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'

const Navbar = () => {

    const [toggling, setToggling] = useState(false);

    const openMenu=()=>{
            setToggling(true)
    }

    const closeMenu=()=>{
        setToggling(false)
    }

    const linkAction = ()=>{
        setToggling(false)
    }

    const active = toggling ? "nav_menu show-menu" : "nav_menu";

  return (
    <div className="navbar">
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Shailesh</a>

                <div className={`${active}`} id="nav-menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                        <UilEstate className="nav_icon"/>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                            <UilUser className="nav_icon"/>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                                <UilBriefcase className="nav_icon"/>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                                <UilFileAlt className="nav_icon"/>Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                                <UilScenery className="nav_icon"/>Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={linkAction}>
                                <UilMessage className="nav_icon" />Contact Me
                            </a>
                        </li>
                    </ul>
                    <UilTimes className="nav_close" id="nav-close" onClick={closeMenu}/>
                </div>
                <div className="nav_btns">
                    <div className="nav_toggle" id="nav-toggle">
                        <UilApps onClick={openMenu}/>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
