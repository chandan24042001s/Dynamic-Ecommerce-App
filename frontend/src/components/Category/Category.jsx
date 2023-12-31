import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
import { useEffect, useState } from "react";
const Category = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        makeApiCall();
    }, [id]);

    const makeApiCall = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data);
    };

  
    // const { data } = useFetch(
    //     `/api/products?populate=*&[filters][categories][id]=${id}`
    // );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
