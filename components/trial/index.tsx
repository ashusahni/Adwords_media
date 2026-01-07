import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
               bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(204, 255, 0, 0.05) 100%)'
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h2 css={{ fontSize: '2.5rem', '@sm': { fontSize: '3.5rem' }, textAlign: 'center' }}>
               Ready to Dominate Your Niche?
            </Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$10',
                  textAlign: 'center',
                  maxWidth: '600px',
                  fontSize: '$lg'
               }}
            >
               Stop guessing. Start scaling. Join the brands that are winning with video.
            </Text>

            <Button
                size="xl"
                css={{
                    backgroundColor: '$primary',
                    color: 'black',
                    fontWeight: '800',
                    fontSize: '$xl',
                    px: '$12',
                    py: '$8',
                    borderRadius: '99px',
                    boxShadow: '0 10px 30px rgba(204, 255, 0, 0.3)'
                }}
            >
                Book Your Strategy Call
            </Button>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0px', left: '0', mt: '$5'}}
         />
      </>
   );
};
