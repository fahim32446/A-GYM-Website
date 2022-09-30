import React, { useState } from 'react'
import Exercises from '../components/Exercises.js'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner.js'
import { Box } from '@mui/material'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all');

    
    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}
            />

        </Box>
    )
}

export default Home