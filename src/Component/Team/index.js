import "./team.css" 
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Members from "../Members";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1d1d1d' : '#1d1d1d',
  padding: theme.spacing(4),
  textAlign: 'center',
boxShadow: "none",

}));

const Team = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "var(--css-primary)"}}>
            <h1 className="team-title">Our Team</h1>
            <div className="grid-container">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item><Members/></Item>
          </Grid>
        ))}
      </Grid>
      </div>
    </Box>
    )
};

export default Team;