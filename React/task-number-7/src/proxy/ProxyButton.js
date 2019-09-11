import React from "react";
import Button from "@material-ui/core/Button"

export const ProxyButton = ({text, ...restProps}) => {
    return(
             <Button variant="contained" {...restProps}>{text}</Button>
    );
};


