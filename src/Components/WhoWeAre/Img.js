import React, {useState, useEffect} from "react";
import Microfono from "../../Images/Microfono.svg";
import "./Img.css"

const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      setVisible(entry.isIntersecting);
    }, options);

    if (ref){
      observer.observe(ref);
    }

    return () => {
      if (ref){
        observer.unobserve(ref);
      }
    }
  }, [ref,options])

  return [setRef, visible];
}


const Img = () => {
const [setRef, visible] = useOnScreen({threshold: 0.2});

  return (
    <div className={visible? "img__Transition" : "img__TransitionVisible"} ref={setRef} >
      <img src={Microfono} alt="logo" width="383px" />
    </div>
  );
};

export default Img;
