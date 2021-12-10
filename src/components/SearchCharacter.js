import React from 'react';
import { Ccard } from './Ccard';
import { useForm } from '../hooks/useForm';
import { useNavigate,useLocation } from 'react-router-dom';
import querystring from 'query-string';

export const SearchCharacter = ({character}) => {

    const location = useLocation();
    const {q = ''} = querystring.parse(location.search);

    const navigate = useNavigate();

    const [values, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = values;


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your starwars character"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    {/* {
                        character.map(character => (
                            <Ccard key={character.id}
                                {...character} />
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}