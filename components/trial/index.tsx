import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

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
               Ready to Build a Brand People Recognize?
            </Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$10',
                  textAlign: 'center',
                  maxWidth: '700px',
                  fontSize: '$lg',
                  lineHeight: '1.6'
               }}
            >
               Stop guessing what to post. Start building a social media presence that drives attention, trust, and inbound demand.
            </Text>

            <Button
               size="xl"
               as="a"
               href="https://calendly.com"
               target='_blank'
               css={{
                  backgroundColor: '$primary',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '$xl',
                  px: '$12',
                  py: '$8',
                  borderRadius: '99px',
                  boxShadow: '0 10px 30px rgba(0, 114, 245, 0.3)', // Updated to match primary color (blue-ish based on hero) likely
                  '&:hover': {
                     transform: 'translateY(-2px)',
                     boxShadow: '0 20px 40px rgba(0, 114, 245, 0.4)'
                  },
                  transition: 'all 0.3s ease'
               }}
            >
               Book Your Strategy Call →
            </Button>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0px', left: '0', mt: '$5' }}
         />
      </>
   );
};
