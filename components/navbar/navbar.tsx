import {Button, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from './logo';

export const Nav = () => {
   return (
      <Navbar
         isBordered={false}
         variant="floating"
         maxWidth="md"
         css={{
            'zIndex': 9999,
            'mt': '$6',
            '& .nextui-navbar-container': {
               background: 'rgba(20, 20, 20, 0.6)',
               backdropFilter: 'blur(12px)',
               border: '1px solid rgba(255, 255, 255, 0.1)',
               borderRadius: '50px', // Pill shape
               maxWidth: '900px', // Constrain width
               margin: '0 auto',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
               height: '60px'
            },
         }}
      >
         <Navbar.Brand css={{ cursor: 'pointer' }}>
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs" css={{ml: '$4', fontSize: '$lg', letterSpacing: '0.5px', color: '$white'}}>
               ACME
            </Text>
         </Navbar.Brand>

         <Navbar.Content hideIn="sm" activeColor="primary" variant="highlight-solid" css={{gap: '$8'}}>
            <Navbar.Link href="#" css={{color: '$accents8', fontSize: '$sm', '&:hover': {color: '$white'}}}>Work</Navbar.Link>
            <Navbar.Link href="#" css={{color: '$accents8', fontSize: '$sm', '&:hover': {color: '$white'}}}>Services</Navbar.Link>
            <Navbar.Link href="#" css={{color: '$accents8', fontSize: '$sm', '&:hover': {color: '$white'}}}>Process</Navbar.Link>
            <Navbar.Link href="#" css={{color: '$accents8', fontSize: '$sm', '&:hover': {color: '$white'}}}>Pricing</Navbar.Link>
         </Navbar.Content>

         <Navbar.Content>
            <Navbar.Item>
               <Button 
                  auto 
                  rounded
                  href="#"
                  css={{
                      background: 'linear-gradient(90deg, $primary 0%, $secondary 100%)',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '$xs',
                      px: '$8',
                      height: '36px',
                      '&:hover': {
                          opacity: 0.9,
                          boxShadow: '0 0 20px rgba(0, 114, 245, 0.5)'
                      },
                      transition: 'all 0.2s ease'
                  }}
               >
                  Book Call
               </Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
