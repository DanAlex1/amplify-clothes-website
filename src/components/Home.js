import React from "react";
import './Home.css';


const Home = () => {
    function sayHello() {
        alert('You clicked me!');
      }
    return (
        <div>
           <button onClick={sayHello}>Default</button>
        </div>
    )
}

export default Home;