import './Navbar.css'

import MyProfile from '../Assets/Images/RAHUL LAKHVARA.jpeg';
import Resume from '../Assets/Pdf/Rahul_lakhvara Frontend_developer.pdf'


import { HashLink } from "react-router-hash-link"
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { useEffect, useRef, useState, useCallback } from 'react'

function Navbar({ classHandler }) {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const elm = useRef();

    const openSidebar = (booleanvalue) => {
        setSidebarOpen(booleanvalue);
    }

    classHandler(isSidebarOpen);

    useEffect(() => {

        const addingClass = (className) => { 
            const element =  document.querySelectorAll(className);
            for(let elm of element){
             elm.className += ' fade-up';
            }
        }
      
       addingClass('.fade-down-top');
       addingClass('.fade-down-bottom');
       
    },[])

    useEffect(() => {

        const checkViewportWidth = () => {
            if (window.innerWidth > 768)
                openSidebar(false);
        }

        window.addEventListener('resize', checkViewportWidth);
    });


    useEffect(() => {

        const closeSidebar = (event) => {
            if (!elm.current.contains(event.target)) {
                setSidebarOpen(false);
                document.querySelector('body').style.overflow = '';
            }
        }

        window.addEventListener('click', closeSidebar)
    });

    const [y,setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,setScrollDirection] = useState("noScroll");

    const handleNavigation =  () => {

        if(window.scrollY < 30) {
            setScrollDirection('noScroll');
        }
        else if(y > window.scrollY && window.scrollY > 30) {
            setScrollDirection('scrollUp');
        }
        else {
            setScrollDirection('scrollDown');
        }
        setY(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener("scroll", handleNavigation) ;

        return () => window.removeEventListener('scroll',handleNavigation) ;
    });

    const bodyOverflowHandler = (property) => {
        document.querySelector('body').style.overflow = property ;
    }



    return (
        <header className={`${scrollDirection !== 'noScroll' && (scrollDirection === 'scrollUp' ? 'scroll-up' : 'scroll-down')}`}>
            <nav className="nav">
                <div className="logo" onClick={ () => window.location.reload() }> 
                    <img src={MyProfile} alt='profile-pic'></img>
                </div>
                <div className="content">
                    <ol>
                        <li className='fade-down-top' style={{transitionDelay:'300ms'}}> <HashLink smooth to="/#About">About</HashLink> </li>
                        <li className='fade-down-top' style={{transitionDelay:'400ms'}}> <HashLink smooth to="/#Projects">Projects</HashLink> </li>
                        <li className='fade-down-top' style={{transitionDelay:'500ms'}}> <HashLink smooth to="/#Contact">Contact</HashLink></li>
                    </ol>
                    <div className='fade-down-top' style={{transitionDelay:'600ms'}}><a className='resume-button'  href={Resume}  target='_blank' rel="noreferrer" >Resume</a></div>
                </div>

                <div className='sidebar-content' ref={elm}>

                    <div className='ham-box-inner fade-down-top' style={{transition:'300ms'}} onClick={() => { openSidebar(true); bodyOverflowHandler('hidden')  } }>
                        <RxHamburgerMenu />
                    </div>

                    <aside className={`${isSidebarOpen && "active"}`} >
                        <div className={`cross-icon ${isSidebarOpen && "roll-cross-icon"}`} onClick={() => { openSidebar(false); bodyOverflowHandler('') }}><RxCross1 /></div>
                        <nav>
                            <ol className='sidebar-links'>
                                <li onClick={() => { bodyOverflowHandler(''); openSidebar(false); }}> <HashLink smooth to="/#About">About</HashLink> </li>
                                <li onClick={() => { bodyOverflowHandler(''); openSidebar(false); }}> <HashLink smooth to="/#Projects">Projects</HashLink> </li>
                                <li onClick={() => { bodyOverflowHandler(''); openSidebar(false); }}> <HashLink smooth to="/#Contact">Contact</HashLink></li>
                            </ol>
                            <a href={Resume} target='_blank' rel="noreferrer" className="resume-button">Resume</a>
                        </nav>
                    </aside>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
