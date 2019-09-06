import React, {Fragment} from "react";
import georgyAndOlaf from "../assets/WY-M3E-GeorgyOlaf_Art.jpg";
import hans from "../assets/WY-M3E-Hans_Art.jpg";
import makeStyles from "@material-ui/core/styles/makeStyles";

const imgStyle= makeStyles({
   image:{
       width: 300,
       marginLeft: '50%'
   }
});

export default function Slide(props) {
    const classes = imgStyle();
    return (
        <Fragment>
            {
                (props.slideToShow === "left")
                    ? (<img className={classes.image} src={georgyAndOlaf}/>)
                    : (<img className={classes.image} src={hans}/>)
            }
        </Fragment>
    )
}
