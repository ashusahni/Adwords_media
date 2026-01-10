import { Button, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { Svg } from '../styles/svg'; // Assuming Svg component exists or I'll use a standard svg tag

// Play Icon Component
const PlayIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" fill="white" />
    </svg>
);

const reels = [
    { title: "The '3-Second' Hook", views: '2.4M Views', videoUrl: 'https://drive.google.com/file/d/1bhSyQ7DHEcubCBQjgTzRLwQEp4o8_lIv/preview' },
    { title: "UGC Product Tease", views: '850K Views', videoUrl: 'https://drive.google.com/file/d/14bDof4QbHI3E9WInWCnZoQNGTSEL7apu/preview' },
    { title: "Viral Trend Jacking", views: '1.2M Views', videoUrl: 'https://drive.google.com/file/d/1hXyq2mPEM1yHsXiRp_cKMqaEwJhRLr2l/preview' },
    { title: "Founder Story", views: '3.1M Views', videoUrl: 'https://drive.google.com/file/d/10GIR-36y0NWHGSFA88BPh6T8UptecB9R/preview' }
];

export const ReelsShowcase = () => {
    return (
        <Box css={{ py: '$20', px: '$6', maxWidth: '1200px', margin: '0 auto' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$16' }}>
                <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Creative Showcase
                </Text>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    Content Formats That Drive Real Attention

                </Text>
                <Text css={{ color: '$accents6', maxWidth: '600px', textAlign: 'center', mt: '$4' }}>
                    High-performing video formats designed to build trust, engagement, and brand recall on social media.

                </Text>
            </Flex>

            <Grid.Container gap={4} justify="center">
                {reels.map((reel, i) => (
                    <Grid xs={12} sm={6} md={3} key={i}>
                        <Box
                            css={{
                                width: '100%',
                                aspectRatio: '9/16',
                                borderRadius: '24px',
                                border: '4px solid #222',
                                background: '#000',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px) scale(1.02)',
                                    boxShadow: '0 30px 60px -15px rgba(0, 114, 245, 0.3)',
                                    border: '4px solid $primary'
                                }
                            }}
                        >
                            <iframe
                                src={reel.videoUrl}
                                style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
                                allow="autoplay"
                            />
                            {/* Overlay UI */}
                            <Flex
                                direction="column"
                                justify="between"
                                css={{ height: '100%', p: '$6', bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none' }}
                            >
                                <Flex justify="end">
                                    <Box css={{ width: '30px', height: '30px', borderRadius: '50%', bg: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' }} />
                                </Flex>

                                <Flex direction="column" align="center" css={{ mb: '$4' }}>

                                    <Text h4 css={{ color: 'white', mb: 0, textAlign: 'center' }}>{reel.title}</Text>
                                    <Text css={{ color: '$primary', fontWeight: 'bold' }}>{reel.views}</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Grid>
                ))}
            </Grid.Container>

            <Flex justify="center" css={{ mt: '$12' }}>
                <Button
                    auto
                    ghost
                    as="a"
                    href="#case-studies"
                    css={{ color: '$white', borderColor: '$accents6' }}
                >
                    View Creative Library
                </Button>
            </Flex>
        </Box>
    );
};
