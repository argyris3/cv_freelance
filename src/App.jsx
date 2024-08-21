import edu from './assets/education.svg';

const App = () => {
  return (
    <section className="w-[80%]  mx-auto my-10 h-screen flex ">
      <div className="w-[35%] bg-blue-600 flex flex-col gap-3 h-screen">
        <div className="mt-4 flex flex-col ">
          <h3 className="text-white text-2xl pl-[105px] font-semibold">Argyrios</h3>
          <h3 className="text-white text-2xl pl-[105px] font-semibold">Papoulidis</h3>
          <p className="pt-4 text-xl pl-[105px] text-black ">Freelance Web</p>
          <p className="text-xl pl-[105px] text-black">Developer</p>
        </div>
        <div className="mt-7">
          <h2 className="bg-blue-900 text-xl pl-[105px] text-white py-2">Contact Information</h2>
          <p className="pt-2 text-white pl-[105px]">Ptolemaida,Greece</p>
          <p className="pt-2 text-white pl-[105px]">(+30)6977282382</p>
          <p className="pt-2 text-white pl-[105px]">bigol3@hotmail.com</p>
        </div>
        <div className="mt-9 mb-3">
          <h2 className="bg-blue-900 text-xl pl-[105px] text-white py-2 mb-3">Skills</h2>
          <ul className="list-disc pl-[115px] text-white">
            <li>Web Design</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>NextJs</li>
            <li>NodeJs</li>
            <li>MongoDb</li>
          </ul>
        </div>
      </div>
      <div className="w-[45%] px-8 py-6 bg-white">
        <h3 className="mb-6 ms-3 text-2xl font-semibold text-black ">Employment History</h3>

        <ol className="border-s-2 border-black">
          <li>
            <div className="flex flex-start">
              <div className="-ms-[13px] flex h-[25px] w-[35px] items-center justify-center rounded-full bg-slate-300 text-slate-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ms-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md text-black shadow-black/5">
                <div className="mb-4 flex gap-4">
                  <a
                    href="#"
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-semibold"
                  >
                    Front-End Wed Developer
                  </a>
                  <a
                    href="#"
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                  >
                    2021-2023
                  </a>
                </div>
                <div className="flex gap-6 items-center">
                  <p className="text-black text-sm font-light">Doderlein Bacilus Homebrewery </p>
                  <li className="list-disc  text-sm font-light">Ptolemaida GR</li>
                </div>

                <ul className="list-disc text-sm flex flex-col gap-2 pt-2 ">
                  <li> Designed company website including graphical user interface design and coding.</li>

                  <li>Provided marketing support, developed web pages </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-start">
              <div className="-ms-[13px] flex h-[25px] w-[35px] items-center justify-center rounded-full bg-slate-300 text-slate-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ms-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md text-black shadow-black/5">
                <div className="mb-4 flex gap-4">
                  <a
                    href="#"
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-semibold"
                  >
                    Freelance Wed Developer
                  </a>
                  <a
                    href="#"
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                  >
                    2020-Present
                  </a>
                </div>
                {/* <div className="flex gap-6 items-center">
                  <p className="text-black text-sm font-light">Doderlein Bacilus Homebrewery </p>
                  <li className="list-disc  text-sm font-light">Ptolemaida GR</li>
                </div> */}

                <ul className="list-disc text-sm flex flex-col gap-2 pt-2 ">
              <li>Developed web pages to client specifications</li>
              <li>Experienced in MERN stack web applications</li>
              <li>Developed seamless Front-end experiences with HTML, CSS, JavaScript and ReactJS.</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-start'>
              <div className='-ms-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full '>
            <img src={edu} alt=""  className='w-7 h-7'/>

              </div>
              <div className="mb-10 ms-6 block w-full rounded-lg bg-neutral-50 p-6 shadow-md text-black shadow-black/5">
                <div className="mb-4 flex flex-col gap-2 ">
                <a
                    href="#"
                    className="text-lg text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-semibold"
                  >
                     Education
                  </a>
                  <li
                    
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-light list-disc"
                  >
                    Certificate of Computer Science
                  </li>
                  <li
                    
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-light list-disc"
                  >
                   <a
                    href="#"
                    className="text-sm text-black transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 font-light"
                  >
                 FullStack Academy Of Code
                  </a>
                  </li>
                 
                </div>
               

              
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};
export default App;
