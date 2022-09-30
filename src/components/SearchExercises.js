import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData.js'

import HorizontalScrollBar from './HorizontalScrollBar.js'


const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearcher] = useState('')
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handelSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearcher('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt={0} p="20px">
      <Typography fontSize="20" fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '24px' } }}
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb={10}>
        <TextField
          sx={{
            input: {
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px'
            },
            width:
              { lg: '800px', xs: '250px' },

            backgroundColor: '#ffffff'
          }}
          height="76px"
          value={search}
          onChange={(e) => { setSearcher(e.target.value.toLowerCase()) }}
          placeholder="Search Exercises"
          type="text"
        />

        <Button className='search-btn'
          sx={{
            backgroundColor: '#FF2625', color: '#fff', textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handelSearch} > Search Here</Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

        <HorizontalScrollBar data={bodyParts} isBodyPart setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>

    </Stack>
  )
}

export default SearchExercises