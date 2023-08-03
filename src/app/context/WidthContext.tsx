'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface WindowWidthContextType {
	width: number;
}

const WindowWidthContext = createContext<WindowWidthContextType>({ width: 0 });
WindowWidthContext.displayName = 'WindowWidth';

interface WindowWidthProviderProps {
	children: React.ReactNode;
}

export function WindowWidthProvider({
	children,
}: WindowWidthProviderProps): JSX.Element {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const handleResize = (): void => {
			setWidth(window.innerWidth);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<WindowWidthContext.Provider value={{ width }}>
			{children}
		</WindowWidthContext.Provider>
	);
}

export function useWindowWidth(): number {
	const context = useContext(WindowWidthContext);
	return context.width;
}
