import { Fragment, useEffect } from "react";

const Intro = () => {
  const handleDownloadCV = () => {
    // Create a direct download link to the file in the public folder
    const fileUrl = '/Alwaleed_CV.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Alwaleed_Albader_CV.pdf';
    link.target = '_blank';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <Fragment>

      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Alwaleed Albader</h3>
        <span>Senior Software Engineer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          I am a Senior Software Engineer and Technical Lead with expertise in PHP Laravel for domain registry services, as well as scalable payment gateway systems. Proficient in Laravel, .NET Core, C#, Angular, and system architecture, I drive development and business growth by delivering secure, high-performance solutions.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                      className="text-[#767676] transition-all duration-300 hover:text-black"
                      href="mailto:alwaleed.albader@gmail.com"
                  >
                    alwaleed.albader@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                      className="text-[#767676] transition-all duration-300 hover:text-black"
                      href="tel:+966557759911"
                  >
                    +96655775911
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  LinkedIn:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="https://www.linkedin.com/in/alwaleed-albader"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/alwaleed-albader
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  GitHub:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="https://www.github.com/mralwaleed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/mralwaleed
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>Saudi</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>Bachelor of Computer Science, King Saud University</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>Bachelor's Degree in Computer Science</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <button 
          onClick={handleDownloadCV}
          style={{ cursor: 'pointer', border: 'none' }}
        >
          <span>Download CV</span>
        </button>
      </div>
    </Fragment>
  );
};
export default Intro;
