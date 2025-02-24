import { initFlowbite } from "flowbite";
import React, { useEffect, useState } from "react";

const Contact = () => {

  useEffect(()=>{
    initFlowbite();
  },[]);

  const [name, setName] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [software1, setSoftware1] = useState("");
  const [software2, setSoftware2] = useState("");
  const [software3, setSoftware3] = useState("");
  const [software4, setSoftware4] = useState("");
  const [software5, setSoftware5] = useState("");

  const [Marketing1, setMarketing1] = useState("");
  const [Marketing2, setMarketing2] = useState("");
  const [Marketing3, setMarketing3] = useState("");
  const [Marketing4, setMarketing4] = useState("");
  const [Marketing5, setMarketing5] = useState("");
  const [Marketing6, setMarketing6] = useState("");
  const [Marketing7, setMarketing7] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "Software -",
      [software1],
      [software2],
      [software3],
      [software4],
      [software5]
    );

    console.log(
      "Marketing -",
      [Marketing1],
      [Marketing2],
      [Marketing3],
      [Marketing4],
      [Marketing5],
      [Marketing6],
      [Marketing7]
    );

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
            <div className="bg-dark dark:bg-light mb-8 w-1/2 md:w-10/12 sm:w-10/12 lg:w-10/12 xl:w-8/12 p-6 rounded-lg shadow-lg">
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

                <div className="flex flex-row sm:flex-col">
                  {/* Software */}

                  <div className="my-5 mx-auto ">
                    <button
                      id="dropdownSearchButton"
                      data-dropdown-toggle="dropdownSearch"
                      className="inline-flex items-center sm:px-20 md:px-20 lg:px-24 xl:px-28 px-28 py-3 text-sm font-medium text-center text-white dark:text-dark bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Software{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* <!-- Dropdown menu --/> */}
                    <div
                      id="dropdownSearch"
                      className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-dark"
                    >
                      <ul
                        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownSearchButton"
                      >
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Web application"
                              onChange={(e) => {
                                setSoftware1(e.target.value);
                              }}
                              id="checkbox-item-11"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-11"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Web application
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Desktop application"
                              onChange={(e) => {
                                setSoftware2(e.target.value);
                              }}
                              id="checkbox-item-12"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-12"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Desktop application
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="UI/UX Design"
                              onChange={(e) => {
                                setSoftware3(e.target.value);
                              }}
                              id="checkbox-item-13"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-13"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              UI/UX Design
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Mobile application"
                              onChange={(e) => {
                                setSoftware4(e.target.value);
                              }}
                              id="checkbox-item-14"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-14"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Mobile application
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Databases"
                              onChange={(e) => {
                                setSoftware5(e.target.value);
                              }}
                              id="checkbox-item-15"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-15"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Databases
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Marketing */}

                  <div className="my-5 mx-auto ">
                    <button
                      id="dropdownSearchButton1"
                      data-dropdown-toggle="dropdownSearch1"
                      className="inline-flex items-center sm:px-20 md:px-20 lg:px-24 xl:px-28 px-28 py-3 text-sm font-medium text-center text-white dark:text-dark bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Marketing{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* <!-- Dropdown menu --/> */}
                    <div
                      id="dropdownSearch1"
                      className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-dark"
                    >
                      <ul
                        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownSearchButton1"
                      >
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Marketing strategy development"
                              onChange={(e) => {
                                setMarketing1(e.target.value);
                              }}
                              id="checkbox-item-18"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-18"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Marketing strategy development
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Digital marketing strategy development"
                              onChange={(e) => {
                                setMarketing2(e.target.value);
                              }}
                              id="checkbox-item-19"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-19"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Digital marketing strategy development
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Content marketing strategy"
                              onChange={(e) => {
                                setMarketing3(e.target.value);
                              }}
                              id="checkbox-item-20"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-20"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Content marketing strategy
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="SEO"
                              onChange={(e) => {
                                setMarketing4(e.target.value);
                              }}
                              id="checkbox-item-21"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-21"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              SEO
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Facebook ads"
                              onChange={(e) => {
                                setMarketing5(e.target.value);
                              }}
                              id="checkbox-item-22"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-22"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Facebook ads
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Google ads"
                              onChange={(e) => {
                                setMarketing6(e.target.value);
                              }}
                              id="checkbox-item-23"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-23"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Google ads
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              value="Social media management"
                              onChange={(e) => {
                                setMarketing7(e.target.value);
                              }}
                              id="checkbox-item-24"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="checkbox-item-24"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Social media management
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

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
