import { Button, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const CaseStudy = () => {
    return (
        <Box css={{ py: '$20', px: '$6', bg: 'rgba(255,255,255,0.02)' }}>
            <Box css={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Flex direction={'column'} align={'center'} css={{ mb: '$16' }}>
                    <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Case Study
                    </Text>
                    <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                        Scaling "TechFlow" to $1M/mo
                    </Text>
                </Flex>

                <Grid.Container gap={4} alignItems="center">
                    <Grid xs={12} md={6}>
                         <Box 
                            css={{
                                width: '100%', 
                                height: '500px', 
                                background: 'linear-gradient(135deg, #111 0%, #222 100%)', 
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} 
                         >
                             <Text css={{ color: '$accents4' }}>[ Graph / Chart Visualization ]</Text>
                         </Box>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Flex direction="column" css={{ gap: '$8', px: '$4' }}>
                            <Box>
                                <Text h4 css={{ color: '$accents5', textTransform: 'uppercase', mb: '$2' }}>The Challenge</Text>
                                <Text css={{ fontSize: '$lg', color: '$accents8' }}>
                                    TechFlow was stuck at $50k/mo revenue with a CPA that was creeping up. Their creatives were fatigued, and Facebook ads weren't scaling.
                                </Text>
                            </Box>
                            <Box>
                                <Text h4 css={{ color: '$primary', textTransform: 'uppercase', mb: '$2' }}>The Solution</Text>
                                <Text css={{ fontSize: '$lg', color: '$white' }}>
                                    We overhauled their entire creative strategy, introducing UGC-style ads and rapid landing page iteration. We implemented our "Hook-Retain-Convert" framework.
                                </Text>
                            </Box>
                            <Box>
                                <Text h4 css={{ color: '$secondary', textTransform: 'uppercase', mb: '$2' }}>The Result</Text>
                                <Text h3 css={{ fontSize: '2.5rem', mb: '$2' }}>
                                    20x Growth in 6 Months
                                </Text>
                                <Text css={{ fontSize: '$lg', color: '$accents8' }}>
                                    Revenue hit $1.1M/mo with a stabilized 3.8x ROAS. CPA dropped by 40%.
                                </Text>
                            </Box>
                            <Button auto shadow css={{ bg: '$white', color: 'black', fontWeight: 'bold', mt: '$4' }}>
                                Read Full Case Study
                            </Button>
                        </Flex>
                    </Grid>
                </Grid.Container>
            </Box>
        </Box>
    );
};
