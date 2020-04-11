import React from 'react';

const LoadingSpinner = (props) => {
    return(
        <div class="ui active dimmer">
                <div class="ui massive text loader">{props.message}</div>
            </div>
    );
};

export default LoadingSpinner;