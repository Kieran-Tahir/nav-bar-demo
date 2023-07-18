import React, { useState, useEffect } from "react"
import "./styles/index.scss"

function ScrollNavbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  function handleScroll() {
    const currentScrollPos = window.scrollY
    setVisible(currentScrollPos < 0 || currentScrollPos < prevScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <nav className={visible ? "scroll-up" : "scroll-down"}>
      <div>Some navbar content</div>
    </nav>
  );
}

export default ScrollNavbar;
