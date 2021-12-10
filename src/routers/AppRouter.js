import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Ccard } from '../components/Ccard';

import { Navbar } from '../components/Navbar';
import { SearchCharacter } from '../components/SearchCharacter';


export const AppRouter = () => {
    const [character, setCharacter] = useState([]);

    const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json"

    useEffect(() => {
    cargarDatos();
}, []);

    const cargarDatos = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setCharacter(data.results);
    
};
return (
        <Router>
                <Navbar />
                <Routes> 
                    <Route path="/" element={<Ccard character={character}/>}/>
                    <Route path="/search" element={<SearchCharacter character={character}/>} />
                </Routes>
        </Router>
    )
}



