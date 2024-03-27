
import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";


const Contact = () => {

  return (
    <div className="flex flex-col gap-6 mb-20 w-full items-center">
      <h2 className="text-5xl font-bold text-center text-[#242d49]">
        Let's Discuss Your <span className="text-[#004aad]" style={{color: `#3464eb`}}>Project</span>
      </h2>
      <p className="text-[#788097] w-[90%] md:w-[44%] items-center text-center">
        Let's make something new, different and more meaningful or make thing
        more visual and conceptual.
      </p>
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row justify-between w-full">
        <div className="w-full px-4 flex flex-col justify-center items-center gap-4">
          <div className="bg-[#e1e8ef] w-[19em] rounded-2xl self-center flex">
            <div className="my-[0.7rem] ml-[0.7rem] p-4 rounded-2xl text-white text-xl self-center bg-[#004aad]" style={{background: `#3464eb`}}>
              <BiPhoneCall />
            </div>
            <div className="my-[0.7rem] ml-[0.7rem] self-center">
              <p className="font-semibold">Call Me</p>
              <p>+91 97709 94821</p>
            </div>
          </div>
          <div className="bg-[#e1e8ef] w-[19rem] rounded-2xl self-center flex">
            <div className="my-[0.7rem] ml-[0.7rem] p-4 rounded-2xl text-white text-xl self-center bg-[#004aad]" style={{background: `#3464eb`}}>
              <AiOutlineMail />
            </div>
            <div className="my-[0.7rem] ml-[0.7rem] self-center">
              <p className="font-semibold">Email</p>
              <p>hariomchouhan430@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#e1e8ef] w-[19rem] rounded-2xl self-center flex">
            <div className="my-[0.7rem] ml-[0.7rem] p-4 rounded-2xl text-white text-xl self-center bg-[#004aad]" style={{background: `#3464eb`}}>
              <CiLocationOn />
            </div>
            <div className="my-[0.7rem] ml-[0.7rem] self-center">
              <p className="font-semibold">Address</p>
              <p>Indore, MP, India</p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 flex flex-col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
