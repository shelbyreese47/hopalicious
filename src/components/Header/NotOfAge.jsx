import React from 'react';

function NotOfAge(props) {
    return (
         <div className="home">
            <div className="hops">
                <img className="hopsImg" src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
                <h3 className="welcome">Welcome to hopalicious</h3> 
                <img className="hopsImg"  src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
            </div>
           <h4 className="welcomeMessage">Sorry, you aren't old enough!</h4>

        </div>
    );
}

export default NotOfAge;