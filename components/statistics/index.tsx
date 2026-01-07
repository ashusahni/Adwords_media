import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                  }}
               >
                  3–7x ROAS on short-form ads
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                  We create and scale data-driven social video campaigns that deliver measurable results.
               </Text>
            </Flex>
            <Flex
               direction={'column'}
               css={{
                  'py': '$10',
                  'gap': '$5',
                  '@sm': {
                     py: '$20',
                  },
               }}
            >
               <Flex
                  justify={'center'}
                  css={{
                     'gap': '$2',
                     'flexDirection': 'column',
                     'alignItems': 'center',
                     '@sm': {
                        flexDirection: 'row',
                        gap: '$20',
                     },
                  }}
               >
                  <Flex direction={'column'} align={'center'}>
                     <Text h2 css={{color: '$primary'}}>
                        3–7x
                     </Text>
                     <Text span css={{color: '$accents8'}}>
                        Average ROAS
                     </Text>
                  </Flex>
                  <Flex direction={'column'} align={'center'}>
                     <Text h2 css={{color: '$primary'}}>
                        Short-form
                     </Text>
                     <Text span css={{color: '$accents8'}}>
                        Expertise
                     </Text>
                  </Flex>
                  <Flex direction={'column'} align={'center'}>
                     <Text h2 css={{color: '$primary'}}>
                        Data-Driven
                     </Text>
                     <Text span css={{color: '$accents8'}}>
                        Campaigns
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0px', left: '0', mt: '$5'}}
         />
      </>
   );
};
