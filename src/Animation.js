export const productVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      when: "beforeChildren",
    },
  },
};
export const productImgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.6,
    },
  },
};
export const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
export const variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      type:"spring"
    },
  },
};
export const productImgVariants2 = {
  hidden: {
    opacity: 0,
    rotateX: 120,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const childrenVariants = {
  hidden: {
    opacity: 0,
    y: "50px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      delay: 0.3,
      duration: 0.7,
    },
  },
};
export const containerVariants = {
  hidden: {
    y:10
  },
  visible: {
    y:0,
    transition: {
      staggerChildren: 0.2,
      when:"beforeChildren"
    },
  },
};
export const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const imgVariants = {
hidden:{
  rotate: 40,
},
visible:{
  rotate:0,
  transition: {
    duration: 0.6,
  },
}
}
export const imgVariants2={
  hidden:{
    rotateY:  90,
    x: 280,
    opacity:0,

  },
  visible:{
    rotateY:0,
    x:0,
    opacity:1,
    transition: {
      delay:0.8,
      duration: 0.5,
    },
  }
}