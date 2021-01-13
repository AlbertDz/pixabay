import React from 'react';
import './Imagen.css';

const Imagen = (props) => {
    const { previewURL, likes, largeImageURL, tags, views } = props.imagen;

    return(
        <div>
            <div className="card">
                <img src={previewURL} alt={tags} className="card-image" />
                <div className="card-body">
                    <div>
                        <span className="card-text"><i className="fas fa-heart"></i>{likes}</span>
                        <span className="card-text"><i className="fas fa-eye"></i>{views}</span>
                    </div>

                    <div className="card-btn">
                        <a href={largeImageURL} target="_blank" rel="noreferrer" className="btn">Ver Imagen</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Imagen;