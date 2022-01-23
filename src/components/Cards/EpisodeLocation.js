import React from 'react';

const EpisodeLocation = (props) => {
    let { episode, location, origin } = props.data

    return <div>
        {location.name}
        {origin.name}

    </div>;
};

export default EpisodeLocation;
