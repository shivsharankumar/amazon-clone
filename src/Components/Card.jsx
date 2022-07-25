import "../styles.css";
import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.primary,
}));
function handleChange(event) {
  console.log(event);
  const url =
    "https://www.amazon.in/b?node=21870115031&pf_rd_r=53J414Z0XF1E4HJ2RJZ1&pf_rd_p=52e74b1a-0df5-4dd1-8d16-68dc67bed853&pd_rd_r=7c09612f-2d46-431a-ac56-c1fb321f651c&pd_rd_w=cgw0e&pd_rd_wg=SVReP&ref_=pd_gw_unk";
  return window.open(url);
}

export default function OutlinedCard(props) {
  return (
    <Grid>
      <Grid
        item
        xs={2}
        className="boxes"
        style={{ padding: "25px 5px 25px 10px" }}
      >
        <Item>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              <b>{props.category}</b>
            </Typography>
          </CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} className="boxes">
              <Item style={{ boxShadow: " 0px 0px 0px 0px rgba(0,0,0,0.75)" }}>
                <a
                  href="http://localhost:3000/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={props.item1img}
                    alt="new"
                    height={120}
                    width={140}
                  />
                  <p className="plabel">{props.item1}</p>
                </a>
              </Item>
            </Grid>

            <Grid item xs={6} className="boxes">
              <Item style={{ boxShadow: " 0px 0px 0px 0px rgba(0,0,0,0.75)" }}>
                <a
                  href="http://localhost:3000/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={props.item2img}
                    alt="new"
                    height={120}
                    width={140}
                  />
                  {/* <p>Appliances</p> */}
                  <p className="plabel">{props.item2}</p>
                </a>
              </Item>
            </Grid>
            <Grid item xs={6} className="boxes">
              <Item style={{ boxShadow: " 0px 0px 0px 0px rgba(0,0,0,0.75)" }}>
                <a
                  href="http://localhost:3000/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={props.item3img}
                    alt="new"
                    height={120}
                    width={140}
                  />
                  <p className="plabel">{props.item3}</p>
                </a>
              </Item>
            </Grid>
            <Grid item xs={6} className="boxes">
              <Item style={{ boxShadow: " 0px 0px 0px 0px rgba(0,0,0,0.75)" }}>
                <a
                  href="http://localhost:3000/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={props.item4img}
                    alt="new"
                    height={120}
                    width={140}
                  />
                  <p className="plabel">{props.item4}</p>
                </a>
              </Item>
            </Grid>
          </Grid>
          <CardActions>
            <Button size="small" onClick={handleChange} className="center">
              Shop Now
            </Button>
          </CardActions>
        </Item>
      </Grid>
    </Grid>
  );
}
