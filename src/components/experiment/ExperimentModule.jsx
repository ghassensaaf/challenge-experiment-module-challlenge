import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import { FaLockOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import Iteration from "./iteration/Iteration";
import AddIteration from "./iteration/AddIteration";

export default function ExperimentModule({ expModule }) {
  const [iterations, setIterations] = useState([])
  const [isLocked, setIsLocked] = useState(null)
  const [showAddIteration, setShowAddIteration] = useState(false)
  const [visibleIterations, setVisibleIterations] = useState(false)
  const [name, setName] = useState('')

  const handleAddIteration = (event = null, iteration = `Iteration name ${iterations.length + 1}`) => {
    if (event)
      event.preventDefault()
    if (iteration.length > 0){
      setIterations(prev => [...prev, iteration])
      setShowAddIteration(false)
      setName('')
      if(isLocked === null)
        setIsLocked(false)
    }
  }

  const handleEditIteration = (index, updatedIteration) => {
    const updatedIterations = [...iterations]
    updatedIterations[index] = updatedIteration
    setIterations(updatedIterations)
  }
  
  const handleDeleteIteration = (index) => {
    console.log("Deleting item at index:", index);
    let updatedIterations = [...iterations];
    console.log(updatedIterations)
    updatedIterations.splice(index, 1);
    setIterations(updatedIterations);
  }

  const handleShowAddIteration = () => {
    setShowAddIteration(prev => !prev)
  }

  const toggleShowIterations = () => {
    setVisibleIterations(prev => !prev )
  }

  const toggleIsLocked = () => {
    setIsLocked(prev => !prev)
  }

  return (
    <Box
      sx={{
        padding: '1rem',
        borderRadius: 2,
        backgroundColor: '#191919',
      }}
      data-testid="experiment-module"
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
        <Typography component="h3" variant="h5" color={(isLocked !== null && !isLocked && iterations.length > 0 ) ? '#FFF' : '#BFBFBF'}>{ expModule.name }</Typography>
        <Typography component="h3" variant="h5" color="#9F9F9F">
          {isLocked !== null && isLocked && <FaLock /> }
          {isLocked !== null && !isLocked && <FaLockOpen /> }
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
                iterations && iterations.length > 0 && iterations.map((iteration, index) => (
                  <Iteration key={iteration} id={index + 1} iteration={iteration} edit={handleEditIteration} remove={handleDeleteIteration} isLocked={isLocked} />
                ))
              }
              {
                iterations && iterations.length < 1 && !showAddIteration && (
                  <Typography>This experiment module has no iteration start by adding one</Typography>
                )
              }
              { 
                showAddIteration && <AddIteration id={ iterations.length+1 } handleAddIteration={ handleAddIteration } name={name} setName={setName} />
              }
            </Box>
          </Box>
          { showAddIteration && (
            <>
              <Box
                sx={{
                  padding: '2rem',
                  backgroundColor: "#000",
                  borderRadius: 3
                }}
              >
                <Typography color="#BFBFBF">
                  {'To add new iteration, start typing a prompt or '}
                  <Typography 
                    component={'span'}
                    sx={{
                      display: 'inline-block',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                    onClick={handleAddIteration}
                  >
                    generate
                  </Typography> 
                  {' one'}.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  gap: 2,
                  marginTop: '1rem'
                }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  onClick={()=>{ handleAddIteration(null, name)}}
                > 
                  <Typography color="#BFBFBF" fontSize={14} fontWeight={700}>Done</Typography>
                </Button>
                <Button 
                  variant="text"
                  onClick={()=> {
                    setShowAddIteration(false)
                    setName('')
                  }}
                >
                  <Typography color="#BFBFBF" fontSize={14}>Cancel</Typography>
                </Button>
              </Box>
            </>
          )}
          {!showAddIteration && (<Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: 2
            }}
          >
            <Button
              // variant="text"
              color="inherit"
              onClick={handleShowAddIteration}
              disabled={isLocked}
              sx={{
                '&:disabled': {
                  color: '#9F9F9F', // Change to the desired text color for disabled state
                },
              }}
            > 
              <FaPlus />
              Add iteration
            </Button>
            <Button 
              variant="text"
              color="inherit"
              onClick={() => setIterations([])}
              disabled={isLocked}
              sx={{
                '&:disabled': {
                  color: '#9F9F9F', // Change to the desired text color for disabled state
                },
              }}
            >
              Reset
            </Button>
            <Button 
              variant="text"
              color="inherit"
              onClick={toggleIsLocked}
              disabled={iterations.length < 1}
              sx={{
                '&:disabled': {
                  color: '#9F9F9F', // Change to the desired text color for disabled state
                },
              }}
            >
              {isLocked ? 'Unlock' : 'Lock'}
            </Button>
          </Box>)}
        </Box>
      )}
    </Box>
  )
}
