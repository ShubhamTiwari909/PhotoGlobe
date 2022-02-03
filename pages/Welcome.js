import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeLogo from './images/WelcomeLogo1.png'
import { FcStackOfPhotos } from 'react-icons/fc'
import AllPhotosCollage from './images/AllPhotos.png'
import Footer from './Footer';
import { useSpeechSynthesis } from "react-speech-kit";//used for text-to-speech



const Welcome = () => {
    const [systemView, setsystemView] = useState(false);
    const { speak } = useSpeechSynthesis();// use for text-to-speech 

    let navigate = useNavigate();

    const system = () => {
        setsystemView(!systemView);
        navigate("/gallary");
        speak({ text: `Welcome To Photo Globe`, rate: 0.8, pitch: 1 })
    }
    const nature = () => {
        setsystemView(!systemView);
        navigate("/nature")
        speak({ text: `Welcome To Nature Gallary`, rate: 0.8, pitch: 1 })
    }
    const space = () => {
        setsystemView(!systemView);
        navigate("/space")
        speak({ text: `Welcome To Space Gallary`, rate: 0.8, pitch: 1 })
    }
    const india = () => {
        setsystemView(!systemView);
        navigate("/india")
        speak({ text: `Welcome To India Gallary`, rate: 0.8, pitch: 1 })
    }
    const wallpaper = () => {
        setsystemView(!systemView);
        navigate("/wallpaper")
        speak({ text: `Welcome To wallpaper Gallary`, rate: 0.8, pitch: 1 })
        
    }
    const openButton = `flex space-x-2 bg-slate-300 place-items-center place-self-center h-52 
    px-16 py-8 my-16 mx-auto rounded-lg ring-8 ring-red-400 text-center
    text-slate-100 lg:text-3xl md:text-5xl sm:text-3xl font-bold font-sans homeButton`;
    const openGallary = `flex space-x-2 bg-slate-300 place-items-center place-self-center h-20
    px-10 py-4 my-16 mx-auto rounded-lg ring-8 ring-blue-800 animate-bounce text-center
    text-slate-800 lg:text-3xl md:text-5xl sm:text-3xl font-bold font-sans openGallaryButton`;



    return (
        <div>
            <div style={{
                display: systemView ? "none" : "grid", height: "100vh",
                background: "url('https://www.itl.cat/pngfile/big/306-3066429_new-york-city-at-night-wallpaper-new-york.jpg')",
                backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"
            }}
                className='grid grid-cols-1 place-items-center' >
                <div className='object-cover animate-pulse'>
                    <img src={WelcomeLogo} alt='welcome page logo' height="100%" width='95%' />
                </div>
                <button className={openGallary} onClick={system}>
                    <p>Open Gallary</p>
                    <div className='lg:text-5xl md:text-4xl sm:text-2xl animate-spin'><FcStackOfPhotos /></div>
                </button>
            </div>
            <div className='pt-16 border-x-2 border-solid grid grid-cols-1 place-items-center'>
                <h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl
                text-slate-800 font-mono my-6'>All the Photos you can search and download for free</h1>
                <img src={AllPhotosCollage} alt='Collage'/>
            </div>
            <div style={{background: "linear-gradient(to right, #000000, #434343)",borderTop:"4px solid cyan"}}>
                <h1 className='text-center lg:text-5xl md:text-4xl sm:text-4xl
                text-slate-200 font-mono my-10'>Some Gallaries you can explore now</h1>
                <div className='py-10 gallaryButtons'>
                    <button style={{ background: "url('https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg?h=1483c54f&amp;itok=GdjA9GRu')" }}
                        className={openButton} onClick={nature}>
                        <p>Nature Gallary</p>
                        <div className='lg:text-5xl md:text-4xl sm:text-2xl animate-spin'><FcStackOfPhotos /></div>
                    </button>
                    <button style={{ background: "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg')" }}
                        className={openButton} onClick={space}>
                        <p>Space Gallary</p>
                        <div className='lg:text-5xl md:text-4xl sm:text-2xl animate-spin'><FcStackOfPhotos /></div>
                    </button>
                    <button style={{ background: "url('https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg')" }}
                        className={openButton} onClick={india}>
                        <p>India Gallary</p>
                        <div className='lg:text-5xl md:text-4xl sm:text-2xl animate-spin'><FcStackOfPhotos /></div>
                    </button>
                    <button style={{ background: "url('https://i.pinimg.com/originals/70/fb/a0/70fba0dfb3cad645c2595d43451a0391.png')" }}
                        className={openButton} onClick={wallpaper}>
                        <p>Wallpapers Gallary</p>
                        <div className='lg:text-5xl md:text-4xl sm:text-2xl animate-spin'><FcStackOfPhotos /></div>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Welcome;


// https://images.unsplash.com/photo-1490096772318-ea2d2348280a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80