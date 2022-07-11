import React from "react";
import { useContext, useRef, useEffect } from "react";
import { SideNavContext } from "./useSideToggle";
import styles from "./index.module.css";
const Sidebar = () => {
  //using context api for toggling show
  const { show, setShow } = useContext(SideNavContext);

  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShow(false);
        // alert("just clicked");
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setShow]);
  const content = (
    <div className={styles.sideParent}>
      <div ref={navRef} className={styles.sidecontainer}>
        <button className={styles.item}>
          <img
            src="./images/menuS.svg"
            alt=""
            width="20px"
            style={{ marginRight: "37px" }}
          />{" "}
          Home
        </button>
        <button className={styles.item}>
          <img
            src="./images/menuS.svg"
            alt=""
            width="20px"
            style={{ marginRight: "37px" }}
          />{" "}
          Home
        </button>
        <button className={styles.item}>
          <img
            src="./images/menuS.svg"
            alt=""
            width="20px"
            style={{ marginRight: "37px" }}
          />{" "}
          Home
        </button>
        <button className={styles.item}>
          <img
            src="./images/menuS.svg"
            alt=""
            width="20px"
            style={{ marginRight: "37px" }}
          />{" "}
          Home
        </button>
        <button className={styles.item}>
          <img
            src="./images/menuS.svg"
            alt=""
            width="20px"
            style={{ marginRight: "37px" }}
          />{" "}
          Home
        </button>
      </div>
    </div>
  );
  return <div>{show ? content : ""}</div>;
};
export default Sidebar;
