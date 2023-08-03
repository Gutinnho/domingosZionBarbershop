'use client';
import { useEffect, useState } from 'react';

import { useWindowWidth } from '@context/WidthContext';

interface Props {
	fill: string;
	size?: number;
}

function WhatsappIcon({ fill, size }: Props) {
	const windowWidth = useWindowWidth();
	const [sizes, setSizes] = useState<number>(0);

	useEffect(() => {
		if (windowWidth >= 1280) {
			setSizes(44);
		} else if (windowWidth >= 768) {
			setSizes(36);
		} else {
			setSizes(28);
		}
	}, [windowWidth]);

	var finalSize = size != undefined ? size : sizes;

	const divStyle =
		finalSize === 44
			? {
					width: 44,
					height: 44,
			  }
			: finalSize === 36
			? {
					width: 36,
					height: 36,
			  }
			: finalSize === 28
			? {
					width: 28,
					height: 28,
			  }
			: {
					width: finalSize,
					height: finalSize,
			  };
	return (
		<div style={divStyle} className='drop-shadow-custom hover:brightness-75'>
			<svg
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 160.000000 160.000000'
				preserveAspectRatio='xMidYMid meet'>
				<g
					transform='translate(0.000000,160.000000) scale(0.100000,-0.100000)'
					fill={fill}
					stroke='none'>
					<path
						d='M672 1589 c-438 -78 -737 -499 -657 -924 33 -178 98 -300 229 -430
73 -73 109 -100 183 -138 134 -69 220 -90 373 -90 153 0 239 21 373 90 76 39
109 64 187 143 76 76 104 113 143 186 68 132 90 220 90 374 0 153 -21 240 -89
371 -101 195 -288 344 -509 403 -73 20 -251 28 -323 15z m287 -318 c85 -26
137 -60 204 -130 104 -109 153 -261 128 -400 -14 -80 -56 -173 -103 -232 -70
-88 -201 -158 -325 -175 -61 -8 -170 9 -232 37 l-44 19 -115 -30 c-63 -16
-120 -30 -127 -30 -8 0 -2 37 21 119 l32 120 -26 63 c-24 56 -27 76 -27 183 0
118 1 121 37 198 60 126 169 221 303 263 62 20 203 17 274 -5z'
					/>
					<path
						d='M720 1196 c-217 -60 -345 -278 -284 -487 9 -30 24 -69 35 -87 18 -32
18 -37 4 -92 -9 -33 -18 -66 -21 -74 -5 -13 6 -12 67 5 l73 20 60 -27 c80 -36
188 -44 271 -19 134 39 232 136 271 270 34 119 4 266 -75 361 -93 113 -263
168 -401 130z m-32 -168 c5 -7 20 -36 32 -65 l22 -52 -21 -30 c-12 -16 -21
-33 -21 -39 0 -20 81 -99 128 -125 l50 -27 29 35 30 35 57 -25 c31 -14 59 -32
63 -41 10 -27 -10 -67 -47 -92 -42 -28 -84 -26 -174 8 -110 42 -266 222 -266
308 0 76 83 153 118 110z'
					/>
				</g>
			</svg>
		</div>
	);
}

export default WhatsappIcon;
