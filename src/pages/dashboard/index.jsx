import React from "react";
import Link from "next/link";
import styles from "./Index.module.css";
import NavbarDashboard from "../../components/navbar_dashboard/navbarDashboard";
import { Typography } from "@mui/material";
import Sidebar from "../../components/navbar/sidebar";

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
            { title: "Quick Laundry", bg: "#FDE2EB96" },
            { title: "My Schedules", bg: "red" },
            { title: "Quick Laundry", bg: "#FDE2EB96" },
            { title: "My Schedules", bg: "blue" },
          ].map((section, idx) => (
            <li
              key={idx}
              style={{
                padding: "41px 34px",
                backgroundColor: section.bg,
                borderRadius: 14,
              }}
            >
              <Link href="#">
                <a>
                  <p>{section.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
