import { Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const steps = [
    { num: '01', title: 'Research & Social Intelligence', desc: 'We study your niche, competitors, audience behavior, and current social presence. This helps us identify content gaps, winning formats, and storytelling angles that actually resonate.' },
    { num: '02', title: 'Content Strategy & Direction', desc: 'We define your brand voice, messaging pillars, and content roadmap. This ensures consistency across posts, reels, and stories while keeping the brand authentic.' },
    { num: '03', title: 'Content Production', desc: 'Our team produces scroll-stopping social media content — short-form videos, UGC-style creatives, and platform-native formats designed to feel organic, not forced.' },
    { num: '04', title: 'Editing & Optimization', desc: 'Each piece of content is edited for clarity, retention, and impact. We refine hooks, pacing, and structure to maximize engagement on social platforms.' },
    { num: '05', title: 'Publishing & Execution', desc: 'Content is delivered in ready-to-post formats, aligned with platform best practices. Everything is built for consistency, frequency, and brand recall.' },
    { num: '06', title: 'Insights & Iteration', desc: 'We analyze engagement, reach, and audience response to understand what’s working. These insights guide future content and help scale your social presence sustainably.' }
];

export const HowItWorks = () => {
    return (
        <Box css={{ py: '$20', px: '$6', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$20' }}>
                <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Our Process
                </Text>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    High-Impact Social Media Growth
                </Text>
                <Text span css={{ color: '$accents6', fontSize: '$xl', textAlign: 'center', mt: '$4', maxWidth: '800px' }}>
                    We follow a clear, execution-driven social media process inspired by how modern, high-growth brands build visibility and trust online. Every step is focused purely on social media — no performance marketing, no distractions.
                </Text>
            </Flex>

            {/* Central Glowing Line (Desktop) */}
            <Box
                css={{
                    position: 'absolute',
                    left: '20px',
                    top: '280px',
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
