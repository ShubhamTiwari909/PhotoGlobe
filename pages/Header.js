import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './images/Logo.png'
import './Galary.css'

function Header() {
    
    let navigate = useNavigate();

    const homeButton = `mr-2 font-semibold bg-gradient-to-r from-red-500 via-red-700 to-red-900 
    text-gray-100 rounded-sm ring-2 ring-blue-200 px-10 py-2
    hover:bg-white hover:text-white hover:ring-slate-300 mx-8 inline self-center`


    const welcomeContainer = {
        background: "linear-gradient(to right, #41295a, #2f0743)"
    }
    return (
        <div className='flex justify-around lg:flex-row md:flex-row py-5 navbar' style={welcomeContainer}>
            <div className='flex lg:flex-row md:flex-row'>
                <h1 className='text-center font-sans font-semibold my-4 text-slate-100 lg:text-5xl md:text-4xl headingLogo'>Photo Globe</h1>
                <img className='lg:w-24 md:w-24 sm:w-20 animate-pulse logo' src={Logo} alt='Logo' />
            </div>
            <button className={homeButton} onClick={() => {
                navigate("/")
            }}>
                Home
            </button>
        </div>
    );
}

export default Header;
