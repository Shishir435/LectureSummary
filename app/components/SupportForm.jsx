"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";



const SupportForm = () => {
  const {handleSubmit, register,reset, formState:{isValid, errors}} = useForm({
    mode: 'onChange'
  })
  const emailValidator=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 const [loading, setLoading] = useState(false);
 const formDiv="flex justify-between w-full items-center";
 const fromInput="w-[85%] border border-b-gray-50 rounded-2xl p-2 bg-black";
  const handleQuerySubmission=(data,e)=>{
    console.log(data);
    e.preventDefault();
   setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Shishir",
          from_email: data.email,
          to_email: "shishirchaurasiya435@gmail.com",
          message: data.message,
        },
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          reset()
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          reset()
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }


    
  return (
    <form onSubmit={handleSubmit(handleQuerySubmission)} className="flex flex-col p-2 gap-4 w-[50%] text-center border-white">
        <div className={`${formDiv}`}>
        <label htmlFor="name" className="">Name:</label>
        <input {...register('name',{required: true})} name="name" placeholder="You Name" type="text" id="name" className={`${fromInput}`} required autoFocus/>
        </div>
        {errors?.name?.type==='required'&& <span className="text-red-500">Name is required</span>}
        <div className={`${formDiv}`}>
        <label htmlFor="email" className="">Email: </label>
        <input {...register('email',{required: true,
        pattern: emailValidator})} name="email" placeholder="Your Email"  type="text" id="email" className={`${fromInput}`} required/>
        </div>
        {errors?.email?.type==='required'&& <span className="text-red-500">Email is required</span>}
        {errors?.email?.type==='pattern'&& <span className="text-red-500">Please enter a valid email</span>}
        <div className={`${formDiv}`}>
        <label htmlFor="message" className="">Query: </label>
        <textarea {...register('query',{required: true})} placeholder="Your Query"  name="query" id="query" className={`${fromInput}`} cols="30" rows="2" required></textarea>
        </div>
        {errors?.query?.type==='required'&& <span className="text-red-500">Query is required</span>}
        <div className=" flex justify-center w-full">
       <button  className="bg-slate-800 mt-6 rounded-2xl w-[25%] p-3 cursor-pointer hover:bg-slate-200 hover:text-black ease-in-out text-xl" disabled={!isValid} type="submit">{loading? "Sending..": "Send"}</button>
        </div>

    </form>
  )
}
export default SupportForm