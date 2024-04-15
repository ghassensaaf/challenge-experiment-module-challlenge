import { useState } from 'react'

import { Box, Button, Typography } from '@mui/material'

import ExperimentModule from './components/experiment/ExperimentModule'

import { defaultExpModule } from './constants'

import './App.css'

function App() {
  const [expModules, setExpModules] = useState([])

  const handleAddExpModule = () => {
    setExpModules((prev) => [...prev, defaultExpModule] )
  }
  return (
    <Box>
      {/* Actions */}
      <Box
        sx={{
          display: 'flex',
          flexDirection:'row-reverse',
          marginBottom: '2rem'
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            textTransform: 'none'
          }}
          onClick={handleAddExpModule}
        >
          Add module
        </Button>
      </Box>
      {/* main */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {expModules && expModules.length > 0 && expModules.map((expModule, index) => (
          <ExperimentModule key={index} expModule={expModule} />
        ))}

        {expModules && expModules.length < 1 && (
          <Typography> There are no experiment modules at the moment, start by adding one using the button above. </Typography>
        )}
      </Box>
      
    </Box> 
  )
}

export default App
