import React from "react";
import "../assets/stylesheets/App.scss";
import Carousel, { CarouselItem } from "../components/Carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "../components/Services";
import About from "../components/About";
import Info from "../components/Info";
import Work from "../components/Work";
import Contact from "../components/Contact";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section className="App">
      <Carousel slides={1} width={100} text="Fast, Certified & Flexible Solutions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
        <CarouselItem
          img="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          height="60vh"
          width="100%"
          brightness={.5}
          />
        <CarouselItem
          img="https://images.unsplash.com/photo-1600352706622-cb5221ea6c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          height="60vh"
          width="100%"
          brightness={.5}
          />
        <CarouselItem
          img="https://images.unsplash.com/photo-1600352706375-30b342c4910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          height="60vh"
          width="100%"
          brightness={.5}
        />
      </Carousel>

      <Services />

      <About />

      <Info />

      <Work />

      <Contact />
    </section>
  );
};

export default App;
