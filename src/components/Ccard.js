import React from 'react'
import {Link} from 'react-router-dom';

export const Ccard = ({character}) => {

    return (
        <div key={character.id}>
            <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={character.image} className="card-img" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <Link to={`/character/${character.id}`}>
                                Más...
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
