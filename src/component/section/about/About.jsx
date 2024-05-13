
import { FaHtml5, FaCss3Alt,FaReact,FaPython, FaJava,FaChevronRight, FaJsSquare,FaNodeJs,FaPhp} from "react-icons/fa";
import {SiTailwindcss,SiJavascript, SiPostgresql,SiMysql  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import './about.css'
const About = () => {



  return (
    <main id="about" style={{padding:"0 6rem", paddingTop:"5rem"}}>
      <div style={{height:"100%", marginTop:"3.5rem"}}>
         <h1 className='text-[6rem] text-center font-bold'>{`Hi. I'm Rupesh.`}</h1>

         <div className="flex flex-row mt-9 mb-[3rem]">
            <div  style={{border:"2px solid rgba(10, 75, 66, 0.739)", borderRadius:"7rem 7rem 2px 2px", marginRight:"2.5rem", overflow:"hidden", height:"400px", width:"25%"}}>
              <div>
                <img src="https://img.freepik.com/premium-vector/pixel-8bit-dragon-is-sitting-animals-vector-illustrations-game-assets-logos_614713-1252.jpg" 
                alt=""
                style={{height:"340px"}}
                />
              </div>

            </div>

            <div className="p-4 w-[70%]">
              <h1 className='text-[2.5rem]  font-bold text-left mb-5'>
                {`I'm a backend developer and aspiring data scientist, working and learning in the diverse weather of Delhi.`}
              </h1>
              <p className="text-[1.2rem]">
                I possess a solid understanding of data structures and algorithms (DSA) along with proficiency in multiple backend languages and
                frameworks.
                <br/> <br/>
                Eager to apply these skills in areas such
                as back-end development and front-end development and contribute effectively to projects while continuing to learn and grow.
              </p>
            </div>

         </div>

         <div className="mt-[4rem] pb-15 ">
               <div 
                 style={{
                   height:"5rem",
                   width:"38%", 
                   float:"right",
                   backgroundColor:"hsla(160, 52%, 71%, 1)",
                   marginBottom:"1rem",
                   borderRadius:"3rem",
                   padding:"1.5rem 1rem 1.5rem 2.5rem",
                   display:"flex",
                   flexDirection:"row",
                   }}>
                    <p>Front-End </p>
                    <FaChevronRight size={25} className="mt-0.5 ml-1"/>
                    <div className="flex flex-row justify-between ml-10 w-[50%] ">
                      <FaHtml5 size={25}/> 
                      <FaCss3Alt size={25}/>
                      <FaReact size={25} />
                      <FaJsSquare size={25} />
                      <SiTailwindcss size={27} />
                      
                    </div>

                </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    
                   <div 
                      style={{
                        height:"5rem",
                        width:"50%", 
                        marginLeft:"20%",
                        backgroundColor:"hsla(160, 52%, 71%, 1)",
                        marginBottom:"1rem",
                        borderRadius:"3rem",
                        padding:"1.5rem 1.5rem 1.5rem 2.5rem",
                        display:"flex",
                        flexDirection:"row",
                      }}>
                        <p>Back-End </p>
                        <FaChevronRight size={25} className="mt-0.5 ml-3"/>
                        <div className="flex flex-row justify-between ml-10 w-[50%]">
                          <FaNodeJs size={25}/>
                          <FaPython size={25}/> 
                         < FaPhp size={35} />
                         < SiPostgresql size={30} />
                         < SiMysql  size={40} />
                         
                        </div>

                    </div>
                    <div 
                       style={{
                          height:"5rem",
                          width:"60%", 
                          marginLeft:"0",
                          backgroundColor:"hsla(160, 52%, 71%, 1)",
                          marginBottom:"1rem",
                          borderRadius:"3rem",
                          padding:"1.5rem 1.5rem 1.5rem 2.5rem",
                          display:"flex",
                          flexDirection:"row",
                        }}>
                          <p>Programming languages </p>
                          <FaChevronRight size={25} className="mt-0.5 ml-3"/>
                          <div className="flex flex-row justify-between ml-10 w-[50%]">
                            <SiJavascript size={25}/>
                            <TbBrandCpp size={25}/>
                            <FaPython size={25}/> 
                            < FaPhp size={35} />
                            < FaJava size={30} />                         
                          </div>
                     </div>

          </div>
          <div className="mx-[15%] my-32   bg-[#dce9e187] rounded-[1.5rem] p-[5rem]">
            <h1 className='text-[2.5rem]  font-bold text-left mb-5'>
              {`Let's collaborate and make the magic happen!`}
            </h1>
            <p>
              {`But before that, I'm Excited to share my coding journey in Delhi! 🖥️ Weather might be unpredictable, 
              but my passion for learning to code is constant.`} <br />
              {`As a student passionate about Computer Science, I'm on a dynamic journey toward becoming a proficient software
              developer and delving into the fascinating field of
              data science. `} <br /> <br /> {`Join me in this tech adventure! #LearningJourney
              Apart from my learning journey, I also love capturing nature and bountiful moments with my camera. 
              I enjoy listening to music and exploring the world with my naked eyes, and playing cricket.`}
            </p>
          </div>
          <div className="flex flex-row  my-32 ml-4 ">
            <div className="w-[55%]  rounded-[1rem] border-0  mr-32 overflow-hidden relative photo-container ">
                  <img src="\assets\river.jpg" alt="nature-img" style={{height:"500px", width:"100%"}}/>
                  <div className="photo-text">
                  <MdOutlineMyLocation style={{paddingTop:'7px'}} /> Bihar, India
                  </div>

            </div>
                 
            <div className="w-[30%] rounded-[1rem] border-0  overflow-hidden relative photo-container  "> 
                <img src="\assets\nature.jpg" alt="sunset-img" style={{height:"500px", width:"100%"}} />
                <div className="photo-text">
                <MdOutlineMyLocation style={{paddingTop:'7px'}} /> Delhi, India
                </div>

            </div>
          </div>


      </div>
    </main>
  )
}

export default About 