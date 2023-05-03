import './LeftSidebar.css'
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';


import React from 'react'

function LeftSidebar() {
  return (
    <div className='left sidebar'>
      <ul className='social-media-list fade-down-top' style={{transitionDelay:'1.1s'}}>
        <li className='fade-down-top' style={{transitionDelay:'1.2s'}}><a target='blank' href='https://github.com/'> <FiGithub/> </a></li>
        <li className='fade-down-top' style={{transitionDelay:'1.3s'}}><a target='blank' href='https://www.instagram.com/rahul_lakhvara_/'> <FiInstagram/> </a></li>
        <li className='fade-down-top' style={{transitionDelay:'1.4s'}}><a target='blank' href='https://twitter.com/RLaxar'> <FiTwitter/> </a></li>
        <li className='fade-down-top' style={{transitionDelay:'1.5s'}}><a target='blank' href='https://www.linkedin.com/in/rahul-lakhvara-302b93210/'> <FiLinkedin/> </a></li>
      </ul>
    </div>
  )
}
  
export default LeftSidebar
