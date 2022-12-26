import React from 'react';
import '../assets/stylesheets/Info.scss';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
  const el = React.useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    const tl = React.useRef();

    React.useEffect(()=>{
    gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .addLabel("firstAn")
      .from(q(".info__img"), {
        opacity: 0,
        x: -50,
        ease: Power3.easeOut,
      },)
      .from(q(".info__rect"), {
        opacity: 0,
        x: -50,
        ease: Power3.easeOut,
      },"-=0.25")
      .from(q(".info__text"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      },"firstAn");

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
    <Container className='info' ref={el}>
        <Box sx={{position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img className='info__img' src="https://images.unsplash.com/photo-1634638022845-1ab614a94128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="Cargo Ship in the sea" />
            <div className="info__rect"></div>
        </Box>
        <Box className='info__text' sx={{padding:"4rem 0px", display:"flex", gap:"1rem", flexDirection:"column"}}>
            <Typography variant='h2'>Safe, Reliable and Express Logistics & Transport Solutions</Typography>
            <Typography variant='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        </Box>
    </Container>
  );
};

export default Info;