import { Grid, Text, useTheme } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

// Mock Logos (SVGs)
const CompanyLogo1 = ({ fill }: { fill: string }) => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
);

const CompanyLogo2 = ({ fill }: { fill: string }) => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={fill} strokeWidth="2" />
      <path d="M8 12L12 16L16 8" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
);

const CompanyLogo3 = ({ fill }: { fill: string }) => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={fill} strokeWidth="2" />
      <path d="M8 12H16" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 8V16" stroke={fill} strokeWidth="2" strokeLinecap="round" />
   </svg>
);

const brands = [
   { name: 'Starlab', logo: CompanyLogo1 },
   { name: 'Novus', logo: CompanyLogo2 },
   { name: 'Zest', logo: CompanyLogo3 },
   { name: 'Bolt', logo: CompanyLogo1 },
   { name: 'Trio', logo: CompanyLogo2 },
   { name: 'FoxRun', logo: CompanyLogo3 },
];

export const Trusted = () => {
   const { isDark } = useTheme();
   return (
      <Box css={{ py: '$12', borderBottom: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)', bg: isDark ? 'transparent' : '$accents1' }}>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text
               css={{
                  color: '$accents6',
                  textTransform: 'uppercase',
                  fontSize: '$xs',
                  letterSpacing: '2px',
                  mb: '$8',
                  textAlign: 'center'
               }}
            >
               Trusted by the fastest growing brands
            </Text>

            <Grid.Container
               gap={2} // Reduced gap for mobile
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
               }}
            >
               {brands.map((brand, i) => (
                  <Grid key={i} xs={6} sm={4} md={2} justify="center">
                     <Flex align={'center'} justify={'center'} css={{
                        gap: '$3',
                        opacity: 0.6,
                        transition: 'opacity 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                           opacity: 1,
                           color: '$primary'
                        }
                     }}>
                        <brand.logo fill={isDark ? "currentColor" : "#333"} />
                        <Text weight={'semibold'} span size={'$lg'} css={{ color: isDark ? '$accents8' : '$accents8' }}>
                           {brand.name}
                        </Text>
                     </Flex>
                  </Grid>
               ))}
            </Grid.Container>
         </Flex>
      </Box>
   );
};
