import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import { SvgIcon } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          height: "55vh",
          width: "35vh",
          padding: "2rem",
          boxShadow: "0 10px 18px rgba(3, 2, 2, 0.788)",
        }}
      >
        <img
          src="data:image/png;base64,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"
          alt=""
        />

        <Typography variant="h3" color="dark" fontWeight="900">
          Clarusway
        </Typography>
        <Typography variant="h4" color="dark" fontWeight="100">
          Mücahit Akdeniz{" "}
        </Typography>
        <Typography variant="h6" color="dark" fontWeight="100">
          Junior Frontend Developer{" "}
        </Typography>

        <CardActions>
          <Link
            variant="button"
            target="_blank"
            href="https://www.linkedin.com/in/m%C3%BCcahit-akdeniz-9a477a269/"
          >
            <LinkedInIcon style={{ fontSize: "40px", color: "black" }} />
          </Link>
          <Link
            variant="button"
            target="_blank"
            href="https://twitter.com/Mcht_Akdnz"
          >
            <TwitterIcon style={{ fontSize: "40px", color: "black" }} />
          </Link>

          <Link
            variant="button"
            target="_blank"
            href="https://github.com/mucahitakdeniz"
          >
            <GitHubIcon style={{ fontSize: "40px", color: "black" }} />
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default About;
