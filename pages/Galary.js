import React, { useState } from 'react';
import { createApi } from "unsplash-js";
import { FcCameraIdentification } from 'react-icons/fc';
import { AiOutlineCloudDownload } from 'react-icons/ai'
import './Galary.css'
import Header from './Header';
import Footer from './Footer';

function Galary() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const unsplash = new createApi({
        accessKey: "aKLzOTrbEanvLYKHHsqnEh4MlIn4vSraZSwMciM3db8",
    });



    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search.getPhotos({
            query: query,
            page: 3,
            perPage: 2000
        }).then((result) => {
            if (result.type === 'success') {
                const firstPhoto = result.response.results;
                setPics(firstPhoto);
                console.log(result);
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const buttonStyling = `mr-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-700 to-indigo-800 
    text-gray-100 rounded-sm ring-2 ring-blue-200 px-10 py-2 
    hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 inline`;

    const downloadButton = `font-semibold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 
    text-gray-100 rounded-sm ring-4 ring-purple-400 px-5 py-2
    hover:text-white hover:ring-slate-500 w-18 my-10 self-center text-center 
    transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-700 hover:to-blue-900 `

  
    return (
        <div>
            <Header />
            {/* <div className='flex justify-around lg:flex-row md:flex-row py-5 navbar' style={welcomeContainer}>
                <div className='flex lg:flex-row md:flex-row'>
                    <h1 className='text-center font-sans font-semibold my-4 text-slate-100 lg:text-5xl md:text-4xl headingLogo'>Photo Globe</h1>
                    <img className='lg:w-24 md:w-24 sm:w-20 animate-pulse logo' src={Logo}  alt='Logo' />
                </div>
                <button className={homeButton} onClick={() => {
                    navigate("/")
                }}>
                    Home
                </button>
            </div> */}
            <div>
                <form className='h-48 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center' onSubmit={searchPhotos}>
                    <div className='lg:justify-self-end md:justify-self-end sm:justify-self-center mx-5'>
                        <FcCameraIdentification size='2rem' />
                    </div>

                    <input
                        type='text'
                        name='query'
                        className='ring-4 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out'
                        placeholder='search...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />

                    <div className='lg:justify-self-start md:justify-self-start sm:justify-self-center'>
                        <button
                            type='submit'
                            className={buttonStyling}>
                            Search
                        </button>
                    </div>
                </form>
                <div className='h-48 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-16 my-10 mx-10'>
                    {pics.map(item =>
                        <div key={item.id} className='place-self-end pt-5 my-8 flex flex-col'>
                            <img
                                alt={item.alt_description}
                                src={item.urls.full}
                                className='ring-8 ring-slate-700 rounded-lg hover:animate-bounce self-center'
                            />
                            <a href={item.links.html} className={downloadButton} rel='noreferrer' target='_blank'>
                                <AiOutlineCloudDownload color='white' size='2rem' />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Galary;
