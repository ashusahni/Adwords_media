import { Divider, Text, useTheme } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
   const { isDark } = useTheme();
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
            bg: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'
         }}
      >
         <Box as={'footer'} css={{ width: '100%' }}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'start'}
               css={{
                  'gap': '$10',
                  'maxWidth': '1200px',
                  'margin': '0 auto',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {
                     justifyContent: 'space-between'
                  },
               }}
            >
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'start'}
               >
                  <Flex align={'center'} css={{ gap: '$2' }}>
                     <AcmeLogo />
                     <Text span css={{ fontWeight: 'bold', fontSize: '$lg', letterSpacing: '1px' }}>Adwords</Text>
                  </Flex>
                  <Text span css={{ color: '$accents6' }}>
                     Dominate your niche with social-first video strategies.
                  </Text>
               </Flex>
               <Flex
                  css={{ gap: '$5' }}
                  direction={'column'}
                  align={'start'}
               >
                  <Text h5>Services</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Paid Advertising
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Content Creation
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Strategy
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5' }}
                  direction={'column'}
                  align={'start'}
               >
                  <Text h5>Company</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           About Us
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Case Studies
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Careers
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5' }}
                  direction={'column'}
                  align={'start'}
               >
                  <Text h5>Connect</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Twitter
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           Instagram
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8', cursor: 'pointer', '&:hover': { color: '$primary' } }}>
                           LinkedIn
                        </Text>
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  'maxWidth': '1200px',
                  'margin': '0 auto',
                  '@md': {
                     px: '$0',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                     bg: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                  }}
               />
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Text span css={{ color: '$accents6', fontSize: '$sm' }}>
                     © 2026 Adwords Media. All rights reserved.
                  </Text>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents6', fontSize: '$sm', cursor: 'pointer' }}>
                        Terms
                     </Text>
                     <Text span css={{ color: '$accents6', fontSize: '$sm', cursor: 'pointer' }}>
                        Privacy
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
