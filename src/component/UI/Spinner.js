import React from 'react';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner} alt="loading" style={{margin: 'auto', width: '300px', display: 'block'}}/>
    );
}

export default Spinner;