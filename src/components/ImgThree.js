import { Parallax } from "react-parallax";
import three from "../Images/nasa-n463SoeSiVY-unsplash.jpg";
const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={three}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageOne;
