import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  return (
    <Stack className='bodyPart-card'
      type="button"
      alignItems='center'
      justifyContent='center'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: "pointer",
        gap: '50px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />

      <Typography fontSize="24px" fontWeight="bold">{item} </Typography>
    </Stack>
  )
}

export default BodyPart