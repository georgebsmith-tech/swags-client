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
      <Container>
        <HowWork />
      </Container>
      <Container>
        <Pricing />
      </Container>
    </>
  );
};

export default Landing;
