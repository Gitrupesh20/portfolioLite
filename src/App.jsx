
import { /* Route, Routes, */ useLocation } from 'react-router-dom';
import { Navbar, Header, Project, /* Game, */ About, Footer } from './component';
import { useEffect } from 'react';
import "./App.css"
function App() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.pathname.replace('/', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className='body'>
      <Navbar />
      <Header />

{/* <svg width="77" height="306" style={{display:"blockj",margin:"auto", marginTop:"2rem"}} viewBox="0 0 77 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 6H72V35C72 38.866 68.866 42 65 42H12C8.13401 42 5 38.866 5 35V6Z" fill="#706D6D" fill-opacity="0.89"/>
<path d="M12 1C12 0.447715 12.4477 0 13 0H64C64.5523 0 65 0.447715 65 1V6H12V1Z" fill="#706D6D" fill-opacity="0.89"/>
<path d="M36.8082 42C47.164 273.045 -14.813 -55.384 36.8082 271" stroke="#0A4B42" stroke-opacity="0.81" stroke-width="13"/>
<path d="M77 296.586L1.56994 297.481L0.347494 272.886C0.155577 269.025 3.13378 265.858 6.99951 265.812L68.4305 265.083C72.2963 265.037 75.5856 268.13 75.7775 271.991L77 296.586Z" fill="#5F5A5A"/>
<path d="M70.9503 303.591C70.9778 304.143 70.5523 304.596 70.0001 304.602L11.0458 305.301C10.4935 305.308 10.0236 304.866 9.99619 304.315L9.607 296.484L70.5612 295.761L70.9503 303.591Z" fill="#5F5A5A"/>
</svg>
 */}


      <Project/>
      <About />
     {/*  <Footer /> */}
{/*       <Routes>
        
        <Route path='/Work' element={<Project />} />
       // <Route path='/about' element={<About />} /> 
        <Route path='/game' element={<Game />} />
        <Route path='/resume' element={<Project />} />
      </Routes> */}

    </main>
  );
}

export default App;
