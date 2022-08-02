import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));
const Loader = ({ text }) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
            <h5 className="ms-3">{text}...</h5>
        </Backdrop>
    );
};

export default Loader;
