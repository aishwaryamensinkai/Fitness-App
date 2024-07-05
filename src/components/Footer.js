import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '100px' }} />
      <Stack direction="row" gap="20px">
        <Link
          href="https://rapidapi.com/"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Typography variant="body1" color="textPrimary">
            RapidAPI Home
          </Typography>
        </Link>
        <Link
          href="https://rapidapi.com/pricing"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Typography variant="body1" color="textPrimary">
            Pricing
          </Typography>
        </Link>
        <Link
          href="https://rapidapi.com/hub"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Typography variant="body1" color="textPrimary">
            API Hub
          </Typography>
        </Link>
        <Link
          href="https://rapidapi.com/blog"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Typography variant="body1" color="textPrimary">
            Blog
          </Typography>
        </Link>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
