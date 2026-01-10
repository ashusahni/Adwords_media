import { Button, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface PlanProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
}

const PlanColumn = ({ title, price, description, features, recommended = false }: PlanProps) => (
    <Flex
        direction="column"
        css={{
            flex: 1,
            p: '$10',
            position: 'relative',
            bg: recommended ? 'rgba(255,255,255,0.03)' : 'transparent',
            transition: 'background 0.3s ease',
            '&:hover': {
                bg: 'rgba(255,255,255,0.05)'
            }
        }}
    >
        {recommended && (
            <Box css={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, $primary, $secondary)'
            }} />
        )}

        <Box css={{ mb: '$8' }}>
            <Flex justify={'between'} align={'center'}>
                <Text h4 css={{ color: recommended ? '$white' : '$accents6', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '$xs', m: 0 }}>
                    {title}
                </Text>
                {recommended && (
                    <Text span css={{ fontSize: '10px', fontWeight: 'bold', bg: '$primary', color: 'black', px: '6px', py: '2px', borderRadius: '4px' }}>
                        POPULAR
                    </Text>
                )}
            </Flex>
            <Text h2 css={{ fontSize: '2.5rem', lh: 1, mt: '$4', mb: '$2' }}>{price}</Text>
            <Text css={{ color: '$accents6', fontSize: '$sm', mb: '$6', lineHeight: '1.4' }}>
                {description}
            </Text>

            <Button
                auto
                css={{
                    width: '100%',
                    bg: recommended ? '$white' : 'rgba(255,255,255,0.1)',
                    color: recommended ? 'black' : '$white',
                    fontWeight: '700',
                    border: '1px solid rgba(255,255,255,0.1)',
                    '&:hover': {
                        bg: recommended ? '$accents2' : 'rgba(255,255,255,0.2)'
                    }
                }}
            >
                Book a Strategy Call →
            </Button>
        </Box>

        <Box as={'ul'} css={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '$3' }}>
            {features.map((feature, i) => (
                <Flex key={i} css={{ gap: '$3' }} align={'center'}>
                    <CheckIcon fill={recommended ? "#0072F5" : "#333"} width={16} height={16} />
                    <Text span css={{ color: '$accents7', fontSize: '$sm' }}>
                        {feature}
                    </Text>
                </Flex>
            ))}
        </Box>
    </Flex>
);

export const Plans = () => {
    return (
        <Box css={{ py: '$24', px: '$6', id: 'pricing', maxWidth: '1200px', margin: '0 auto' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$16' }}>
                <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Pricing
                </Text>
                <Text h2 css={{ fontSize: '3rem', '@sm': { fontSize: '4rem' }, textAlign: 'center' }}>
                    Simple & Transparent
                </Text>
            </Flex>

            <Box
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    '@md': { flexDirection: 'row' },
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backdropFilter: 'blur(20px)',
                    bg: 'rgba(5,5,5,0.6)'
                }}
            >
                <PlanColumn
                    title="Growth Launch"
                    price="₹2,00,000 / month"
                    description="Designed for brands ready to build consistency and momentum."
                    features={[
                        "10 Short-Form Videos (Reels / Shorts)",
                        "5 Static Creatives (Carousels / Graphics)",
                        "Personalized Branding",
                        "Script Writing",
                        "Content Research",
                        "Content Strategy",
                        "Video Editing",
                        "Production Support",
                        "Graphic Designing",
                        "Dedicated Account Manager",
                        "Monthly Performance Review",
                        "Clear Content Calendar"
                    ]}
                />
                {/* Divider Desktop */}
                <Box css={{ width: '1px', bg: 'rgba(255,255,255,0.1)', display: 'none', '@md': { display: 'block' } }} />
                {/* Divider Mobile */}
                <Box css={{ height: '1px', bg: 'rgba(255,255,255,0.1)', display: 'block', '@md': { display: 'none' } }} />

                <PlanColumn
                    title="Growth Scale"
                    price="₹3,00,000 / month"
                    description="Built for brands aiming to dominate attention and accelerate growth."
                    recommended={true}
                    features={[
                        "20 Short-Form Videos (Reels / Shorts)",
                        "10 Static Creatives (Carousels / Graphics)",
                        "Personalized Branding",
                        "Script Writing",
                        "Content Research",
                        "Content Strategy",
                        "Video Editing",
                        "Production Support",
                        "Graphic Designing",
                        "Dedicated Account Manager",
                        "Dedicated Content Team",
                        "Monthly Performance Review",
                        "Advanced Content Calendar"
                    ]}
                />
            </Box>
        </Box>
    );
};