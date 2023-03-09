import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contact = () => {
  
  const form = useRef();
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  
  const handleBlurName=(blurNameValue)=>{
    setName(blurNameValue)
   
    }
  const handleBlurEmail=(blurEmailValue)=>{
   setEmail(blurEmailValue)
    }
  const handleBlurMessage=(blurMessageValue)=>{
   setMessage(blurMessageValue)
    }

  const sendEmail = (e) => {
    e.preventDefault();
/*     const nameText = handleName.current.value;
    const emailText = handleName.current.value;
    const messageText = handleName.current.value; */
   /*  const nameText = e.target.user_name.value;
    const emailText = e.target.user_email.value;
    const messageText = e.target.message.value;
    setName(nameText)
    setEmail(emailText)
    setMessage(messageText)
    console.log(emailText); */

if(name && email && message){
  toast.success('Message Sent', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

        emailjs.sendForm(
            "service_15eo1tr",
            "template_b26inr5",
            form.current,
            "mLES7J6SJ_-PDXTCT"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
            },
            (error) => {
              console.log(error.text);
            }
          );

}
else{
  toast.error('Fill all the field properly', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
  };
  return (
    <div id="contact" className="custom-bg  p-5 md:p-20">
      <div className="text-center md:text-left">
      <p className="text-4xl font-semibold my-5 text-green-400  border-b-4  pb-3 md:border-b-0 md:pb-0 text-center md:border-l-8 md:pl-5 border-green-400 inline-block">
        Contact
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20">
        <div>
          <img
            className=" w-10/12 md:w-full mx-auto rounded-lg custom-bg custom-shadow p-5"
            src={"https://i.ibb.co/Tmp0c10/contact.jpg"}
            alt="Contact"
          />
        </div>
        <div className=" flex items-center justify-center">
          <form className=" w-10/12 mx-auto" ref={form} onSubmit={sendEmail} autoComplete="new-password">
            <input
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-green-400 font-semibold"
              type="text"
              name="user_name"
              placeholder="Your Name"
              autoComplete="new-password"
              onBlur={(event)=>handleBlurName(event.target.value)}
            />
            <br />
            <br />
            <input
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-white"
              type="email"
              name="user_email"
              placeholder="Your Email"
              autoComplete="new-password"
              onBlur={(event)=>handleBlurEmail(event.target.value)}
            />
            <br />
            <br />
            <textarea
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-white"
              name="message"
              rows={5}
              placeholder="Write Your Message"
              onBlur={(event)=>handleBlurMessage(event.target.value)}
              autoComplete="new-password"
            />
            <br />
            <div className=" text-right mt-4">
                
              <input
                className= " cursor-pointer text-black text-base font-semibold bg-green-500 px-8 py-2 rounded-lg bottom-0 right-0"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Contact;
