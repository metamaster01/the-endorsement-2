"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}



interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible },
          )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  // Clone children and pass visible prop to NavbarLogo and NavItems
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Check if the child is NavbarLogo or NavItems and pass visible prop
      if (child.type === NavbarLogo || child.type === NavItems) {
        return React.cloneElement(child as React.ReactElement<any>, { visible });
      }
    }
    return child;
  });

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-4 lg:flex",
        visible && "bg-merkurie-background/90 border border-merkurie-dark/20",
        className,
      )}
    >
      {enhancedChildren}
    </motion.div>
  );
};

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 transition-colors duration-300 hover:text-merkurie-accent"
          key={`link-${idx}`}
          href={item.link}
          animate={{
            color: visible ? "#F7F7F7" : "#F7F7F7",
          }}
          transition={{ duration: 0.3 }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-merkurie-accent/60 "
            />
          )}
          <span className="relative z-20 font-medium">{item.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  // Recursively clone children and pass visible prop to NavbarLogo
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === NavbarLogo) {
        return React.cloneElement(child as React.ReactElement<any>, { visible });
      }
      // If it's MobileNavHeader, check its children for NavbarLogo and MobileNavToggle
      if (child.type === MobileNavHeader) {
        const headerChildren = React.Children.map(child.props.children, (headerChild) => {
          if (React.isValidElement(headerChild)) {
            if (headerChild.type === NavbarLogo || headerChild.type === MobileNavToggle) {
              return React.cloneElement(headerChild as React.ReactElement<any>, { visible });
            }
          }
          return headerChild;
        });
        return React.cloneElement(child as React.ReactElement<any>, {
          children: headerChildren,
        });
      }
    }
    return child;
  });

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-4 py-2 lg:hidden",
        visible && "bg-merkurie-surface/95 border border-merkurie-dark/20",
        className,
      )}
    >
      {enhancedChildren}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-merkurie-surface border border-merkurie-dark/30 px-4 py-8 shadow-2xl backdrop-blur-md",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface NavbarButtonProps {
  children: React.ReactNode;
  variant: string;
  className?: string;
}

export const NavbarButton = ({ children, variant, className }: NavbarButtonProps) => (
  <button className={`px-6 py-2 rounded-full transition-colors ${variant === 'merkurie' ? 'bg-merkurie-accent text-white' : 'bg-gray-800 text-gray-300'} ${className}`}>
    {children}
  </button>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
}) => {
  return isOpen ? (
    <motion.div
      animate={{
        color: visible ? "#F7F7F7" : "#F7F7F7",
      }}
      transition={{ duration: 0.3 }}
    >
      <IconX className="cursor-pointer" onClick={onClick} />
    </motion.div>
  ) : (
    <motion.div
      animate={{
        color: visible ? "#F7F7F7" : "#F7F7F7",
      }}
      transition={{ duration: 0.3 }}
    >
      <IconMenu2 className="cursor-pointer" onClick={onClick} />
    </motion.div>
  );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <motion.a
      href="#"
      className="relative z-20 mr-4 flex items-center px-2 py-1"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated Logo Container */}
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Animated glow effect behind logo */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              "0 0 20px rgba(245, 166, 35, 0.3)",
              "0 0 30px rgba(245, 166, 35, 0.5)",
              "0 0 20px rgba(245, 166, 35, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Image with animations */}
        <motion.div
          className="relative overflow-hidden rounded-lg"
          whileHover={{
            filter: "brightness(1.2) saturate(1.1)",
            scale: 1.05
          }}
          animate={{
            filter: visible
              ? "brightness(1) saturate(1)"
              : "brightness(1.1) saturate(1.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/TEC_logo.webp"
            alt="THE ENDORSEMENT COMPANY"
            width={60}
            height={60}
            className="object-contain"
            priority
          />

          {/* Animated overlay for extra effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};



<div className="flex items-center gap-2">
  <img 
    src="/assets/your-logo.png"
    alt="YOUR LOGO"
    className="w-8 h-8"
  />
  <div className="flex flex-col">
    <span className="text-sm font-bold tracking-wide">THE ENDORSEMENT CO.</span>
    <span className="text-[10px] font-medium text-muted-foreground">
      Merkurie Division
    </span>
  </div>
</div>