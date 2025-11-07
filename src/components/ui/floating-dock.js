"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

/* -------------------- MOBILE VERSION -------------------- */
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 6,
                  transition: { delay: idx * 0.02 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.02 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                  bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md 
                  hover:shadow-indigo-500/50 transition-all duration-150 ease-out"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full 
        bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md 
        hover:shadow-indigo-500/40 transition-all duration-150 ease-out"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  );
};

/* -------------------- DESKTOP VERSION -------------------- */
const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl border border-indigo-500/20 bg-[#0b0b0c]/40 backdrop-blur-xl px-6 pb-3 shadow-xl shadow-indigo-500/20 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

/* -------------------- ICON CONTAINER -------------------- */
function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // macOS distance-based scaling
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // ⚡ Ultra-fast response tuning
  const width = useSpring(useTransform(distance, [-120, 0, 120], [40, 85, 40]), {
    mass: 0.1,
    stiffness: 350,
    damping: 8,
  });

  const height = useSpring(useTransform(distance, [-120, 0, 120], [40, 85, 40]), {
    mass: 0.1,
    stiffness: 350,
    damping: 8,
  });

  const iconSize = useSpring(
    useTransform(distance, [-120, 0, 120], [20, 40, 20]),
    { mass: 0.1, stiffness: 350, damping: 8 }
  );

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-full 
        bg-gradient-to-br from-indigo-500/50 to-purple-600/50 
        hover:from-indigo-500/80 hover:to-purple-600/80 
        border border-indigo-500/20 shadow-md hover:shadow-indigo-500/50 
        transition-all duration-150 ease-out"
      >
        {/* Tooltip BELOW icon */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 0, x: "-50%" }}
              animate={{ opacity: 1, y: 14, x: "-50%" }}
              exit={{ opacity: 0, y: 0, x: "-50%" }}
              transition={{
                duration: 0.15, // ⚡ Instant tooltip pop-in
                ease: "easeOut",
              }}
              className="absolute top-14 left-1/2 -translate-x-1/2 rounded-md 
              bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
              text-xs font-medium px-3 py-1 shadow-md shadow-indigo-500/40 
              whitespace-nowrap border border-indigo-500/30"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
