import React from 'react';
import {Svg} from '../styles/svg';

interface CheckIconProps {
   fill?: string;
   width?: number | string;
   height?: number | string;
}

export const CheckIcon = ({fill = "currentColor", width = 24, height = 24, ...props}: CheckIconProps) => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 24 24"
         {...props}
      >
         <Svg.Path
            css={{
               fill: fill,
            }}
            d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
         ></Svg.Path>
      </Svg>
   );
};
