import './Home.css';
import Navbar from '../Navbar/Navbar';
import LeftSidebar from '../Sidebars/LeftSidebar';
import RightSidebar from '../Sidebars/RightSidebar';
import Main from '../MainComponents/Main';
import Footer from '../Footer/Footer';
import { useState } from 'react';


function Home() {

  const [isSidebarOpen , setSidebar] = useState(false)

  const classHandler = (booleanvalue) => {
    setSidebar(booleanvalue);
  }


  return (
    <div className='main-container'>
      <Navbar classHandler={classHandler}/>
      <LeftSidebar />
      <RightSidebar />
      <div className={`main-footer-wrapper ${isSidebarOpen && 'blur'}`}>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
