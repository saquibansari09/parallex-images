import { Parallax } from "react-parallax";
import Moon from "../Images/spacex-VBNb52J8Trk-unsplash.jpg";
const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Moon}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageOne;
