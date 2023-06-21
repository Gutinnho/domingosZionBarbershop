'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

interface Props {
	fill: string;
	size?: number;
}

function InstagramIconSVG({ fill, size }: Props) {
	const [width, setWidth] = useState<number>(0);
	const [sizes, setSizes] = useState<number>(0);

	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);

	useEffect(() => {
		if (width >= 1280) {
			setSizes(44);
		} else if (width >= 768) {
			setSizes(36);
		} else {
			setSizes(28);
		}
	}, [width]);

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
371 -101 195 -288 344 -509 403 -73 20 -251 28 -323 15z m429 -351 c57 -25
116 -84 136 -136 16 -41 18 -80 18 -307 0 -253 -1 -261 -24 -307 -26 -53 -73
-99 -129 -125 -32 -16 -71 -18 -302 -18 -223 0 -271 3 -301 16 -54 25 -105 74
-131 127 -22 45 -23 55 -23 307 0 290 4 311 63 377 72 80 108 87 412 85 202
-2 251 -5 281 -19z'
					/>
					<path
						d='M670 1169 c-134 -6 -162 -13 -198 -51 -37 -40 -42 -81 -42 -323 0
-219 1 -233 23 -275 16 -33 34 -51 67 -68 42 -21 55 -22 280 -22 225 0 238 1
280 23 33 16 51 34 68 67 21 42 22 55 22 280 0 225 -1 238 -22 280 -35 69 -83
88 -233 92 -66 2 -176 0 -245 -3z m414 -85 c50 -49 -24 -124 -76 -77 -36 33
-13 93 37 93 13 0 31 -7 39 -16z m-178 -72 c84 -43 128 -116 128 -212 0 -94
-46 -170 -128 -212 -52 -27 -156 -30 -202 -5 -94 49 -138 119 -138 217 0 112
62 195 174 231 38 13 123 3 166 -19z'
					/>
					<path
						d='M730 933 c-71 -37 -98 -119 -66 -197 29 -70 127 -105 200 -71 100 48
114 192 24 258 -38 28 -114 33 -158 10z'
					/>
				</g>
			</svg>
		</div>
	);
}

export default InstagramIconSVG;
