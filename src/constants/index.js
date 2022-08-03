export const animation1 = {
  offscreen: {
    y: 100,
    x: 0,
    opacity: 0,
    rotateX: 40,
    rotateY: 10,
    scale: 0.8,
  },
  onscreen: {
    y: 0,
    x: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: "linear",
      duration: 0.4,
    },
  },
};

export const animation2 = {
  offscreen: {
    y: 100,
    x: 0,
    opacity: 0,
    rotateX: 40,
    rotateY: 10,
    scale: 0.8,
  },
  onscreen: {
    y: 0,
    x: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: "linear",
      duration: 0.9,
    },
  },
};

export const menuAnimation = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 10,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

export const navbarAnimation = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

export const animation3 = {
  offscreen: {
    y: 160,
    x: 0,
    opacity: 0,
    rotate: 0,
    rotateX: 30,
    rotateY: 10,
    scale: 0.9,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 1,
    },
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 1.5,
    },
  },
};

export const headerAnimation2 = {
  offscreen: {
    y: 160,
    x: 0,
    opacity: 0,
    rotate: 0,
    rotateX: 30,
    rotateY: 10,
    scale: 0.9,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 1,
    },
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 1.5,
    },
  },
};

export const animation4 = {
  offscreen: {
    y: 160,
    x: 0,
    opacity: 0,
    rotate: 0,
    rotateX: 30,
    rotateY: 10,
    scale: 0.9,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 2,
    },
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
      duration: 2.5,
    },
  },
};

export const animation5 = {
  offscreen: {
    y: 160,
    x: 0,
    opacity: 0,
    rotate: 0,
    rotateX: 30,
    rotateY: 10,
    scale: 0.9,
    transition: {
      perspective: "1200px",
      type: "spring",
      delay: 0.15,
      ease: [0.44, 0, 0.56, 1],
      duration: 2,
    },
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      perspective: "1200px",
      type: "spring",
      delay: 0.15,
      ease: [0.44, 0, 0.56, 1],
      duration: 3.5,
    },
  },
};

export const pictureAnimation = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.3,
      ease: "linear",
      duration: 0.5,
    },
  },
};

export const textAnimation = {
  offscreen: {
    scale: 0.8,
    translateY: 10,
    translateX: 10,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    translateY: 0,
    translateX: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.6,
      ease: "linear",
      duration: 0.3,
    },
  },
};
