import {Text, Button, Grid} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

interface FeatureBlockProps {
    title: string;
    desc: string;
    reverse?: boolean;
    gradient: string;
}

const FeatureBlock = ({ title, desc, reverse = false, gradient }: FeatureBlockProps) => (
   <Grid.Container gap={4} alignItems="center" direction={reverse ? 'row-reverse' : 'row'} css={{ mb: '$20' }}>
       <Grid xs={12} sm={6}>
           <Box 
               css={{
                   width: '100%', 
                   height: '400px', 
                   background: `linear-gradient(45deg, ${gradient})`, 
                   borderRadius: '20px',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                   position: 'relative',
                   overflow: 'hidden'
               }} 
            >
                <Box css={{ position: 'absolute', inset: 0, bg: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)' }} />
                {/* Simulated Content */}
                <Box css={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', height: '100px', bg: 'rgba(255,255,255,0.1)', borderRadius: '10px' }} />
            </Box>
       </Grid>
       <Grid xs={12} sm={6}>
           <Flex direction="column" css={{ px: '$8' }}>
               <Text h3 css={{ fontSize: '2.5rem', mb: '$4' }}>{title}</Text>
               <Text css={{ fontSize: '$lg', color: '$accents7', lineHeight: '1.7', mb: '$8' }}>{desc}</Text>
               <Button auto ghost css={{ color: '$white', borderColor: '$accents6' }}>Learn more</Button>
           </Flex>
       </Grid>
   </Grid.Container>
);

export const Features1 = () => {
   return (
      <Box css={{ px: '$6', py: '$20', maxWidth: '1200px', margin: '0 auto' }}>
         <Flex direction={'column'} align={'center'} css={{ mb: '$20' }}>
            <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', mb: '$4' }}>
               Our Methodology
            </Text>
            <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
               Complete Full-Funnel Dominance
            </Text>
         </Flex>

         <FeatureBlock 
             title="Data-Driven Strategy" 
             desc="We don't guess. We analyze millions of data points to identify the exact angles, hooks, and audiences that will scale your brand. Our proprietary AI models predict performance before we spend a dollar."
             gradient="#0072F5, #00C6FF"
         />
         
         <FeatureBlock 
             title="World-Class Creative" 
             desc="Ads that look like ads are ignored. We create native, high-engagement video content that stops the scroll and builds desire. Our studio pumps out 50+ creatives per week to find your winners."
             reverse={true}
             gradient="#7928CA, #FF0080"
         />
         
         <FeatureBlock 
             title="Aggressive Scaling" 
             desc="Once we find a winner, we don't hesitate. Our media buying infrastructure is built to handle $100k+ monthly spend per account while maintaining healthy ROAS. We scale vertically and horizontally."
             gradient="#FF4D4D, #F9CB28"
         />
      </Box>
   );
};
