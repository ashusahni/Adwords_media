import { Button, Navbar, Text, Switch, useTheme } from '@nextui-org/react';
import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { AcmeLogo } from './logo';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';

export const Nav = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();

   return (
      <Navbar
         isBordered={false}
         variant="floating"
         maxWidth="md"
         css={{
            'zIndex': 9999,
            'mt': '$6',
            '& .nextui-navbar-container': {
               background: isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.8)',
               backdropFilter: 'blur(12px)',
               border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
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
            <Text b color="inherit" hideIn="xs" css={{ ml: '$4', fontSize: '$lg', letterSpacing: '0.5px', color: '$text' }}>
               Adwords
            </Text>
         </Navbar.Brand>

         <Navbar.Content hideIn="sm" activeColor="primary" variant="highlight-solid" css={{ gap: '$8' }}>
            <Navbar.Link href="#work" css={{ color: '$accents8', fontSize: '$sm', '&:hover': { color: '$text' } }}>Work</Navbar.Link>
            <Navbar.Link href="#services" css={{ color: '$accents8', fontSize: '$sm', '&:hover': { color: '$text' } }}>Services</Navbar.Link>
            <Navbar.Link href="#process" css={{ color: '$accents8', fontSize: '$sm', '&:hover': { color: '$text' } }}>Process</Navbar.Link>
            <Navbar.Link href="#pricing" css={{ color: '$accents8', fontSize: '$sm', '&:hover': { color: '$text' } }}>Pricing</Navbar.Link>
         </Navbar.Content>

         <Navbar.Content>
            <Navbar.Item>
               <Switch
                  checked={isDark}
                  onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                  size="sm"
                  iconOn={<SunIcon fill="currentColor" />}
                  iconOff={<MoonIcon fill="currentColor" />}
               />
            </Navbar.Item>
            <Navbar.Item>
               <Button
                  auto
                  rounded
                  as="a"
                  href="https://calendly.com"
                  target='_blank'
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
