import { Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const steps = [
    { num: '01', title: 'Deep Audit', desc: 'We tear down your ad account, creative history, and funnel. We find the "leaky buckets" costing you money.' },
    { num: '02', title: 'Strategy & Angles', desc: 'We build the roadmap: new creative hooks, audience avatars, and a testing schedule designed for rapid feedback.' },
    { num: '03', title: 'Creative Sprint', desc: 'Our studio produces 20+ assets in week 1. Native UGC, high-production studio, and static hybrids.' },
    { num: '04', title: 'Launch & Scale', desc: 'We deploy. We kill losers fast. We scale winners aggressively using our "Horizontal Scale" method.' }
];

export const HowItWorks = () => {
    return (
        <Box css={{ py: '$20', px: '$6', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
             <Flex direction={'column'} align={'center'} css={{ mb: '$20' }}>
                <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    The Roadmap
                </Text>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    From Audit to Exit
                </Text>
            </Flex>

            {/* Central Glowing Line (Desktop) */}
            <Box 
                css={{ 
                    position: 'absolute', 
                    left: '20px', 
                    top: '200px', 
                    bottom: '100px', 
                    width: '4px', 
                    background: 'linear-gradient(180deg, $primary 0%, $secondary 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(0, 114, 245, 0.5)',
                    display: 'none',
                    '@sm': {
                        display: 'block',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }
                }} 
            />

            <Flex direction="column" css={{ gap: '$12', position: 'relative' }}>
                {steps.map((step, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <Flex 
                            key={i} 
                            css={{ 
                                flexDirection: 'column',
                                '@sm': {
                                    flexDirection: isEven ? 'row' : 'row-reverse',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '$20'
                                }
                            }}
                        >
                            {/* Content Side */}
                            <Box 
                                css={{ 
                                    flex: 1, 
                                    position: 'relative',
                                    '@sm': { textAlign: isEven ? 'right' : 'left' } 
                                }}
                            >
                                <Box 
                                    css={{ 
                                        bg: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                        p: '$8',
                                        borderRadius: '20px',
                                        display: 'inline-block', // Wraps content
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            border: '1px solid $primary',
                                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                        }
                                    }}
                                >
                                    <Text span css={{ 
                                        color: 'transparent', 
                                        WebkitBackgroundClip: 'text', 
                                        backgroundImage: 'linear-gradient(45deg, $primary, $secondary)',
                                        fontSize: '$xl', 
                                        fontWeight: '900', 
                                        display: 'block', 
                                        mb: '$2' 
                                    }}>
                                        STEP {step.num}
                                    </Text>
                                    <Text h3 css={{ fontSize: '1.8rem', mb: '$4' }}>{step.title}</Text>
                                    <Text css={{ color: '$accents7', lineHeight: '1.6', maxWidth: '350px' }}>{step.desc}</Text>
                                </Box>
                            </Box>

                            {/* Center Node */}
                            <Box 
                                css={{ 
                                    width: '20px', 
                                    height: '20px', 
                                    bg: '$black',
                                    border: '4px solid $primary',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: '12px',
                                    boxShadow: '0 0 10px $primary',
                                    zIndex: 2,
                                    '@sm': {
                                        position: 'relative',
                                        left: 'auto',
                                        width: '24px',
                                        height: '24px',
                                        border: '6px solid $primary',
                                    }
                                }} 
                            />

                            {/* Empty Side for Balance */}
                            <Box css={{ flex: 1, display: 'none', '@sm': { display: 'block' } }} />
                        </Flex>
                    );
                })}
            </Flex>
        </Box>
    );
};
