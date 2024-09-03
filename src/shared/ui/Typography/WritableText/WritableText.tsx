"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./WritableText.module.scss";

const WritableText = () => {
  const text = useRef(null);
  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["Frontend Developer", "Fullstack Developer"],
      typeSpeed: 80,
      loop: true,
      startDelay: 0,
      backSpeed: 80,
      fadeOutDelay: 2000,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className={styles.WritableText}>
        <h1 className={styles.WritableText_Text}>Привет, я</h1>
        <span ref={text} className={styles.WritableText_Text} />
      </div>
    </>
  );
};

export default WritableText;
