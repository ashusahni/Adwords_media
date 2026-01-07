import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex
               direction={'column'}
               css={{
                  'py': '$20',
                  'gap': '$5',
                  '@sm': {
                     py: '$40',
                  },
               }}
            >
               <Box css={{maxWidth: '800px'}}>
                  <Text h2>From Awareness to Conversion</Text>
                  <Text
                     span
                     css={{
                        color: '$accents8',
                        pb: '$15',
                     }}
                  >
                     We don't just get views; we get customers. Our full-funnel approach ensures every video serves a specific purpose in your growth strategy.
                  </Text>
               </Box>

               <Flex
                  css={{
                     'py': '$10',
                     'gap': '$5',
                     'flexDirection': 'column',
                     '@sm': {
                        flexDirection: 'row',
                     },
                  }}
               >
                  <Box>
                     <Flex css={{gap: '$5'}} align={'center'}>
                        <FeatureIcon />
                        <Box>
                           <Text h4>Stop the Scroll</Text>
                           <Text span css={{color: '$accents8'}}>
                              Engaging hooks and visuals that grab attention instantly.
                           </Text>
                        </Box>
                     </Flex>
                  </Box>
                  <Box>
                     <Flex css={{gap: '$5'}} align={'center'}>
                        <FeatureIcon />
                        <Box>
                           <Text h4>Drive Action</Text>
                           <Text span css={{color: '$accents8'}}>
                              Clear CTAs and persuasive storytelling that leads to clicks and sales.
                           </Text>
                        </Box>
                     </Flex>
                  </Box>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0px', left: '0', mt: '$5'}}
         />
      </>
   );
};
