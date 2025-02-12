
import React, { useState } from "react";

const Contact = () => {

  
  
  const [name, setName] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name :", name);
    console.log("Companyname :", companyname);
    console.log("Email :", email);
    console.log("Mobile :", mobile);
    console.log("Message :", message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" m-0 p-0 min-h-[100vh]">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-dark dark:bg-light mb-8 w-full md:w-10/12 sm:w-10/12 lg:w-10/12 xl:w-8/12 p-6 rounded-lg shadow-lg">
              <div className="mx-auto">
                <h1 className="text-center text-light dark:text-dark md:text-4xl sm:text-3xl text-5xl font-bold mt-10 mb-8">
                  Contact us
                </h1>

                <div className="my-3 mx-auto ">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    className="dark:bg-dark dark:text-light w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="my-3 mx-auto ">
                  <input
                    onChange={(e) => setCompanyname(e.target.value)}
                    id="companyname"
                    type="text"
                    className="dark:bg-dark dark:text-light w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Company name"
                  />
                </div>

                <div className="my-3 mx-auto ">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="text"
                    className=" dark:bg-dark dark:text-light w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="my-3 mx-auto ">
                  <input
                    onChange={(e) => setMobile(e.target.value)}
                    id="mobile"
                    type="mobile"
                    className="dark:bg-dark dark:text-light w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Mobile Number"
                  />
                </div>

                {/* select dropdown */}

                

                <div className="my-3 mx-auto">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="massage"
                    className="dark:bg-dark dark:text-light w-full h-36 mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Type Message..."
                  />
                </div>

                <button className="w-full p-3 mt-2 bg-primary dark:bg-primaryDark text-lg text- hover:text-dark dark:hover:text-light rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-light dark:hover:bg-dark">
                  Submit
                </button>               

              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
