import React from 'react';
import '../assets/stylesheets/Footer.scss';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <footer>
      <Container className='footer'>
        <a className="footer__logo" href="#" rel="noreferrer">
          <img src="https://via.placeholder.com/60" alt="" />
        </a>


        <Stack className='footer__info' direction="row" spacing={2} sx={{color:"#fff"}}>
          <Box className='footer__info__icons'>
            <EmailIcon sx={{fill:"#fff"}} />
            <Typography variant="body1">lisasimpson@gmail.com</Typography>
          </Box>
          <Box className='footer__info__icons'>
            <LocationOnIcon sx={{fill:"#fff"}} />
            <Typography variant="body1">Calle Falsa 123</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
        <Link href="#" underline="none">
          <TwitterIcon sx={{fill:"#fff"}}/>
        </Link>
        <Link href="#" underline="none">
          <FacebookIcon sx={{fill:"#fff"}}/>
        </Link>
        <Link href="#" underline="none">
          <InstagramIcon sx={{fill:"#fff"}} />
        </Link>
        </Stack>

      </Container>

    </footer>
  );
};

export default Footer;