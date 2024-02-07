import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_w8xa9nf", "template_d7z5b85", form.current, 'jtTggWpxNn5hEtxjT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-max bg-[#0a192f] flex justify-center items-center p-4'>
      <form ref={form} onSubmit={sendEmail}  className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-5'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>Submit the form below </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="user_name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="user_email" />
        <textarea className='bg-[#ccd6f6] p-2' name="message"rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;


