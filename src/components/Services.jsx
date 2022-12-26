import React from 'react';
import '../assets/stylesheets/Services.scss';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card = ({title, description, icon, img}) => {
    return(
        <Box className='card'>
            <img className='card__img' src={img} alt="imagen decorativa" />
            <Box className='card__content'>
                <img className='card__content__img' src={icon} alt="" />
                <Box className='card__content__text'>
                    <Typography variant='h5'>{title}</Typography>
                    <Typography variant='body2'>{description}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

const Services = () => {
    const el = React.useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    const tl = React.useRef();

    React.useEffect(()=>{
    gsap.defaults({ duration: 0.5 });
    tl.current = gsap
      .timeline()
      .from(q(".services__title"), {
        opacity: 0,
        x: 50,
        ease: Power3.easeOut,
      })
      .from(q(".services__title__line"), {
        width: 0,
        ease: Power3.easeOut,
      },"-=0.25")
      .from(q(".card"), {
        opacity: 0,
        x: 50,
        stagger: 0.3,
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
    },[]);

  return (
    <Container className='services' maxWidth="lg" ref={el}>
        <Box className='services__title'>
            <Typography variant='h2'>We manage Logistics for World&apos;s Multinational Companies</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <div className="services__title__line"></div>
        </Box>

        <Box className='services__cards'>
            <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3218&q=80" icon="https://img.icons8.com/ios/50/000000/truck--v1.png"/>
            <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3218&q=80" icon="https://img.icons8.com/ios/50/000000/truck--v1.png"/>
            <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3218&q=80" icon="https://img.icons8.com/ios/50/000000/truck--v1.png"/>
            <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3218&q=80" icon="https://img.icons8.com/ios/50/000000/truck--v1.png"/>
        </Box>


    </Container>
  );
};

export default Services;