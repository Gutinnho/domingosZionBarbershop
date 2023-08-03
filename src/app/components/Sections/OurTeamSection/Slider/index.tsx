'use client';

import { useEffect, useMemo, useRef } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';

import Card from './Card';

import './styles/slick.css';
import './styles/slick-theme.css';

import teamData from './team.json';

import { TeamData } from '@customTypes/teamData';

import { useWindowWidth } from '@context/WidthContext';

function PrevArrow(props: CustomArrowProps): JSX.Element {
	const { className, onClick } = props;
	return (
		<div className={className}>
			<CaretLeft
				size={40}
				color='#EC3237'
				onClick={onClick}
				weight='bold'></CaretLeft>
		</div>
	);
}

function NextArrow(props: CustomArrowProps): JSX.Element {
	const { className, onClick } = props;
	return (
		<div className={className}>
			<CaretRight
				size={40}
				color='#EC3237'
				onClick={onClick}
				weight='bold'></CaretRight>
		</div>
	);
}

function useSliderSettings(currentWidth: number): Settings {
	const settings = useMemo(() => {
		const baseSettings = {
			dots: true,
			arrows: false,
			slidesToShow: 1,
			initialSlide: 2,
			infinite: false,
			easing: 'ease-in',
			speed: 600,
		};
		if (currentWidth >= 1024) {
			return {
				...baseSettings,
				dots: false,
				centerMode: false,
				slidesToShow: 3,
			};
		} else if (currentWidth >= 768) {
			return {
				...baseSettings,
				arrows: true,
				prevArrow: <PrevArrow></PrevArrow>,
				nextArrow: <NextArrow></NextArrow>,
				centerMode: true,
			};
		} else if (currentWidth >= 400) {
			return {
				...baseSettings,
				centerMode: true,
			};
		} else {
			return {
				...baseSettings,
				centerMode: false,
			};
		}
	}, [currentWidth]);

	return settings;
}

export default function useSlider() {
	const items: TeamData[] = teamData;

	const currentWidth = useWindowWidth();
	const settings = useSliderSettings(currentWidth);

	let sliderRef = useRef<Slider>(null);
	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(1, true);
		}
	});

	function goToSlide(index: number): void {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(index);
		}
	}

	return (
		<Slider ref={sliderRef} {...settings} className='cards'>
			{items.map((item, index) => {
				return (
					<Card
						key={index}
						info={item}
						index={index}
						goToSlide={() => goToSlide(index)}
					/>
				);
			})}
		</Slider>
	);
}
