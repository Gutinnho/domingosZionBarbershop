'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

interface Props {
	fill: string;
	size?: number;
}

function FacebookIconSVG({ fill, size }: Props) {
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
						d='M672 1589 c-438 -78 -737 -499 -657 -924 68 -363 356 -626 723 -660
l72 -7 0 311 0 311 -85 0 -86 0 3 103 3 102 81 3 82 3 4 112 c4 94 8 120 29
162 51 102 148 143 306 130 l83 -7 0 -89 0 -89 -64 0 c-123 0 -146 -24 -146
-151 l0 -69 101 0 100 0 -7 -57 c-3 -32 -9 -78 -13 -103 l-6 -45 -88 -3 -87
-3 0 -289 c0 -279 1 -290 19 -290 11 0 66 23 123 52 90 45 115 64 198 147 76
77 105 114 143 187 68 132 90 220 90 374 0 153 -21 240 -89 371 -101 195 -288
344 -509 403 -73 20 -251 28 -323 15z'
					/>
				</g>
			</svg>
		</div>
	);
}

export default FacebookIconSVG;
