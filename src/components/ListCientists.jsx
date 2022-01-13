import React from "react";
import fetchCientists from "../fetchCientistas";

const cientists = fetchCientists();

function ListCientists(){
    return(
        <h1>Welcome to my amazing app!!</h1>
    );
};

export default ListCientists;