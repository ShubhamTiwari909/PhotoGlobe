import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallary from './pages/Galary'
import Error from './pages/Error'
import Welcome from './pages/Welcome'
import PhotoGalary from './pages/PhotoGalary'


function Home() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Welcome />} />
                <Route exact path='/gallary' element={<Gallary />} />
                <Route exact path='/nature' element={<PhotoGalary query="nature" />} />
                <Route exact path='/space' element={<PhotoGalary query="space" />} />
                <Route exact path='/india' element={<PhotoGalary query="india" />} />
                <Route exact path='/wallpaper' element={<PhotoGalary query="wallpaper" />} />
                <Route exact path='*' element={<Error />} />
            </Routes>
           
        </div>


    );
}


export default Home;
