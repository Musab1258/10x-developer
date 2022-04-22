import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';


const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Nav />
      <Calendar className="m-auto" onChange={onChange} value={value} />
    </div>
  );
}

export default Schedule;