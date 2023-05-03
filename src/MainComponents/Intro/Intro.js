import { HashLink } from 'react-router-hash-link'
import './Intro.css'

function Intro() {
    return (
        <section className='intro'>
            <div className='fade-down-bottom' style={{transitionDelay:'0.7s'}}>
                <h1>Hi, my name is</h1>
            </div>
            <div className='fade-down-bottom' style={{transitionDelay:'0.8s'}}>
                <h2>Rahul Lakhvara.</h2>
            </div>
            <div className='fade-down-bottom' style={{transitionDelay:'0.9s'}}>
                <h3>I build front-end for web</h3>
            </div>
            <div className='fade-down-bottom' style={{transitionDelay:'1.0s'}}>
                <p>A Frontend focused Web Developer building the user-friendly Frontend of Websites.</p>
            </div>
            <div className='fade-down-bottom' style={{transitionDelay:'1.1s'}}> <HashLink smooth to='/#Projects'>See my work</HashLink></div>
        </section>
    )
}

export default Intro
