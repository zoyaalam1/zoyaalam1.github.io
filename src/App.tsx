import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ mb: 2, color: 'text.secondary' }}>
        Master Shani is at work ༼ つ ◕_◕ ༽つ
      </Typography>
    </Container>
  );
}
