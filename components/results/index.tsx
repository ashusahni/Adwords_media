import { Card, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

// Mock Data for "Aceternity-like" dashboard Cards
const metrics = [
    { label: 'Total Ad Spend Managed', value: '$15M+', change: '+12%', color: '$primary' },
    { label: 'Average ROAS', value: '4.2x', change: '+25%', color: '$green600' },
    { label: 'Leads Generated', value: '50k+', change: '+18%', color: '$blue600' },
    { label: 'Revenue Generated', value: '$63M+', change: '+30%', color: '$yellow600' },
];

interface MetricCardProps {
    metric: {
        label: string;
        value: string;
        change: string;
        color: string;
    }
}

const MetricCard = ({ metric }: MetricCardProps) => (
    <Card css={{
        bg: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
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

export const Results = () => {
    return (
        <Box css={{ py: '$20', px: '$6', maxWidth: '1200px', margin: '0 auto' }}>
            <Flex direction={'column'} align={'center'} css={{ mb: '$16' }}>
                <Text span css={{ color: '$primary', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    The Numbers
                </Text>
                <Text h2 css={{ fontSize: '3rem', textAlign: 'center', '@sm': { fontSize: '4rem' } }}>
                    Results That Speak
                </Text>
            </Flex>

            <Grid.Container gap={2} justify="center">
                {metrics.map((m, i) => (
                    <Grid xs={12} sm={6} md={3} key={i}>
                        <MetricCard metric={m} />
                    </Grid>
                ))}
            </Grid.Container>
        </Box>
    );
};
