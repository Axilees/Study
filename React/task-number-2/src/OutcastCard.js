import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";

function OutcastCard({faction="Ауткасты", styles, ...restProps}) {
    const classes = styles();
    let fullTitle = [faction,"крутые!!!"].join(" ");
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography {...restProps}>
                    {fullTitle}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default OutcastCard;
