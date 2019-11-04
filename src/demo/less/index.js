import React from 'react';
import './index.less';
import Son1 from './son1';
import Son2 from './son2';

function Less(){
    return(
        <div className='less'>
            <h3>Less demo</h3>
            <Son1></Son1>
            <Son2></Son2>
        </div>
    );
};

export default Less;