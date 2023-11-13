import React from "react";
import Circle from "../../components/Circle";
import BeginHeading from "./beginHeading/BeginHeading";

const IndexBegin = () => {


  return (
    <main style={{width: "100vh", height: "100vh", overflow:"hidden"}}>
      <Circle>
        <BeginHeading />
      </Circle>
      {/* <Circle>
      </Circle> */}
    </main>
  );
};

export default IndexBegin;
