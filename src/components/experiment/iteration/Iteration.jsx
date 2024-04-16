import { useState } from 'react'

import { Box, Button, InputBase, Typography } from '@mui/material'

export default function Iteration({ id, iteration, edit, remove, isLocked, isLast }) {
  const [name, setName] = useState(iteration)
  const [showEdit, setShowEdit] = useState(false)
  const toggleShowEdit = () => {
    if (!isLocked)
      setShowEdit(prev => !prev)
  }
  return (
    <Box
      sx={{
        padding: '.5rem 1rem',
        backgroundColor: '#000',
        borderRadius : (id === 1 && isLast) ? '.75rem' : isLast ? '0 0 .75rem .75rem' : id === 1 ? '.75rem .75rem 0 0' : 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          gap: 3
        }}
        onClick={toggleShowEdit}
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
          
          { !showEdit && (<Typography component="p" variant="body2" color="#FFF" sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 1,
          }}>{ name }</Typography>)}
          { showEdit && (
            <InputBase
              sx={{ 
                flex: 1, 
                color: "white",
                fontSize: 14
              }}
              placeholder="Editing iteration..."
              value={name}
              onChange={(e)=> setName(e.target.value)}
              autoFocus
            />
          )}
          { !showEdit && (<Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'row',
              gap: 3,
              alignItems: 'center', 
            }}
          >
            <Typography component="p" variant="body2" color="#BFBFBF">Selection</Typography>
            <Box
              sx={{
                width: '12px',
                height: '12px',
                backgroundColor: '#04A53C',
                borderRadius:'50%'
              }}
            />
          </Box>)}
      </Box>
      {showEdit && (
        <>
          <Box
            sx={{
              marginLeft: '3.9rem',
              marginTop: '.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              justifyItems: 'flex-start'
              // overflowWrap: 'anywhere'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1
              }}
            >
              <Typography
                fontSize={12}
                sx={{
                  padding: '.5rem',
                  border: name.length < 10 ? '1px solid #04A53C' : '1px solid #FFF',
                  borderRadius: 2,
                  color:  (name.length < 10) ? '#04A53C' : '#FFF',

                }}
              >
                SHORT
              </Typography>
              <Typography
                fontSize={12}
                sx={{
                  padding: '.5rem',
                  border: (name.length >= 10 && name.length < 20) ? '1px solid #04A53C' : '1px solid #FFF',
                  borderRadius: 2,
                  color:  (name.length >= 10 && name.length < 20) ? '#04A53C' : '#FFF',
                }}
              >
                MEDIUM LENGTH
              </Typography>
            </Box> 
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1
              }}
            >
              <Typography
                fontSize={12}
                sx={{
                  padding: '.5rem',
                  border: (name.length >= 20) ? '1px solid #04A53C' : '1px solid #FFF',
                  borderRadius: 2,
                  color:  (name.length >= 20) ? '#04A53C' : '#FFF',
                }}
              >
                {'VERY VERY VERY LONG (UP TO 35 CHAR)'}
              </Typography>
            </Box>
          </Box>

          <hr 
            style={{
              marginLeft: '4rem',
              borderColor: '#8F8F8F'
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: 3
            }}
          >
            <Button
              variant="text"
              color='inherit'
              onClick={()=> {
                edit(id-1 , name)
                setShowEdit(false)
              }}
            >
              Done
            </Button>
            <Button
              variant="text"
              color='inherit'
              onClick={() => remove(id-1)}
            >
              REMOVE
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
