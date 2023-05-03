import './Footer.css';
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

function Footer() {
  return (
    <footer>
      <ul className="social-link-list">
        <li><a href='https://github.com/'> <FiGithub /> </a></li>
        <li><a href='https://www.instagram.com/rahul_lakhvara_/'> <FiInstagram /> </a></li>
        <li><a href='https://twitter.com/RLaxar'> <FiTwitter /> </a></li>
        <li><a href='https://www.linkedin.com/in/rahul-lakhvara-302b93210/'> <FiLinkedin /> </a></li>
      </ul>
      <div className='github-links'>
        <div>
          <a href='#github'>Built by Rahul Lakhvara</a>
        </div>
        <div>
          <a target='blank' href='https://github.com/bchiang7/v4'>Inspired by Brittany Chiang</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
