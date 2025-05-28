import { useContext } from "react";
import { TokyoContext } from "../Context";

const Sidebar = () => {
  const { navChange, nav, menus, darkMode, toggleDarkMode } = useContext(TokyoContext);
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <div className="logo" data-type="image">
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <a href="#">
            <img
              className="max-w-[150px]"
              src="assets/img/logo/dark.png"
              alt="image"
            />
            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">
              TOKYO
            </h3>
          </a>
        </div>
        <div className="menu px-[0px] py-[50px] w-full float-left">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu) => (
              <li
                className={`m-0 w-full float-left ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                  href={`#${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Dark Mode Toggle */}
        <div className="w-full float-left mb-[30px] flex justify-start">
          <button 
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full transition-all duration-300"
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
        </div>
        
        <div className="copyright w-full float-left">
          <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
            © {new Date().getFullYear()} Tokyo
            <br />
            Created by{" "}
            <a
              className="text-[#787878] font-medium transition-all duration-300 hover:text-black"
              href="https://themeforest.net/user/Codeefly"
              target="_blank"
            >
              Codeefly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
