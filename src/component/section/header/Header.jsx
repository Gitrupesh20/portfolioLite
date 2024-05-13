import "./header.css"
import { FaGithubAlt,FaPython, FaReact } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";

const Header = () => {
  return (
    <main className="main" id="header">
      <div className="outter_box">
        <div className="profile ">
          <div className="caption">
              <h2>
                Back-End developer
              </h2>
                <p>
                Hi i&apos;m Rupesh, a passionate  developer based in Delhi, India
                </p>
                <div className="flex flex-row pt-5  ">
                  <a href="https://github.com/Gitrupesh20" > <FaGithubAlt size={30} style={{marginRight:"10px"}} /> </a> 
                  <a href="https://leetcode.com/Rupesh_Sharma/" target="blank"  ><SiLeetcode size={25}/></a>
                </div>

          </div>

        
            <div className="shape">
                <img src={ "/assets/profile.jpg"} alt="sf"  />

            </div>

        </div>

        <div className="tech_stack">
          <h3>Tech Stack : </h3> 
            
          <IoLogoCss3 size={33} />
          <FaReact size={30}/>
          <RiJavascriptFill size={35} />
          <FaPython size={30} />
          
        </div>
      </div>
    </main>
  )
}

export default Header