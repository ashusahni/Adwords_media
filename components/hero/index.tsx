import { Button, Text, Container } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Hero = () => {
   return (
      <Box
         css={{
            'width': '100%',
            'minHeight': '100vh',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'center',
            'position': 'relative',
            'overflow': 'hidden',
            'pt': '$20', // Account for navbar
         }}
      >
         {/* Background Glows */}
         <Box
            css={{
               position: 'absolute',
               top: '-20%',
               left: '20%',
               width: '800px',
               height: '800px',
               background: 'radial-gradient(circle, rgba(0, 114, 245, 0.15) 0%, rgba(0,0,0,0) 70%)',
               zIndex: 0,
               pointerEvents: 'none',
            }}
         />
         <Box
            css={{
               position: 'absolute',
               bottom: '-20%',
               right: '-10%',
               width: '600px',
               height: '600px',
               background: 'radial-gradient(circle, rgba(147, 83, 211, 0.15) 0%, rgba(0,0,0,0) 70%)',
               zIndex: 0,
               pointerEvents: 'none',
            }}
         />

         <Container sm css={{ zIndex: 10, textAlign: 'center' }}>
            <Flex direction={'column'} align={'center'} css={{ gap: '$8' }}>


               <Text
                  h1
                  css={{
                     fontSize: '3rem',
                     '@sm': { fontSize: '4.5rem' },
                     lineHeight: '1.1',
                     fontWeight: '800',
                     letterSpacing: '-0.03em',
                     mb: 0,
                  }}
               >
                  Social Media Growth Partner <br />
                  <Text
                     span
                     css={{
                        textGradient: '45deg, $primary -20%, $secondary 50%',
                     }}
                  >
                     for Ambitious Brands
                  </Text>
               </Text>

               <Text
                  css={{
                     color: '$accents6',
                     maxWidth: '800px',
                     fontSize: '$lg',
                     lineHeight: '1.6',
                  }}
               >
                  When growth becomes a priority, social media can no longer be treated as an experiment.
                  <br /><br />
                  At AdwordsMedia, we help ambitious brands build strong, scalable social media systems through content, consistency, and clear execution. We don’t chase vanity metrics. We focus on traction that teams can confidently build their brand around.
               </Text>

               <Flex css={{ gap: '$6', mt: '$4' }} wrap={'wrap'} justify={'center'}>
                  <Button
                     auto
                     rounded
                     css={{
                        background: 'linear-gradient(90deg, $primary 0%, $secondary 100%)',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '$md',
                        px: '$12',
                        height: '50px',
                        boxShadow: '0 10px 30px -10px rgba(0, 114, 245, 0.6)',
                        '&:hover': {
                           transform: 'translateY(-2px)',
                           boxShadow: '0 20px 40px -10px rgba(0, 114, 245, 0.8)',
                        },
                        transition: 'all 0.3s ease'
                     }}
                  >
                     Start Scaling
                  </Button>
                  <Button
                     auto
                     rounded
                     bordered
                     css={{
                        borderColor: 'rgba(255,255,255,0.2)',
                        color: '$white',
                        fontWeight: '600',
                        fontSize: '$md',
                        px: '$12',
                        height: '50px',
                        '&:hover': {
                           bg: 'rgba(255,255,255,0.05)',
                           borderColor: '$white'
                        }
                     }}
                  >
                     View Case Studies
                  </Button>
               </Flex>
            </Flex>

            {/* 3D Dashboard Placeholder */}
            <Box
               css={{
                  mt: '$20',
                  width: '100%',
                  height: '400px', // Placeholder height
                  '@sm': { height: '600px' },
                  background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.4) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  boxShadow: '0 -20px 60px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  // 3D Tilt Effect
                  transform: 'perspective(1000px) rotateX(20deg) scale(0.9)',
                  opacity: 0.9,
               }}
            >
               {/* Mock UI Elements */}
               <Box css={{ position: 'absolute', top: '20px', left: '20px', right: '20px', height: '40px', bg: 'rgba(255,255,255,0.05)', borderRadius: '10px' }} />
               <Flex css={{ position: 'absolute', top: '80px', left: '20px', right: '20px', bottom: '20px', gap: '20px' }}>
                  <Box css={{ flex: 1, bg: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }} />
                  <Box css={{ flex: 2, bg: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }} />
               </Flex>

               {/* Overlay Gradient */}
               <Box css={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, #000 100%)' }} />
            </Box>
         </Container>
      </Box>
   );
};
