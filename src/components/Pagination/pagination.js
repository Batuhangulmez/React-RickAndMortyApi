import React from 'react';
const maxCharacter = 826;

const pagination = (props) => {
    return <div className='row'>
        <div className='col-6'>
            <button type="button" className='paginationButton'
                onClick={() => {
                    if (props.CharacterNumber != 1) {
                        props.onhandleCharacterNumber(props.CharacterNumber - 1)
                    }
                }
                }
            >{">"}</button>
        </div>
        <div className='col-6'>
            <button type="button" className='paginationButton'
                onClick={() => {
                    if (props.CharacterNumber != maxCharacter) {
                        props.onhandleCharacterNumber(props.CharacterNumber + 1)
                    }
                }
                }
            >{">"}</button>

        </div>
    </div>;
};

export default pagination;
