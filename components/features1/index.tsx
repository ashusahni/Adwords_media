import { Text, Button, Grid } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface FeatureBlockProps {
    title: string;
    desc: string | React.ReactNode;
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
                {typeof desc === 'string' ? (
                    <Text css={{ fontSize: '$lg', color: '$accents7', lineHeight: '1.7', mb: '$8' }}>{desc}</Text>
                ) : (
                    <Box css={{ mb: '$8' }}>{desc}</Box>
                )}
                <Button auto ghost css={{ color: '$white', borderColor: '$accents6' }}>Learn more</Button>
            </Flex>
        </Grid>
    </Grid.Container>
);

export const Features1 = () => {
    return (
        <Box css={{ px: '$6', py: '$20', maxWidth: '1200px', margin: '0 auto' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$20' }}>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    Why Brands Choose AdwordsMedia
                </Text>
                <Text span css={{ color: '$accents6', fontSize: '$xl', textAlign: 'center', mt: '$4', maxWidth: '800px' }}>
                    Most agencies focus on posting more content or spending more money. We focus on building a growth engine.
                </Text>
            </Flex>

            <FeatureBlock
                title="What Startups Are Tired Of"
                desc={
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            'Random content with no direction',
                            'Ads that burn budget without learning',
                            'Reports that don’t answer real business questions',
                            'Agencies that disappear after onboarding'
                        ].map((item, i) => (
                            <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: '#888' }}>
                                <span style={{ marginRight: '12px', color: '#ff4d4d', fontWeight: 'bold' }}>✕</span> {item}
                            </li>
                        ))}
                    </ul>
                }
                gradient="#FF4D4D, #F9CB28"
            />

            <FeatureBlock
                title="What We Do Differently"
                desc={
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            'Strategy aligned with your brand stage and long-term vision',
                            'Content designed to feel organic, but perform like ads',
                            'Content systems that scale what already works',
                            'Clear weekly updates and monthly growth milestones'
                        ].map((item, i) => (
                            <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: '#ccc' }}>
                                <span style={{ marginRight: '12px', color: '#0072F5', fontWeight: 'bold' }}>✓</span> {item}
                            </li>
                        ))}
                    </ul>
                }
                reverse={true}
                gradient="#0072F5, #00C6FF"
            />

            <Flex justify={'center'} css={{ mt: '$10' }}>
                <Text h3 css={{ textAlign: 'center', maxWidth: '800px' }}>
                    We operate like an extension of your internal growth team.
                </Text>
            </Flex>
        </Box>
    );
};
