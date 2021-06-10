
import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap';


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
            <Container className="pt-4 easing">

                <Row>
                    <h1>Products</h1>
                </Row>

                <Row className="pb-3" lg="2" md="3" xs="1" >

                    {loading ? (<label><Spinner animation="border" size="lg" /> Loading...</label>) : (
                        products.map((item, index) => {
                            return <Col className="mb-3" key={index} ><Product item={item} /></Col>;
                        })
                    )}

                </Row>

            </Container>
        );
    }
}

export default ProductList;
