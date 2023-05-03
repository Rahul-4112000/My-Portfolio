import './AboutMe.css';
import profileImg from '../../Assets/Images/RAHUL LAKHVARA.jpeg'

function AboutMe() {
  return (
    <section className='about-me' id='About'>
      <h2 className='heading'>About Me</h2>
      <div className='profile-wrapper'>
        <div className='profile-content'>
          <p>Hello ! My name is Rahul and I enjoy creating front-end of website. Although I am a fresher in this field but I have spent the last few months honing my skills and building a strong foundation in HTML, CSS, JavaScript, React etc.</p>
          <p>I have completed projects to gain hands-on experience in front-end devleopment and currently working on chat web-app. I am familiar with front-end frameworks like React and have experience working with Bootstrap.</p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className='skill-list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT(ES6+)</li>
            <li>JQUERY</li>
            <li>REACT</li>
            <li>BOOTSTRAP</li>
            <li>REDUX</li>
          </ul>
        </div>
        <div className='profile-image-container'>
          <div className='profile-image-wrapper'>
            <img src={profileImg} alt="Rahul-profile"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
