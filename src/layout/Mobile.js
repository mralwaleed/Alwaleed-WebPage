import { Fragment, useContext, useState } from "react";
import { TokyoContext } from "../Context";

const Mobile = () => {
  const [toggle, setToggle] = useState(false);
  const { navChange, nav, menus, darkMode, toggleDarkMode } = useContext(TokyoContext);
  return (
    <Fragment>
      <div className="tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            {" "}
            {/* You can use image or text as logo. data-type values are "image" and "text" */}
            <a href="#">
              <img
                className="max-w-[100px] max-h-[40px]"
                src="assets/img/logo/dark.png"
                alt="image"
              />
              <h3 className="font-black font-poppins text-[25px] tracking-[4px]">
                ALWALEED
              </h3>
            </a>
          </div>
          <div className="trigger relative top-[5px]">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box w-[30px]">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]">
          <ul className="transition_link list-none">
            {menus.map((menu) => (
              <li
                className={`active mb-[7px] ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="text-black font-montserrat"
                  href={`#${menu.href}`}
                  onClick={() => {
                    navChange(menu.href);
                    setToggle(!toggle);
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
            
            {/* Dark Mode Toggle in Mobile Menu */}
            <li className="mb-[15px] mt-[20px] text-right">
              <button
                onClick={() => {
                  toggleDarkMode();
                  setToggle(!toggle);
                }}
                className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full transition-all duration-300"
                style={{ 
                  cursor: 'pointer', 
                  border: 'none',
                  backgroundColor: darkMode ? '#ffffff22' : '#00000011',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                }}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Mobile;
