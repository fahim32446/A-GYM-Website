import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      position="relative" p="20px"
      sx={{ mt: { lg: '130px', xs: '70px' }, ml: { sm: '50px' } }}>
      <Typography color="#FF2625"
        fontWeight="600" fontSize="26px" >
        Fitness Club
      </Typography>

      <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" LineHeight="35px" mb={3}>
        Check out the most effective exercise
      </Typography>
      <Button href="#exercise" variant="contained" color="error">Explore Exercises</Button>

      <Typography mt={20} fontSize="200px" fontWeight={600} color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
      >
        Exercises
      </Typography>

      <img className='hero-banner-img' src={HeroBannerImage} alt="HERO" />
    </Box>
  )
}

export default HeroBanner