"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronUpSquare } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={scroll}
          className="fixed bottom-5 right-5 z-50 hover:bg-primary "
        >
          <ChevronUpSquare />
        </Button>
      )}
    </>
  );
}

export default ScrollToTop;
