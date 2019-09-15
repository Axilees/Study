import React from "react";

export const InputContext = React.createContext({
    name: "",
    surname: "",
    inputName: ()=>{},
    inputSurName: ()=>{}
})