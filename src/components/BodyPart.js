import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/images/phisical-trainning.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #0392F5', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '80px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Raleway" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
