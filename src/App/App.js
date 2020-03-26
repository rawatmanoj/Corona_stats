import React from 'react';
import Stats from '../Stats/stats';


const App = () => {
    return (
        <div className='main'>
        <div className="main-container">
            <h1 className="covid">Covid-19</h1>
           
            <Stats/>
        </div>
        </div>
    );
};

export default App;