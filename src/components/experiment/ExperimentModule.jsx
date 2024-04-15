import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AddIcon from '@mui/icons-material/Add';

import Iteration from "./iteration/Iteration";

export default function ExperimentModule({ expModule }) {
  const [visibleIterations, SetVisibleIterations] = useState(false)
  const toggleShowIterations = () => {
    SetVisibleIterations(prev => !prev )
  }
  return (
    <Box
      sx={{
        padding: '1rem',
        borderRadius: 2,
        backgroundColor: '#191919',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}
        onClick={toggleShowIterations}
      >
        <Typography component="h3" variant="h5" color="#BFBFBF">{ expModule.name }</Typography>
        <Typography component="h3" variant="h5" color="#BFBFBF">
          {expModule.locked !== null && expModule.locked && <LockOutlinedIcon /> }
          {expModule.locked !== null && !expModule.locked && <LockOpenOutlinedIcon /> }
        </Typography>
      </Box>

      {visibleIterations && (
        <Box>
          <Box
          sx={{
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5
              }}
            >
              {
                expModule.iterations && expModule.iterations.length > 0 && expModule.iterations.map((iteration, index) => (
                  <Iteration id={ index+1 } iteration={ iteration }  />
                ))
              }
              {
                expModule.iterations && expModule.iterations.length < 1 && (
                  <Typography>This experiment module has no iteration start by adding one</Typography>
                )
              }
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: 2
            }}
          >
            <Button variant="text" color="inherit"> <AddIcon /> Add itertation</Button>
            <Button variant="text" color="inherit">Reset</Button>
            <Button variant="text" color="inherit">Lock</Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
