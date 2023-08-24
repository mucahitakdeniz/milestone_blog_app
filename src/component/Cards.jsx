import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { minWidth } from "@mui/system";
import { spacing } from "@mui/system";
const Cards = ({ cardsData }) => {
  console.log(cardsData);

  return (
    <Grid container spacing={20} sx={{marginY:"2rem",justifyContent:"center"}}>
      {cardsData.map((item) => (
        <Grid item key={item.id} spacing={5} xs={12} sm={6}  md={4}  >
          <Card sx={{padding:"2rem", }}>
            <CardMedia
              sx={{ height: "100px", width: "100px", margin: "auto" }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxHeight: "2.5rem", overflow: "hidden" }}
              >
                {item.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
