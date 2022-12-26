import React from "react";
import '../assets/stylesheets/Carousel.scss';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PrimaryButton from "./PrimaryButton";
import Container from '@mui/material/Container';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CarouselItem = ({img, height, width, text, brightness}) => {
  return (
    <div className="carousel__inner__item" style={{backgroundImage:`url("${img}")`, height:`${height}`, width:`${width}`, filter:`brightness(${brightness})`}}>
      { text && (
        <Typography className="carousel__inner__item__text" variant="h3">{text}</Typography>
      )}
      </div>
    );
  };

  const Carousel = ({children, slides, width, text, description}) => {

    const el = React.useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    const tl = React.useRef();

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [showLeft, setShowLeft] = React.useState(false);
    const [showRight, setShowRight] = React.useState(true);

    const updateIndex = (param) => {
      let newIndex = param;

      if (newIndex <= 0) {
        newIndex = 0;
        setShowLeft(false);
      } else if (newIndex >= React.Children.count(children)- slides) {
        newIndex = React.Children.count(children) - slides;
        setShowRight(false);
      } else if (newIndex > 0 && newIndex < React.Children.count(children)) {
        setShowLeft(true);
        setShowRight(true);
      }

      setActiveIndex(newIndex);
    };

    React.useEffect(() => {
      gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(q(".title"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      })
      .from(q(".description"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      })
      .from(q(".buttons"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      });

      ScrollTrigger.create({
        trigger: el.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: tl.current,
        onEnter: () => {
          tl.current.play();

        }
      });
    }, []);

  return (
    <div className="carousel" ref={el}>
        <div className="carousel__inner" style={{transform: `translateX(-${activeIndex * width}%`}}>
            {React.Children.map(children, child => {
                return React.cloneElement(child);
            })}
        </div>

          <div className="carousel__content">
              <button className="carousel__content__arrow" type="button" style={{opacity: showLeft ? 1 : 0}} onClick={()=>{updateIndex(activeIndex - 1);}}>&#8249;</button>

              {
                text && (
                  <Container maxWidth="lg" sx={{display:"flex", justifyContent:"flex-start", flexDirection:"column", gap:"1rem", padding:"0px 1rem", color:"#fff"}}>
                  <Typography className="title" variant="h1">{text}</Typography>
                  <Typography className="carousel__content__body description" variant="body2" sx={{textAlign:"left"}}>{description}</Typography>
                  <Stack className="buttons" spacing={2} direction="row">
                    <PrimaryButton bgColor="hsl(19, 100%, 54%)">See more</PrimaryButton>
                  </Stack>
                </Container>
                )
              }

              <button className="carousel__content__arrow" type="button" style={{opacity: showRight ? 1 : 0}} onClick={()=>{updateIndex(activeIndex + 1);}}>&#8250;</button>
            </div>
    </div>
  );
};

export default Carousel;
