import React, { ReactNode } from 'react';

type Props = {
children?: ReactNode
}

const Circle = (props:Props) => {
    return (
      <div>
        <div
          style={{
            width: 1091,
            height: 1091,
            border: "33px solid white",
            borderRadius: "100vw",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              width: 1091,
              height: 1091,
              border: "0.5px solid black",
              borderRadius: "100vw",
              display: "grid",
              placeItems: "center",
              position:"absolute"
            }}
          >

            {props.children}
          </div>
        </div>
      </div>
    );
};

export default Circle;