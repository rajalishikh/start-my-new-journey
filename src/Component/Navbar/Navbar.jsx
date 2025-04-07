import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const[theme,setTheme]=useState("light")
    const handleTheme=(e)=>{
        if(e.target.checked){
            setTheme("synthwave")
        }
        else{
            setTheme("Light")
        }
        
    }
    useEffect(()=>{
        localStorage.setItem("newTheme",theme)
        const newItem=localStorage.getItem("newTheme")
        document.querySelector('html').setAttribute("data-theme",newItem)
    },[theme])

    console.log(theme)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg fixed px-4 z-10">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end gap-3">
    <a className="btn">Home</a>
    <a className="btn">Blogs</a>
    <a className="btn">BookMarks</a>
    <label 
    onClick={handleTheme}
    
    className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
    </label>
  </div>
</div>
        </div>
    );
};

export default Navbar;