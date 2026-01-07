import {Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';
import {Box} from '../styles/box';

export const Trusted = () => {
   return (
      <Box css={{ py: '$12', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text 
               css={{
                  color: '$accents6', 
                  textTransform: 'uppercase', 
                  fontSize: '$xs', 
                  letterSpacing: '2px', 
                  mb: '$8',
                  textAlign: 'center'
               }}
            >
               Trusted by the fastest growing brands
            </Text>
            
            <Grid.Container
               gap={4}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  'opacity': 0.6,
                  'transition': 'opacity 0.3s ease',
                  '&:hover': {
                      opacity: 1
                  }
               }}
            >
               {[1, 2, 3, 4, 5, 6].map((i) => (
                   <Grid key={i} xs={6} sm={4} md={2} justify="center">
                      <Flex align={'center'} justify={'center'} css={{ gap: '$2', grayscale: '100%' }}>
                         <AcmeLogo />
                         <Text weight={'semibold'} span size={'$lg'} css={{ color: '$accents8' }}>
                            Brand {i}
                         </Text>
                      </Flex>
                   </Grid>
               ))}
            </Grid.Container>
         </Flex>
      </Box>
   );
};
