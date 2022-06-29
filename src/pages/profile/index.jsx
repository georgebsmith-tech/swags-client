import React from "react";
import Link from "next/link";
import styles from "./Index.module.css";

export default function index() {
  return (
    <main style={{ padding: "0 25px" }}>
      <section>
        <div>
          <p>
            <span>Welcome!</span>{" "}
            <span style={{ color: "#000000" }}>Smith</span>
          </p>
          <p>
            Let's get you started by ordering a quick laundry or perhaps a
            schedule your laundry.
          </p>
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
