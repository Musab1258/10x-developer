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
        <form className='flex  flex-col justify-items-center items-center' ref={form} onSubmit={sendEmail} >
            <label className="">
                <p>Name</p>
                <input name='user_name' className='border w-auto' placeholder="Enter your name here" />
            </label>
            <label>
                <p>Email Address</p>
                <input name='user_email' className='border w-auto' placeholder="Enter your email address here" />
            </label>
            <label>
                <p>What do you want us to discuss</p>
                <textarea name='message' className='border w-auto'/>
            </label>
            <button type='submit' className='border w-auto'>Send</button>
        </form>
    )
}

export default Form;