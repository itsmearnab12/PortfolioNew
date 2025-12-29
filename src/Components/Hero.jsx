import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "Data Analyst"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={textRef} className="typed-text"></span>;
}

export default Hero;