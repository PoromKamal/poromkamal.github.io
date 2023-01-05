import Container from '../components/container'
import Image from 'next/image'
import Subtitle from '../components/subtitle'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';

function HomePage() {
  const typed = useRef(null);
  const el = useRef(null);
  useEffect(()=>{
    const options = {
      strings: [
        "how's it going?",
        "i\'m Porom",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <>
      <Container>
        <div className="space-y-6">
          <br/>
          <br/>
          <h1 className="text-6xl font-semibold pt-48">
            Hey <div className='inline text-5xl'>👋</div>,
            <div className="type-wrap">
              <span className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent" style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </h1>
          <br/>
          <div className='text-2xl pb-60'>
            I'm a 20 year-old Software Engineer based in <div className='inline font-semibold'>Toronto.</div>
            <br/>
            I enjoy <div className='inline font-semibold'>Full-Stack</div> development (mostly the <div className='inline font-semibold'>Backend</div> lol).
            <br/>
            I do other stuff too, you can learn about it here :)
          </div>
          <div className='py-12'/>
          <div id="about-section">
            <EducationSection/>
          </div>
          <div id = "experience-section">
            <ExperienceSection/>
          </div>
          <div id = "project-section w-96" className='py-12'>
            <ProjectSection/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
