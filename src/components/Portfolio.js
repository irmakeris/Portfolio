import React from 'react';
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Button,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/React-logo-1.png";
import project3 from "../images/like.png";

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",

    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem 5rem auto"
    },
    cardImg: {
        width: "95%",
    }
})


const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/*Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="140" image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    React TMDB Movie Catalog is a responsive movie search and
                                    view engine made with ReactJS using continuosly updated
                                    data from The Movie Database (TMDB). This project
                                    is created for only personal development and practical
                                    purposes, no commercial purpose is pursued.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://react-implemented-with-theme.stackblitz.io" size="small" color="primary">
                                    Live Demo
                              </Button>
                            </CardActions>
                        

                    </Card>

                </Grid>
                {/*Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia className={classes.cardImg} component="img" alt="Project 2" height="140" image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    ChangeTheme app is a responsive example website created with React and ContextApi
                                    to provide user a personal choice of theme for a more favorable user experience. This project
                                    is created for only personal development and practical
                                    purposes, no commercial purpose is pursued.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://changethemeapp.stackblitz.io" size="small" color="primary">
                                    Live Demo
                              </Button>
                            </CardActions>
                       

                    </Card>

                </Grid>
               {/*Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia  component="img" alt="Project 3" height="140" image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    LikeApp is a responsive example website created with React with the inspiration of Instagram like system.
                                    By using local history, likes for a photo can be stored and counted without effecting the other existing photos. This project
                                    is created for only personal development and practical
                                    purposes, no commercial purpose is pursued.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://stackblitz.com/edit/likeapp" size="small" color="primary">
                                    Live Demo
                              </Button>
                            </CardActions>
                      

                    </Card>

                </Grid>
            </Grid>

        </Box>
    )
}

export default Portfolio
