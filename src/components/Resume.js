import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }


    },
        timeLineYear:{
            textAlign: "center",
            maxWidth:"9.375rem",
            margin: "0 3rem 0 auto",
            fontSize: "1.5rem",
            background: "tomato",
            color: "white",
            lineHeight: 1,
            padding:"0.5 rem 0 1rem",
            "&:before": {
                display: "none"
            },
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)" : {
                    float: "none",
                    margin: "0 auto"
                },
                "&:ntn-of-type(2n):before": {
                    display: "none"
                }

            }
        },
        heading : {
            color: "tomato",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading: {
            color: "white",
            padding:"0",
            textTransform: "uppercase"
        }
    
}));


const Resume = () => {
    const classes = useStyles();
    return (
      <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>,
      <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience & Education 
      </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013-2018</Typography>
                    <Box component="div" className={classes.timeLineItem} >
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            High School Diploma
              </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Sırrı Yırcalı Anatolian High School
              </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Graduated summa cum laude.

              </Typography>
                    </Box>


                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018-2023</Typography>
                    <Box component="div" className={classes.timeLineItem} >
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Bachelor of Science: Industrial Engineering
              </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Sabancı University
              </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Continuing education in Industrial Engineering
                            Member of TeaTalks with CEOs Student Organization
                            Member of SuDance Student Club
                            Received Sakıp Sabancı 100% High Honor Scholarship
              </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020-2021</Typography>
                    <Box component="div" className={classes.timeLineItem} >
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Frontend Web Development
              </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Kodluyoruz
              </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                        Front End Web Development course for 5 months including topics such as HTML5, CSS3, UI improvements, React Native and JavaScript.
              </Typography>
                    </Box>
      </Box>
      </Box>
      </>
    );
};

export default Resume
