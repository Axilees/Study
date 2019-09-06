import React from "react";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slider from "@material-ui/core/Slider";

const styles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 5),
        width: 600,
        marginLeft: '20%'
    }
}));

const marks = [
    {
        value: 0,
        label: "Colette",
        title: "Sexy"
    },
    {
        value: 20,
        label: "Georgy And Olaf",
        title: "Dirty"
    },
    {
        value: 40,
        label: "Gokudo",
        title: "Stealthy"
    },
    {
        value: 60,
        label: "Hans",
        title: "Gunny"
    },
    {
        value: 80,
        label: "Misaki",
        title: "Horny"
    },
    {
        value: 100,
        label: "Mortimer",
        title: "Deadly"
    }
];

function getLabel(value) {
    const position = marks.findIndex(mark => mark.value === value);
    return marks[position].title;
}

function PictureSlider(props) {
    const style = styles();
    return (
        <Paper className={style.root}>
            <Slider
                defaultValue={0}
                getAriaValueText={getLabel}
                aria-labelledby="discrete-slider-custom"
                aria-valuetext="aaa"
                step={20}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={props.sliderChange}
            />
        </Paper>
    )
}

export default PictureSlider;
