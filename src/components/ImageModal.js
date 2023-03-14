import React from "react";
import {motion} from "framer-motion/dist/framer-motion";

function Modal({modalImg, setModalImg}) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setModalImg(null);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{y: "-100vh"}}
        animate={{y: 0}}
        src={modalImg}
        alt="enlarged pic"
        style={{backgroundColor: "#fff"}}
      />
    </motion.div>
  );
}

export default Modal;