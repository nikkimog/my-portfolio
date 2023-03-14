import React from "react";
import {motion, MotionConfig} from "framer-motion/dist/framer-motion";

function ImageGrid({setModalImg}) {

    const LindaImages = [
        { id: 1, filePath: "../../assets/linda5.png", caption: 'lindaaa'}
    ]

  return (
    <div className="img-grid">
      {LindaImages.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            className="img-wrap"
            key={doc.id}
            onClick={() => setModalImg(doc.filePath)}
          >
            <motion.img
              src={doc.filePath}
              alt="uploadded pic"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;