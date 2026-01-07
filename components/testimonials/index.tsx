import { Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const clients = [
    "TechFlow", "Nexus", "Optima", "Vertex", "GlobalScale", "Elevate", "Momentum", "Zenith"
];

// Marquee animation keyframes (simulated with CSS in global styles or inline)
// Since Stitches works best with JS objects, we'll try a simple overflow scroll first or a CSS animation.

export const Testimonials = () => {
   return (
      <Box css={{ 
          py: '$20', 
          overflow: 'hidden', 
          position: 'relative',
          bg: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
         <Box css={{
             display: 'flex',
             whiteSpace: 'nowrap',
             animation: 'scroll 20s linear infinite',
             gap: '$20',
             // Duplicate content to ensure smooth looping
             width: 'max-content',
         }}>
             {[...clients, ...clients, ...clients].map((client, i) => (
                 <Text 
                    key={i} 
                    h3 
                    css={{ 
                        color: '$accents4', 
                        opacity: 0.5, 
                        fontSize: '2rem', 
                        textTransform: 'uppercase', 
                        fontWeight: '900',
                        m: 0 
                    }}
                 >
                     {client}
                 </Text>
             ))}
         </Box>
         
         <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
            }
         `}</style>
      </Box>
   );
};
