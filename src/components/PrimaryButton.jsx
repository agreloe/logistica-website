import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({bgColor, border}) => ({
    backgroundColor: bgColor,
    padding: "12px 32px",
    borderRadius: "0px",
    textTransform: "none",
    fontSize: "1rem",
    color: "#fff",
    border: border ? `${border}` : "none",

    '&:hover': {
        backgroundColor: bgColor,
        filter: "brightness(110%)",
    },
  }));

const PrimaryButton = ({children, bgColor, border}) => {

  return (
    <ColorButton bgColor={bgColor} border={border}>{children}</ColorButton>
  );
};

export default PrimaryButton;