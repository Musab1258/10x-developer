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
      <body className='m-5'>
        <div className='m-16 p-5 text-xl border-2 rounded shadow-lg'>
          <p>Learning software development can be hard at the beginning</p>
          <img src={HardTime} />
        </div>
        <div className='m-16 p-5 text-xl border-2 rounded shadow-lg'>
          <p>There are a lot of tools and technologies to learn</p>
          <img src={ProgrammingTools} />
        </div>
        <div className='m-16 p-5 text-xl border-2 rounded shadow-lg'>
          <p>And sometimes, you need an experienced Developer to guide you.</p>
          <img src={MentorGuide} />
        </div>
        <div className='m-16 p-5 text-xl border-2 rounded shadow-lg'>
          <p className='my-5'>I am an experienced Frontend Developer and I have got friends in other areas of software development that can help out.</p>
          <p className='my-5'>All what you need to do is to schedule an appointment. And don't worry it is totally free.</p>
          <button className='border border-black my-5'>Schedule</button>
        </div>
        
      </body>
    </div>
  );
}

export default App;
