import { useState } from 'react'

import { Box, InputBase, Typography } from '@mui/material'

export default function AddIteration({ id, handleAddIteration, name, setName }) {

  return (
    <form 
      onSubmit={(e) => {
        handleAddIteration(e, name);
      }}
    >
      <Box
        sx={{
          padding: '.5rem 1rem',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          borderRadius : id === 1 ? '0.75rem' : '0 0 .75rem .75rem',
          gap: 3
        }}
      >
            <Typography
              component="h3"
              variant="h6"
              fontSize={16}
              fontWeight={700}
              color="#4F4F4F"
            >
              { `EM-${id}` }
            </Typography>

            <InputBase
              sx={{ 
                flex: 1, 
                color: "white",
                fontSize: 14
              }}
              placeholder="Adding iteration..."
              value={name}
              onChange={(e)=> {
                if(e.target.value.length<=35)
                  setName(e.target.value)
              }}
              autoFocus
            />
      </Box>
    </form>
  )
}
