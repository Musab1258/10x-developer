import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Form = () => {

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
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4' ref={form} onSubmit={sendEmail} >
          <div className="mb-4">
            <label className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                Name
            </label>
            <input name='user_name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Enter your name here" />
          </div>
          <div className="mb-4">
            <label>
                Email Address
            </label>
            <input name='user_email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Enter your email address here" />
          </div>
          <div className="mb-4">
            <label>
              What do you want us to discuss
            </label>
            <textarea name='message' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
          </div>
          <div className='flex items-center justify-between'>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Send</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Cancel</button>
          </div>
        </form>
      </div>
    )
}

export default Form;
