import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation className={classes.root} width="auto" style={{ background: "#222" }}>
            <BottomNavigationAction style={{ padding: 0 }} icon={<Instagram />} href="https://www.instagram.com/irmakeriss/?hl=tr"/>
            <BottomNavigationAction style={{ padding: 0 }} icon={<LinkedIn />} href="https://www.linkedin.com/in/irmak-ecem-eri%C5%9F-2baab9176"/>
            <BottomNavigationAction style={{ padding: 0 }} icon={<Github />} href="https://github.com/irmakeris"/>
        </BottomNavigation>
    )
}

export default Footer
