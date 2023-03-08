import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleName = useRef();
  const handleEmail = useRef();
  const handleMessage = useRef();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    const nameText = handleName.current.value;
    const emailText = handleName.current.value;
    const messageText = handleName.current.value;
    setName(nameText)
    setEmail(emailText)
    setMessage(messageText)
    console.log(typeof(emailText));

if(name && email && message){
    setError('Message Sent')

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
    setError('Please fill the all field properly')
}
  };
  return (
    <div className="custom-bg  p-5 md:p-20">
      <div className="text-center md:text-left">
      <p className="text-4xl font-semibold my-5 text-green-400  border-b-4  pb-3 md:border-b-0 md:pb-0 text-center md:border-l-8 md:pl-5 border-green-400 inline-block">
        Contact
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20">
        <div>
          <img
            className=" w-10/12 md:w-full mx-auto rounded-lg shadow-md shadow-green-900"
            src={"https://i.ibb.co/Tmp0c10/contact.jpg"}
            alt="Contact"
          />
        </div>
        <div className=" flex items-center justify-center">
          <form className=" w-10/12 mx-auto" ref={form} onSubmit={sendEmail}>
            <input
            ref={handleName}
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-white"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
            <br />
            <br />
            <input
                        ref={handleEmail}
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-white"
              type="email"
              name="user_email"
              placeholder="Your email"
            />
            <br />
            <br />
            <textarea
            ref={handleMessage}
              className=" outline-none w-full p-3 rounded-lg custom-bg custom-shadow text-white"
              name="message"
              rows={5}
              placeholder="Write you message"
            />
            <br />
            <div className=" text-right mt-4">
                <p className="inline-block mr-2 text-red-500">{error}</p>
              <input
                className= " cursor-pointer text-black font-semibold bg-green-400 px-4 py-2 rounded-lg bottom-0 right-0"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
