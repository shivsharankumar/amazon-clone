import "../";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
// onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}

export default function carousel() {
  return (
    <Carousel
      showArrows={true}
      leftArrowText={"<"}
      leftArrowStyle={{ color: "white", fontSize: 22, margin: 20 }}
      rightArrowText={"＞"}
      rightArrowStyle={{ color: "white", fontSize: 22, margin: 20 }}
      pageInfo
      arrows
    >
      <div>
        <img src="https://picsum.photos/id/26/1500/600" alt="balancing" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="https://picsum.photos/id/274/1500/600" alt="children" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="https://picsum.photos/id/250/1500/600" alt="girl" />
        <p className="legend"></p>
      </div>
      {/* https://pixabay.com/images/id-817368/ */}
      <div>
        <img src="https://picsum.photos/id/225/1500/600" alt="random" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
}
