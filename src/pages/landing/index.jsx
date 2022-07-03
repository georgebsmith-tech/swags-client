import React from "react";
import { Button } from "@mui/material";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero/hero";
import Container from "../../components/container";
import About from "../../components/about/about";
import Services from "../../components/services/services";
import WhyUs from "../../components/why_us/why_us";
import Testimonials from "../../components/testimonials/testimonials";
import HowWork from "../../components/how_work/howWork";
import Pricing from "../../components/pricing/pricing";
import ContactUs from "../../components/contact_us/contactUs";
import Schedule from "../../components/schedule_laundry/schedule";

const Landing = () => {
  return (
    <>
      <Container background={"#1B55CA"}>
        <Navbar />
        <Hero />
      </Container>
      <Container style={{ borderTop: "106px" }}>
        <About />
      </Container>
      <Container style={{ borderTop: "106px" }}>
        <Services />
      </Container>
      <Container style={{ borderTop: "106px", background: "#DDE5F7" }}>
        <WhyUs />
      </Container>
      <Container style={{ borderTop: "106px" }}>
        <Testimonials />
      </Container>
      <Container
        style={{
          background: "#DDE5F7",
          clipPath: "polygon(0 0, 100% 3%, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0 0, 100% 3%, 100% 100%, 0% 100%)",
        }}
      >
        <HowWork />
      </Container>
      <Container>
        <Pricing />
      </Container>
      <Container
        style={{
          background: "#DDE5F7",
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0 8%, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <ContactUs />
      </Container>
      <Schedule />
    </>
  );
};

export default Landing;
