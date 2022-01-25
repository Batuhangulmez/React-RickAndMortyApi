import React from 'react';
import '../../App.css';

const Character = (props) => {
    let { gender, name, species, status, image } = props.data
    return <div className='Character'>
        <div className='CharacterİMG'>
            <img src={image} />
        </div>
        <div className='characterName'>
            <div>
                {name}
            </div>
            <div>
                {status}
            </div>
        </div>
        <div className='characterGender'>
            {gender}
            {species}
        </div>
    </div>;
};

export default Character;
