import { useRef, useEffect, useState } from "react";
import mountain from "./image/pexels-eberhardgross-572897.jpg";
import pallon from "./image/pallon.png";
import moon from "./image/moon-removebg-preview.png";
import clude from "./image/clude.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const moveElement = (direction, speed) => {
      const moveAmount = direction === "left" ? -speed : speed;
      setCurrentX((prevX) => prevX + moveAmount);
    };

    const animationId = requestAnimationFrame(() => moveElement("left", 1200));
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
          offset={-0.001}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.01} speed={0.1}>
          <img src={moon} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          style={{
            transform: `scale(.8) translateX(${-currentX}px)`,
            transition: "transform 300s linear",
            textAlign: "center",
            bottom: "0px",
            position: "absolute",
          }}
        >
          <img src={clude} alt='' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.15}
          style={{
            textAlign: "right",
            transform: `scale(.8) translateY(${-currentX}px) translateX(${-currentX}px)`,
            transition: "transform 250s linear",
          }}
        >
          <img src={pallon} alt='' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.3}
          speed={1.2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Moon</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
          style={{ backgroundColor: "#000", height: "100vh" }}
        >
          <h2>Keep Going!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
