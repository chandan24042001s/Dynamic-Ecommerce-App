import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data }) => {
    const navigate = useNavigate();
    const id=data.id;
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        data.image
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price*10}</span>
            </div>
        </div>
    );
};

export default Product;
