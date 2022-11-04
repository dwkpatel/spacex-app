import React, { Component } from 'react';

class Logo extends Component {
    render () {
        const size = {
            height: 105,
            width: 105
        }
        return (
            <div>
                <img styles={size} alt="spaceX logo" src="./spacex.png"/>
            </div>
        )
    }
}

export default Logo;