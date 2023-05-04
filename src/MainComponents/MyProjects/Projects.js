import TodoApp from '../../Assets/Images/TodoApp.png'
import Ecommerce from '../../Assets/Images/Ecommerce.png'
import { FiGithub } from 'react-icons/fi'
import './Projects.css'

function Projects() {

  return (
    <section className='projects' id='Projects'>
      <h2 className='heading'>Projects</h2>
      <ul className='projects-list'>

        <li className='project'>
          <div className='project-content'>
            <div className='project-content-wrapper'>
              <h3>Todo</h3>
              <div className='project-description'>
                <p>A minimal web app  to maintain our day-to-day tasks or list of everything that we have to do. User can select a theme, create, edit, delete, and organize tasks alphabetically or based on priority.</p>
              </div>
            </div>
            <ul className='frontend-tools'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
            <div className='github-icon'>
              <a target='_blank' rel="noreferrer" href='https://github.com/Rahul-4112000/Todo-App'><FiGithub /></a>
            </div>
          </div>
          <div className='project-image'>
            <a target='_blank' rel="noreferrer" href='https://rahul-4112000.github.io/Todo-App/'><img alt='Todo-app' src={TodoApp}></img></a>
          </div>
          <h3 >Todo</h3>
        </li>

        <li className='project'>
          <div className='project-content'>
            <div className='project-content-wrapper'>
              <h3 >Ecommerce</h3>
              <div className='project-description'>
                <p style={{marginBottom:'10px'}}>An ecommerce web App in which businesses can sell their products to customers. User need to signin for purchase any products in signin/out page. Users data are stored in Database using api which is created by json-server.</p>
                <p>User can search the product, route different pages across website which is built using react-router-dom. Redux-toolkit is used to manage react state or transfer data across different pages. User can also create product whishlist page and router to orderpage to see placed orders.</p>
              </div>
            </div>
            <ul className='frontend-tools'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux-toolkit</li>
            </ul>
            <div className='github-icon'>
              <a  target='_blank' rel="noreferrer" href='https://github.com/Rahul-4112000/E-commerce'><FiGithub /></a>
            </div>
          </div>
          <div className='project-image'>
            <a target='_blank' rel="noreferrer" href='https://github.com/Rahul-4112000/E-commerce'>
              <img alt='Ecommerce-web-app' src={Ecommerce}></img>
            </a>
          </div>
          <h3>Ecommerce</h3>
        </li>


      </ul>
    </section>
  )
}

export default Projects
