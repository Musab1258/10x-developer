import './App.css';
import Nav from './components/Nav';
import HardTime from './images/hard-time.png'
import ProgrammingTools from './images/programming-tools.png'
import MentorGuide from './images/mentor-guide.png'


function App() {
  return (
    <div className="bg-light-grey-orange">
      <header>
        <Nav />
      </header>
      <body className='bg-light-grey-orange m-2 grid md:mt-16 md:mx-12 justify-items-center text-center'>
        <div className='bg-dark-cyan my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl border-2 rounded shadow-lg'>
          <img src={HardTime} alt="A woman having a hard time in front of her laptop" />
          <p className='text-white grid self-center'>Learning software development can be hard at the beginning</p>
        </div>
        <div className='bg-dark-cyan my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl border-2 rounded shadow-lg'>
          <img className='w-full' src={ProgrammingTools} alt="logos of different programming languages and tools"/>
          <p className='text-white grid self-center'>There are a lot of tools and technologies to learn</p>
        </div>
        <div className='bg-dark-cyan my-16 mx-5 p-5 grid md:grid-cols-2 gap-4 text-xl border-2 rounded shadow-lg'>
          <img src={MentorGuide} alt="a senior software developer guiding her junior"/>
          <p className='text-white grid self-center'>And sometimes, you need an experienced Developer to guide you.</p>
        </div>
        
        <div className='grid md:grid-cols-2'>
        <div className='bg-dark-cyan my-16 mx-5 p-5 grid text-xl border-2 rounded shadow-lg'>
          <p className='text-white my-5'>I am an experienced Frontend Developer and I have got friends in other areas of software development that can help out.</p>
        </div>
        <div className='bg-dark-cyan my-16 mx-5 p-5 grid text-xl border-2 rounded shadow-lg'>
          <p className='text-white my-5'>All what you need to do is to schedule an appointment. And don't worry it is totally free.</p>
          <button className='border border-black py-2 px-2 m-auto rounded shadow-lg bg-dark-cyan text-white'>Schedule</button>
        </div>
        </div>
        
      </body>
    </div>
  );
}

export default App;
