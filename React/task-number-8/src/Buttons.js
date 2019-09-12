import React from "react";
import Button from "@material-ui/core/Button";

export const PrimaryButton = props => <Btn primary {...props}/>;
export const SecondaryButton = props => <Btn secondary {...props}/>;

export const Btn = ({classNames, primary, secondary, ...props}) => (
    <Button variant="outlined"
            color={primary && "primary" || secondary && "secondary"}
            className={classNames}
            {...props}
    >
    </Button>
);


