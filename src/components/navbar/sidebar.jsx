import React from "react";
import { useContext, useRef, useEffect } from "react";
import { SideNavContext } from "./useSideToggle";
import styles from "./index.module.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography } from "@mui/material";
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
  const hover = { "&:hover": { color: "black" } };
  const content = (
    <div className={styles.sideParent}>
      <div ref={navRef} className={styles.sidecontainer}>
        <div className={styles.logo}>
          <img src="/images/svg/Asset1.svg" width="25px" alt="logo" />
          <Typography
            variant="subtitle2"
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="bold"
            color="white"
            ml="10px"
          >
            SWAGS
          </Typography>
        </div>
        <ul
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          {[
            { title: "Home", image: <HomeIcon sx={hover} /> },
            {
              title: "Profile",
              image: <PersonIcon sx={{ "&:hover": { color: "red" } }} />,
            },
            { title: "Message", image: <MessageIcon /> },
            { title: "Notification", image: <NotificationsIcon /> },
            { title: "Pick A Plan", image: <LocalOfferIcon /> },
          ].map((section, idx) => (
            <li key={idx}>
              <Link href="/#">
                <a className={styles.item}>
                  {section.image} {section.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            fontFamily: "Poppins",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          {" "}
          <LogoutIcon
            sx={{ marginRight: "10px", boxShadow: "2px 3px 24px #00000012" }}
          />
          Log Out
        </Button>
      </div>
    </div>
  );
  return <div>{show ? content : ""}</div>;
};
export default Sidebar;
