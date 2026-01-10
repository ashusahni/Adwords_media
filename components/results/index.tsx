import { Card, Grid, Text, useTheme } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

// Mock Data for "Aceternity-like" dashboard Cards
const metrics = [
    { label: 'ORGANIC-FIRST SYSTEMS', value: 'Up to 100K', change: 'in 90 days', color: '$primary' },
    { label: 'QUALIFIED LEADS', value: '3–5X Growth', change: 'in first quarter', color: '$green600' },
    { label: 'CONTENT & FUNNELS', value: 'Stronger ROI', change: 'before scaling ads', color: '$blue600' },
];

interface MetricCardProps {
    metric: {
        label: string;
        value: string;
        change: string;
        color: string;
    }
}

const MetricCard = ({ metric }: MetricCardProps) => {
    const { isDark } = useTheme();
    return (
        <Card css={{
            bg: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            p: '$8',
            borderRadius: '$lg',
            transition: 'transform 0.3s ease, border 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid $primary',
                boxShadow: '0 10px 40px -10px rgba(204, 255, 0, 0.1)'
            }
        }}>
            <Card.Body>
                <Text span css={{ color: '$accents6', fontSize: '$sm', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {metric.label}
                </Text>
                <Flex align={'end'} css={{ gap: '$4', mt: '$2' }}>
                    <Text h2 css={{ m: 0, lineHeight: 1 }}>{metric.value}</Text>
                    <Text span css={{ color: '$primary', fontSize: '$sm', mb: '$1' }}>{metric.change}</Text>
                </Flex>
            </Card.Body>
        </Card>
    );
};

export const Results = () => {
    return (
        <Box css={{ py: '$20', px: '$6', maxWidth: '1200px', margin: '0 auto' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$16' }}>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    Growth Outcomes We’re Known For
                </Text>
                <Text span css={{ color: '$accents6', fontSize: '$xl', textAlign: 'center', mt: '$4', maxWidth: '800px' }}>
                    We work with startups that need momentum — fast, measurable, and sustainable.
                </Text>
            </Flex>

            <Grid.Container gap={2} justify="center">
                {metrics.map((m, i) => (
                    <Grid xs={12} sm={6} md={3} key={i}>
                        <MetricCard metric={m} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text css={{ color: '$accents5', fontSize: '$sm', textAlign: 'center', mt: '$10', maxWidth: '800px', mx: 'auto' }}>
                Results depend on market, product, and execution — our job is to maximize all three.
            </Text>
        </Box>
    );
};
