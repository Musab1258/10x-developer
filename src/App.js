import './App.css';
import Nav from './components/Nav';
import HardTime from './images/hard-time.png'
import ProgrammingTools from './images/programming-tools.png'
import MentorGuide from './images/mentor-guide.png'


function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body className='m-2 grid md:grid-cols-2 md:mt-16 md:mx-12 md:justify-items-center text-center'>
        <div className='my-16 mx-5 p-5 lg:flex text-xl border-2 rounded shadow-lg'>
          <img src={HardTime} alt="A woman having a hard time in front of her laptop" />
          <p>Learning software development can be hard at the beginning</p>
        </div>
        <div className='my-16 mx-5 p-5 lg:flex text-xl border-2 rounded shadow-lg'>
          <img className='w-full' src={ProgrammingTools} alt="logos of different programming languages and tools"/>
          <p>There are a lot of tools and technologies to learn</p>
        </div>
        <div className='my-16 mx-5 p-5 lg:flex text-xl border-2 rounded shadow-lg'>
          <img src={MentorGuide} alt="a senior software developer guiding her junior"/>
          <p>And sometimes, you need an experienced Developer to guide you.</p>
        </div>
        <div className='m-16 p-5 text-xl border-2 rounded shadow-lg'>
          <p className='my-5'>I am an experienced Frontend Developer and I have got friends in other areas of software development that can help out.</p>
          <p className='my-5'>All what you need to do is to schedule an appointment. And don't worry it is totally free.</p>
          <button className='border border-black my-5'>Schedule</button>
        </div>
        <div className='m-3 p-5 md:col-span-2 md:w-6/12 text-xl border-2 rounded shadow-lg'>
          <p className='my-5'>All what you need to do is to schedule an appointment. And don't worry it is totally free.</p>
          <button className='border border-black py-2 px-4 rounded shadow-lg'>Schedule</button>
        </div>
        
      </body>
    </div>
  );
}

export default App;
