import React, { useEffect, useState } from 'react';

const EpisodeLocation = (props) => {
    const { episode, location, origin } = props.data



    return <div className='EpisodeLocation'>
        {
            (origin === undefined) ? <div>LOADİNG...</div> :
                <div>{origin.name} {location.name}</div>
        }
    </div>
};

export default EpisodeLocation;
