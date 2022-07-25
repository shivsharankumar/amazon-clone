// import "../";
import Navbar from "./Navbar";
import Carousel from "./carousel";
import Card from "./Card";
import Scroll from "../Components/Scroll";
import Footer from "./Footer";
import item from "../items";
import Box from "@mui/material/Box";

function setCard(ele) {
  console.log("hererere", ele);
  return (
    <Card
      category={ele.category}
      item1img={ele.item1img}
      item1={ele.item1}
      item2img={ele.item2img}
      item2={ele.item2}
      item3img={ele.item3img}
      item3={ele.item3}
      item4img={ele.item4img}
      item4={ele.item4}
    />
  );
}

export default function App() {
  // const anArrayOfNumbers=[<img src="https://picsum.photos/200/300?">,<img src="https://picsum.photos/200/300?">];
  return (
    <div className="App">
      <Navbar />
      <div>
        <Carousel />
        {/* <Card />
        <Card /> */}
        <Box style={{ display: "flex" }}>{item.map(setCard)}</Box>
        <Box style={{ display: "flex" }}>{item.map(setCard)}</Box>
        <Box style={{ display: "flex" }}>{item.map(setCard)}</Box>
        <Scroll />
        <Footer />
      </div>
    </div>
  );
}
