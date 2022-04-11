import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordian';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant=" h3" component='h1' marginTop={3}>
                Explore the world in vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img src="https://images.unsplash.com/photo-1524467128837-00f6644866d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXJpc218ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" height={325} />
                <ImageCollage />
            </Box>
            <Typography variant=" h6" component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Box marginBottom={10}>
                <Typography variant="paragaph" component='p' marginTop={3} marginBottom={3}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, dolorem, odio quasi et explicabo reprehenderit vitae quae quia laborum saepe amet qui fuga voluptatibus odit soluta magni? Eaque in tempore non! Laudantium blanditiis, vero sint amet deserunt sunt excepturi ut.
                </Typography>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal/>
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour