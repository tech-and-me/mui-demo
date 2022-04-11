import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})

const TourCard = ({tour}) => {
    const {name,price,image,duration,rating, numberOfReviews} = tour;
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} >
                    <img
                        src={image}
                        alt={name} className="img" />
                    <Box paddingX={1}>

                        <Typography variant="subtitle1" component="h2">
                            {name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: 2
                            }}
                        >
                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {rating}
                            </Typography>
                            <Typography variant="body2" component="p" marginLeft={1.5}>
                                ({numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" component="p" marginTop={0.5}>
                                From AUS {price}
                            </Typography>
                        </Box>


                    </Box>


                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard