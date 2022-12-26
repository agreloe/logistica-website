import React from "react";
import "../assets/stylesheets/Work.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Carousel, { CarouselItem } from "./Carousel";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(max-width: 767.98px)").matches
  );
  const el = React.useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    const tl = React.useRef();

  React.useEffect(() => {
    window
      .matchMedia("(max-width: 767.98px)")
      .addEventListener("change", (e) => setMatches(e.matches));

      gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(el.current, {
        opacity: 0,
        ease: Power3.easeOut,
      },)
      .from(q(".work__container__text"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      },)
      .from(q(".caro"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      });

      ScrollTrigger.create({
        trigger: el.current,
        start: "top 60%",
        end: "bottom 50%",
        animation: tl.current,
        onEnter: () => {
          tl.current.play();
        }
      });
  }, []);
  return (
    <section className="work" ref={el}>
      <Container maxWidth="lg" className="work__container">
        <Typography className="work__container__text" variant="h2" sx={{ color: "#fff" }}>
          Our highlighted work
        </Typography>
        {!matches && (
          <div className="caro">

          <Carousel slides={2} width={50}>
            <CarouselItem
              img="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
              height="60vh"
              width="50%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
              height="60vh"
              width="50%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              height="60vh"
              width="50%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1519213887655-a4f199e3015b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
              height="60vh"
              width="50%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
          </Carousel>
          </div>
        )}
        {matches && (
          <div className="caro">

          <Carousel slides={1} width={100}>
            <CarouselItem
              img="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
              height="60vh"
              width="100%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
              height="60vh"
              width="100%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              height="60vh"
              width="100%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
            <CarouselItem
              img="https://images.unsplash.com/photo-1519213887655-a4f199e3015b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
              height="60vh"
              width="100%"
              text="Proyecto 1"
              gradientColor="rgba(255, 255, 255, 0)"
              brightness={1}
            ></CarouselItem>
          </Carousel>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Work;
