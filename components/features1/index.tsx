import { Text, Button, Grid, useTheme } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface FeatureBlockProps {
    title: string;
    desc: string | React.ReactNode;
    reverse?: boolean;
    imageSrc: string;
}

const FeatureBlock = ({ title, desc, reverse = false, imageSrc }: FeatureBlockProps) => (
    <Grid.Container gap={4} alignItems="center" direction={reverse ? 'row-reverse' : 'row'} css={{ mb: '$20' }}>
        <Grid xs={12} sm={6}>
            <Box
                css={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={imageSrc}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
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
            </Flex>
        </Grid>
    </Grid.Container>
);

export const Features1 = () => {
    const { isDark } = useTheme();
    return (
        <Box css={{ px: '$6', py: '$20', maxWidth: '1200px', margin: '0 auto' }} id="services">
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
                            <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: isDark ? '#888' : '#666' }}>
                                <span style={{ marginRight: '12px', color: '#ff4d4d', fontWeight: 'bold' }}>✕</span> {item}
                            </li>
                        ))}
                    </ul>
                }
                imageSrc="/social-intelligence.png"
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
                            <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: isDark ? '#ccc' : '#333' }}>
                                <span style={{ marginRight: '12px', color: '#0072F5', fontWeight: 'bold' }}>✓</span> {item}
                            </li>
                        ))}
                    </ul>
                }
                reverse={true}
                imageSrc="/content-strategy.png"
            />

            <Flex justify={'center'} css={{ mt: '$10' }}>
                <Text h3 css={{ textAlign: 'center', maxWidth: '800px' }}>
                    We operate like an extension of your internal growth team.
                </Text>
            </Flex>
        </Box>
    );
};
