import "./footer.css";


import { ImSpotify } from "react-icons/im";
import { FaRegCopyright } from "react-icons/fa6";


const link={
  github:"https://github.com/Gitrupesh20",
  linkedIn:"https://in.linkedin.com/in/rupesh-sharma-a22905211"
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="fholder" >
        
          <div className="box1">
             <ImSpotify size={55} />

             <span style={{marginLeft:"0.7rem", marginTop:'0.1rem'}}>
             <p>Playing</p>
             <p style={{fontWeight:"700", fontSize:"1rem", color:'var(--color)'}}>eespiderman eespiderman by unknown...</p>
             </span>
          </div>
          

          
        
          <div className="box2">
           
           <ul>
            <span><li style={{fontWeight:'700', color:'var(--color)'}}>Find Me On..</li></span>
            <li><a href={link.github} target="_blank"  rel="noreferrer">Github</a></li>
            <li><a href={link.linkedIn} target="_blank"  rel="noreferrer">LinkedIn</a></li>
            <li><a href="#cv" target="_blank"  rel="noreferrer">CV</a></li>
        
           </ul>
           
          </div>
         
          
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',
        letterSpacing:'1px', marginTop:'4rem'}}><FaRegCopyright size={16}/>2023 RupeshSharma
      </div>

    </div>
  )
}

export default Footer;