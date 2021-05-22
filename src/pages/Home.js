import React, { Suspense } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Zoom from 'react-reveal/Zoom';

const HomePageComponent = () => {

    return (
        <Jumbotron
            fluid
            id="home"
            className="  d-flex align-content-center  align-items-center justify-content-center m-0 bg-home"
        >
            <div className="d-flex flex-row p-3 bg-white w-50 row-wrap">
                <div>
                    <img src="./assets/images/bg.jpeg" width="300" height="300" />
                </div>
                <div className="d-flex flex-column p-2 row-wrap">

                    <h1>I dream my painting and I paint my dream.</h1>
                    <p>Akhil is a self taught artist based in Bangalore, India. He was born in 1988 at Ernakulam Kerala.<br />

Largely self-taught, akhil began his career working as a Software Engineer. He worked extensively in watercolor. Mostly chronicling after work/weekends.</p>
                </div>
            </div>
        </Jumbotron>
    );
}

export default HomePageComponent;

