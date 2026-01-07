import { Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const About = () => {
   return (
      <Box css={{ py: '$20', px: '$6', maxWidth: '1000px', margin: '0 auto' }}>
          <Flex direction={'column'} align={'center'} css={{ textAlign: 'center', mb: '$10' }}>
               <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Our Philosophy
               </Text>
               <Text h2 css={{ fontSize: '2.5rem', '@sm': { fontSize: '3.5rem' }, mb: '$6' }}>
                  We Don't Guess. We Scale.
               </Text>
               <Text css={{ color: '$accents7', fontSize: '$lg', lineHeight: '1.8', maxWidth: '800px' }}>
                  Most agencies rely on "best practices" from 2019. We rely on real-time data and aggressive creative testing.
                  Our team of media buyers, editors, and strategists work in unison to turn your ad spend into a predictable revenue engine.
                  We aren't a service provider; we are your growth partner.
               </Text>
          </Flex>
          
          <Grid.Container gap={4} justify="center">
              <Grid xs={12} sm={4}>
                  <Box css={{ textAlign: 'center' }}>
                      <Text h3 css={{ color: '$white' }}>Data-First</Text>
                      <Text css={{ color: '$accents6' }}>Every decision is backed by metrics, not gut feelings.</Text>
                  </Box>
              </Grid>
              <Grid xs={12} sm={4}>
                  <Box css={{ textAlign: 'center' }}>
                      <Text h3 css={{ color: '$white' }}>Creative-Led</Text>
                      <Text css={{ color: '$accents6' }}>The best targeting is a great video that resonates.</Text>
                  </Box>
              </Grid>
              <Grid xs={12} sm={4}>
                  <Box css={{ textAlign: 'center' }}>
                      <Text h3 css={{ color: '$white' }}>Transparency</Text>
                      <Text css={{ color: '$accents6' }}>You own your data. You see exactly where every dollar goes.</Text>
                  </Box>
              </Grid>
          </Grid.Container>
      </Box>
   );
};
