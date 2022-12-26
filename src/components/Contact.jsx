import React from "react";
import "../assets/stylesheets/Contact.scss";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PrimaryButton from "./PrimaryButton";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CustomInput = styled(TextField)({
    '& .MuiFormLabel-root': {
        color:"#fff"
    },
    '& .MuiInputBase-input': {
        color:"#fff",
        '&:before':{
            borderBottom: '1px solid rgba(255,255,255,0.75)',
        }
    },
    '& label.Mui-focused': {
      color: 'rgba(255,255,255,0.75)',
    },
    '& .MuiInputBase-root': {
        backgroundColor:"transparent",
        '&:hover':{
        backgroundColor:"transparent",
        },
      '&:after': {
        borderBottom: '2px solid rgba(255,255,255,0.75) !important',
      },
      '&:before': {
        borderBottom: '1px solid rgba(255,255,255,0.75) !important',
      },
    },
  });

const ContactForm = () => {
  return (
    <Box className="form" component="form" noValidate autoComplete="off">
        <CustomInput fullWidth={true} id="filled-basic" label="Name" variant="filled" />
        <CustomInput fullWidth={true} id="filled-basic" label="Email" variant="filled" />
        <CustomInput fullWidth={true} id="filled-basic" label="Message" variant="filled" rows={4} multiline />
        <PrimaryButton bgColor="transparent" border="1px solid #fff">Send</PrimaryButton>
    </Box>
  );
};

const Contact = () => {

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
      },)
      .from(q(".contact__text"), {
        opacity: 0,
        x: -50,
        ease: Power3.easeOut,
      },"-=0.25")
      .from(q(".form"), {
        opacity: 0,
        x: -50,
        ease: Power3.easeOut,
      },);

      ScrollTrigger.create({
        trigger: el.current,
        start: "top 60%",
        end: "bottom 50%",
        animation: tl.current,
        onEnter: () => {
          tl.current.play();
        }
      });
    });

  return (
    <section className="contact" ref={el}>
      <div className="contact__img"></div>
      <Box className="contact__text">
        <Typography variant="h2">Get in touch with Us</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <ContactForm />
      </Box>
    </section>
  );
};

export default Contact;
