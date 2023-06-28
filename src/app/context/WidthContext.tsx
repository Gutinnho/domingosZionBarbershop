'use client';

import React, { createContext, useState, useEffect } from 'react';

const WidthContext = createContext<number>(0);

interface WidthContextProps {
	children: React.ReactNode;
}

const WindowProvider = ({ children }: WidthContextProps) => {
	const [windowWidth, setWindowWidth] = useState(640);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<WidthContext.Provider value={windowWidth}>
			{children}
		</WidthContext.Provider>
	);
};

export { WidthContext, WindowProvider };
