
import Box from '@mui/material/Box';
import { FaGithubAlt } from "react-icons/fa";
import "./project.css"

const Project = () => {

  const g = `radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
  radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 10px) 100% 0%/8px 8px no-repeat,
  radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
  radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 16px) no-repeat,
  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 10px) no-repeat,
  linear-gradient(189deg, #eea8a7 10%, #878c5b 25%, #6a1cb2 50%, rgba(146,164,185,1) 77%, #795142 100%, #89b7cf 100%) 19% -3rem;
border-radius: 8px;`

  return (<>
    <div id="work" className="project_section" >
        <h1 className='text-[4rem] text-center font-bold'>Project</h1>
      <div className="project_box" >
        <Box
          sx={{ 
              display: 'flex',
              flexDirection: 'column',
              bgcolor:"hsla(45, 17%, 95%, .8)",
              width:["100%","100%",'60%'],
              height:["350px","400px","450px"],
              paddingLeft:["1rem","2rem","5rem"],
              paddingTop:"1.5rem",
              marginTop:"4rem",
              overflow:"hidden",
              border:`2px solid green`,
              borderRadius:"15px"
            }}
          >
            <Box sx = {{
              marginBottom:["2rem","4.5rem"]
            }}>
              <h2>Title: Blod Donoer </h2>
              <p className='text-[1rem]'>it is the platform that connect blod donoer and the seekers who needs blod </p>
              <h3>ReactJS  Js {"   "}  MUI {"   "}  NodeJs </h3>
              <FaGithubAlt size={30} />            
            </Box>
            <img src="\assets\moviehub.png" alt="nature img" style={{position:"relative",borderRadius:"5px"}} />
          </Box>
          <Box
         sx={{ 
          display: 'flex',
          flexDirection: 'column',
          bgcolor:"hsla(45, 17%, 95%, .8)",
            width:["100%","100%",'35%'],
            height:["350px","400px","450px"],
            paddingLeft:["1rem","2rem","5rem"],
            paddingTop:"2rem",
            marginTop:"4rem",
            overflow:"hidden",
            border:"2px solid",
            borderColor:g,
            borderRadius:"15px"
          }}
          >
           <Box sx = {{
              marginBottom:["2rem","4.5rem"]
            }}>
              <h2>Title: Blod Donoer </h2>
              <p className='text-[1rem]'>it is the platform that connect blod donoer and the seekers who needs blod </p>
              <h3>ReactJS  Js {"   "}  MUI {"   "}  NodeJs </h3>
              <FaGithubAlt size={30} />            
            </Box>
            <img src="\assets\moviehub.png" alt="nature img" style={{position:"relative",borderRadius:"5px"}} />
            
          </Box>

      </div>
       <h2 style={{textAlign:"center", marginTop:"2rem", fontSize:"2rem"}}>In Progress...</h2>
    </div>
    </>
  )
}

export default Project