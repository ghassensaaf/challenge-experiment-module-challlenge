import { Box, Typography } from '@mui/material'

export default function Iteration({ id }) {
  return (
    <Box
      sx={{
        padding: '.5rem 1rem',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        gap: 3
      }}
    >
        <Typography component="h3" variant="h6" fontWeight={700} color="#4F4F4F">{ `EM-${id}` }</Typography>
        <Typography component="p" variant="body2" color="#FFF">Iteration name</Typography>
        <Box
          sx={{
            marginLeft: 'auto',
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            alignItems: 'center', // Changed this line
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
        </Box>
      
    </Box>
  )
}
