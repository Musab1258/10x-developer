import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Form = ( setIsOpen ) => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
        ).then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    return (
      <div className='bg-light-gray-orange w-full'>
        <form className='shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4' ref={form} onSubmit={sendEmail} >
          <div className="mb-4">
            <label className='text-dark-gray'>
                Name
            </label>
            <input name='user_name' type="text" className='bg-white text-dark-gray shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Enter your name here" />
          </div>
          <div className="mb-4">
            <label className='text-dark-gray'>
                Email Address
            </label>
            <input name='user_email' type="email" className='bg-white text-dark-gray shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Enter your email address here" />
          </div>
          <div className="mb-4">
            <label className='text-dark-gray'>
              What do you want us to discuss
            </label>
            <textarea name='message' className='bg-white text-dark-gray shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
          </div>
          <div className='flex items-center justify-evenly'>
            <button type='submit' className='bg-light-orange text-white font-bold py-2 w-20 rounded focus:outline-none focus:shadow-outline'>Send</button>
            <button onClick={() => setIsOpen(false)} className='bg-light-orange text-white font-bold py-2 w-20 rounded focus:outline-none focus:shadow-outline'>Cancel</button>
          </div>
        </form>
      </div>
    )
}

export default Form;
