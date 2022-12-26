import React from 'react';
import '../assets/stylesheets/About.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PrimaryButton from './PrimaryButton';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    const el = React.useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    const tl = React.useRef();

    React.useEffect(()=>{
    gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(el.current, {
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from(q(".about__text"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      },"-=0.25");

      ScrollTrigger.create({
        trigger: el.current,
        start: "top 60%",
        end: "bottom 50%",
        animation: tl.current,
        onEnter: () => {
          tl.current.play();
        }
      });
    },[]);
  return (
    <section className='about' ref={el}>
        <Box className='about__text'>
            <Typography variant='h2'>Logistic & Transport solutions</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <Box className='about__text__cards'>
                <Box>
                    <img src="https://img.icons8.com/ios/50/FFFFFF/delivery--v1.png" alt="" />
                    <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>
                <Box>
                    <img src="https://img.icons8.com/ios/50/FFFFFF/delivery--v1.png" alt="" />
                    <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>
            </Box>
            <Box sx={{paddingTop:"1rem"}}>
                <PrimaryButton bgColor="transparent" border='1px solid #fff'>See more</PrimaryButton>
            </Box>
        </Box>
        <div className='about__img'></div>
    </section>
  );
};

export default About;