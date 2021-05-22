import React, { Suspense } from "react";
import Button from "react-bootstrap/Button";
import Zoom from 'react-reveal/Zoom';

const Product = (props) => {

    return (<div className="card h-100" >

        <img className="card-img-top" width="100%" src={props.item.image}></img>
        <div className="card-body p-4">
            <div>
                <div>{props.item.name}</div>
                <div className="font-weight-light dimension">Watercolor, 11 W x 15 H x 0.1 D in</div>
                <div className="font-weight-bold ">$ {props.item.itemPriceInUsd}</div>
            </div>
            <div className="align-self-center">
                {props.item.isAvailable ? <span className="font-weight-light text-info">Available</span> : <span className="font-weight-light text-success">Sold</span>}
            </div>
        </div>
    </div>);
}

export default Product;

