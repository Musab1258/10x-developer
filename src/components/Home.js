import { useRef, useEffect} from 'react';
import Nav from './Nav';
import HardTime from '../images/hard-time.png';
import ProgrammingTools from '../images/programming-tools.png';
import MentorGuide from '../images/mentor-guide.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.from( 
      element.querySelector('#first-div'),
      {
        opacity: 0,
        stagger: 0.2,
        delay: 1,
        duration: 1,
        scale: 0,
        ease: "bounce",
      })
  }, [])
  useEffect(() => {
    const element = ref.current;
    gsap.from( 
      element.querySelector('#second-div'),
      {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scale: 0,
        ease: "bounce",
        scrollTrigger: {
          trigger: element.querySelector('#second-div'),
          scrub: true,
        },
    })
  }, [])
  useEffect(() => {
    const element = ref.current;
    gsap.from( 
      element.querySelector('#third-div'),
      {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scale: 0,
        ease: "bounce",
        scrollTrigger: {
          trigger: element.querySelector('#third-div'),
          scrub: true,
        },
    })
  }, [])
  useEffect(() => {
    const element = ref.current;
    gsap.from( 
      element.querySelector('#fourth-div'),
      {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scale: 0,
        ease: "bounce",
        scrollTrigger: {
          trigger: element.querySelector('#fourth-div'),
          scrub: true,
        },
    })
  }, [])
  
  return (
    <div ref={ref} className='bg-dark-cyan'>
      <Nav />
      <div className='bg-dark-cyan m-2 grid md:mt-5 md:mx-12 justify-items-center text-center'>
        <div id="first-div" className='my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl'>
          <img src={HardTime} alt="A woman having a hard time in front of her laptop" className='md:h-[350px] w-full rounded-3xl' />
          <p className='text-white grid self-center'>Learning software development can be hard at the beginning</p>
        </div>
        <div id="second-div" className='my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl'>
          <img className='w-full' src={ProgrammingTools} alt="logos of different programming languages and tools"/>
          <p className='text-white grid self-center'>There are a lot of tools and technologies to learn</p>
        </div>
        <div id="third-div" className='my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl'>
          <img src={MentorGuide} alt="a senior software developer guiding her junior"/>
          <p className='text-white grid self-center'>And sometimes, you need an experienced Developer to guide you.</p>
        </div>
        
        <div id="fourth-div" className='grid md:grid-cols-2'>
          <div className='my-16 mx-5 p-5 grid text-xl border-2 rounded shadow-lg'>
            <p className='text-white my-5'>I am an experienced Frontend Developer and I have got friends in other areas of software development that can help out.</p>
          </div>
          <div className='my-16 mx-5 p-5 grid text-xl border-2 rounded shadow-lg'>
            <p className='text-white my-5'>All what you need to do is to schedule an appointment. And don't worry it is totally free.</p>
            <button className='border border-black py-2 px-2 m-auto rounded shadow-lg bg-dark-cyan text-white'>Schedule</button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
