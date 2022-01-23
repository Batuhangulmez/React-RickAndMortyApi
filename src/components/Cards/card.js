import React from 'react';
import Character from './Character';
import EpisodeLocation from './EpisodeLocation';

const card = (props) => {
    let { episode, image, location, origin, gender, name, species, status } = props.fetchData
    return <div className='row'>
        <div className='col-4'>
            <Character data={{ gender, name, species, status, image }} />
        </div>
        <div className='col-7'>
            < EpisodeLocation data={{ episode, location, origin }} />
        </div>
    </div>;
};

export default card;
