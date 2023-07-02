// import { Parallax } from "react-parallax";
// import image from "../Images/moon.jpg";

// const ImgOne = () => (
//   <Parallax className="image" bgImage={image} strength={800}>
//     <div className="content">
//       <span className="img-text">a trip to space</span>
//     </div>
//   </Parallax>
// );
// export default ImgOne();

import { Parallax } from "react-parallax";
import Nasa from "../Images/nasa-n463SoeSiVY-unsplash.jpg";
const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Nasa}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageOne;
