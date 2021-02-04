import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../images/woman.png";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        marginBottom: "3rem",
        color: "tan"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));


const Header = () => {
    const classes= useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Irmak Ecem Eriş"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Irmak Ecem Eriş"]} typeSpeed={30} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                strings={["Web Design","Web Development","React Native Development"]}
                typeSpeed={40}
                backSpeed={60} 
                loop/>
            </Typography>
        </Box>
    )
}

export default Header
