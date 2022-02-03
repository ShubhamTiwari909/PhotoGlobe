import React, { useState,useEffect } from 'react';
import { createApi } from "unsplash-js";
import { AiOutlineCloudDownload } from 'react-icons/ai'
import Header from './Header';
import { useSpeechSynthesis } from "react-speech-kit";//used for text-to-speech



function PhotoGalary(props) {
    const [pics, setPics] = useState([]);
    const {speak} = useSpeechSynthesis();

    const unsplash = new createApi({
        accessKey: "aKLzOTrbEanvLYKHHsqnEh4MlIn4vSraZSwMciM3db8",
    });

    useEffect(() => { 
        unsplash.search.getPhotos({
            query: props.query,
            page: 1,
            perPage: 50
        }).then((result) => {
            if (result.type === 'success') {
                const firstPhoto = result.response.results;
                setPics(firstPhoto);      
            }
        }).catch((err) => {
            console.log(err)
        });
        return () => {
            setPics([]) // This worked for me
          };
    }, []);

    const downloadSpeak = () => {
        speak({ text: `Redirecting to Downloading page , Thank you`, rate: 0.8, pitch: 1 })
    }

  
    const downloadButton = `font-semibold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 
        text-gray-100 rounded-sm ring-4 ring-purple-400 px-5 py-2
        hover:text-white hover:ring-slate-500 w-18 my-10 self-center text-center 
        transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-700 hover:to-blue-900 `

    return (

        <div>
            <Header />
            <div className='h-48 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-16 my-10 mx-10'>
                {pics.map(item =>
                    <div key={item.id} className='place-self-end pt-5 my-8 flex flex-col'>
                        <img
                            alt={item.alt_description}
                            src={item.urls.full}
                            className='ring-8 ring-slate-700 rounded-lg hover:animate-bounce self-center'
                        />
                        <a onClick={downloadSpeak} href={item.links.html} className={downloadButton} rel='noreferrer' target='_blank'>
                            <AiOutlineCloudDownload color='white' size='2rem' />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PhotoGalary;
