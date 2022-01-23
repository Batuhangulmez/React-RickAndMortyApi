import React from 'react';
import '../../App.css';

const Character = (props) => {
    let { gender, name, species, status, image } = props.data
    return <div className='Character'>
        <div>
            <img src={image} />
        </div>
        <div>
            {name}
            {status}
        </div>
        <div>
            {gender}
            {species}
        </div>
    </div>;
};

export default Character;
