import { useEffect, useState } from "react";

const useFetch = (id) => {
    const [data, setData] = useState();
    console.log(id)
    useEffect(() => {
        makeApiCall();
    }, [id]);

    const makeApiCall = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data);
    };

    return { data };
};
export default useFetch;
