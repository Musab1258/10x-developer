import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from './Form';
import Nav from './Nav';


const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  /*const handleDay = () => {
    alert(
        <form>
            name
            <input placeholder='name' />
        </form>
    )
  } */

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-light-gray-orange'>
      <Nav />
      <Calendar className="m-auto w-4/5" onClickDay={() => setIsOpen(true)} onChange={onChange} value={value} />
      <div></div>
      <section className=''>
        {isOpen && <Form setIsOpen={setIsOpen} />}
      </section>
    </div>
  );
}

export default Schedule;
