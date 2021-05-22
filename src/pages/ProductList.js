
import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Product from './Product';



class ProductList extends Component {
    constructor() {
        super();
        this.state = { products: [], loading: false };
    }

    componentDidMount() {
        const axios = require("axios");
        this.setState({ loading: true }, () => {
            axios
                .get(`https://609d779804bffa001792eddc.mockapi.io/api/v1/productList`)
                .then(result =>
                    this.setState({
                        loading: false,
                        products: [...result.data]
                    })
                );
        });
    }

    render() {
        const { products, loading } = this.state;

        return (
            <div className="container px-4 px-lg-5 my-5">

                <div className="row">
                    <h1>Products</h1>

                </div>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" >

                    {loading ? (<label><Spinner animation="border" size="lg" /> Loading...</label>) : (
                        products.map((item, index) => {
                            return <div className="col mb-2"><Product item={item} key={index} /></div>;
                        })
                    )}


                </div>

            </div>
        );
    }
}

export default ProductList;
