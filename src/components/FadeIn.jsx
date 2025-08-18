// framer motion
import { motion, useAnimation, useInView } from "framer-motion";

// react
import { useEffect, useRef, memo } from "react";

const FadeIn = memo(({ 
  children, 
  delay = 0, 
  direction = "up", 
  fullWidth = false, 
  padding = false,
  className = "",
  threshold = 0.1,
  duration = 0.6
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: "-50px 0px -50px 0px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay,
        }
      }
    };

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 30 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case "down":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -30 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case "left":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 30 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case "right":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -30 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      default:
        return baseVariants;
    }
  };

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : "w-auto"} ${
        padding ? "px-4 sm:px-6 lg:px-8" : "px-0"
      } flex items-center justify-center ${className}`}
    >
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={controls}
        className="w-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
});

FadeIn.displayName = "FadeIn";

export default FadeIn;
