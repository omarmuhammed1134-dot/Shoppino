import React from "react";
import { useParams } from "react-router-dom";

function Cart(){
    const {id} = useParams()
    
    return(
        <div className="mt-5">
            <h2 className="text-danger">
                Cart component
            </h2>
            <p className="text-danger">
                product id is :{id}
            </p>
        </div>
    )
}
export default Cart