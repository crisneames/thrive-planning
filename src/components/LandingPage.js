import React, { useMemo, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const LandingPage = () => {

  return (
    <Container fluid='md'>
        <div style={{height: '68px'}} className='font-face-gm text-center'>
            <div>
                <h1 style={{fontSize: '3.2rem'}} className='pt-4'>Have you <b style={{color: 'white'}}>THRĪV'D</b> today?</h1>
                <p style={{fontSize: '1.3rem', color: 'white'}}>A personalized and stategic plan to identify your emotional triggers,<br /> coping skills, and social support system.</p>
            </div>
            <Button href="/login" style={{padding: '1rem 1rem', fontSize: '1rem'}}>Get Started</Button>
        </div>
    </Container>
  );
};

export default LandingPage;
