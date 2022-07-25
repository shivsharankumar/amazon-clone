import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import amazon from "./amazon.svg";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";
const images = (
  <img
    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
    alt="props"
    width={38}
    height={50}
  />
);
export default function NavBar() {
  const [all, setAll] = React.useState(0);
  const [lang, setLang] = React.useState("english");
  function handleChange(event) {
    console.log(event.target.value);
    setAll(event.target.value);
    return all;
  }
  function handleChangelang(event) {
    console.log(event.target.value);
    setLang(event.target.value);
    return all;
  }

  return (
    <AppBar style={{ background: "#0F1111", height: "55px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="http://localhost:3000/">
            <img src={amazon} height="30" alt="" loading="lazy" />
          </a>

          <Paper
            component="form"
            sx={{
              // p: "1px 2px",
              height: 40,
              display: "flex",
              alignItems: "center",
              marginLeft: "400px",
              width: 400,
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={all}
              // label="All"
              defaultValue="All"
              onChange={handleChange}
              // style={{ width: "166px" }}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={10}>Amazon Devices</MenuItem>
              <MenuItem value={20}>Amazon Fresh</MenuItem>
              <MenuItem value={30}>Amazon Fashion</MenuItem>
              <MenuItem value={40}>Amazon Pharmacy</MenuItem>
              <MenuItem value={50}>Electronics</MenuItem>
              <MenuItem value={60}>Home Appliances</MenuItem>
            </Select>

            {/* <Divider
              sx={{ height: 50, m: 0.1, borderBlock: 5 }}
              orientation="vertical"
            /> */}
            <IconButton sx={{ p: "8px" }} aria-label="menu"></IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="" inputProps={{}} />
            <IconButton
              style={{ background: "orange" }}
              type="submit"
              sx={{ p: "8px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <div style={{ justifyContent: "space-between" }}>
            <FormControl className="d-flex align-items-end justify-content-end">
              <InputLabel>
                <div style={{ paddingTop: "30px", paddingRight: "30px" }}>
                  {images}
                </div>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                autoWidth
                onChange={handleChangelang}
              >
                <RadioGroup
                  defaultValue="english"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  onSelect={handleChangelang}
                >
                  <FormControlLabel
                    value="english"
                    control={<Radio />}
                    label="English"
                  />
                  <FormControlLabel
                    value="hindi"
                    control={<Radio />}
                    label="Hindi"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </Select>
            </FormControl>
          </div>

          {/* <span onClick={}>
            <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" />
          </span> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
