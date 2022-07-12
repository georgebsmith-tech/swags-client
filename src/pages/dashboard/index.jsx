import React from "react";
import Link from "next/link";
import styles from "./Index.module.css";
import NavbarDashboard from "../../components/navbar_dashboard/navbarDashboard";
import { Typography } from "@mui/material";
import Sidebar from "../../components/navbar/sidebar";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

export default function index() {
  return (
    <main style={{ padding: "0 25px" }}>
      <NavbarDashboard />
      <Sidebar />
      <section>
        <div>
          <Typography
            fontFamily="Poppins"
            fontWeight="normal"
            variant="h6"
            color="black"
            mb="24px"
          >
            <span>Welcome!</span>{" "}
            <span style={{ color: "#000000", fontWeight: "bold" }}>Smith</span>
          </Typography>
          <Typography mb="51px" sx={{ color: "#5E5E5E" }}>
            Let's get you started by ordering a quick laundry or perhaps a
            schedule your laundry.
          </Typography>
        </div>
      </section>
      <section>
        <ul className={styles.sectionWrapper}>
          {[
            {
              title: "Quick Laundry",
              bg: "#FDE2EB96",
              image: <LocalLaundryServiceIcon />,
            },
            {
              title: "My Schedules",
              bg: "#E0EAF4",
              image: <CalendarMonthIcon />,
            },
            {
              title: "Quick Laundry",
              bg: "#EFECE1",
              image: <TimerOutlinedIcon />,
            },
            {
              title: "My Schedules",
              bg: "#E1EFE4",
              image: <ShoppingBasketOutlinedIcon />,
            },
          ].map((section, idx) => (
            <li key={idx}>
              <Link href="#">
                <a
                  style={{
                    padding: "41px 34px",
                    backgroundColor: section.bg,
                    borderRadius: 14,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "37px",
                  }}
                >
                  {section.image}
                  {section.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
