/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ResponsiveMasonry } from "react-responsive-masonry";
import dynamic from "next/dynamic";
import { IMAGE_BASE_URL } from "@/config";

const Masonry = dynamic(() => import("react-responsive-masonry"), {
	ssr: false,
});
interface MasonryData {
	img: string;
	alt: string;
	width?: string | number;
	height?: string | number;
}
interface MasonryGridProps {
	data: MasonryData[];
}

const MasonryGrid = ({ data }: MasonryGridProps) => {
	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
			<Masonry gutter='24px'>
				{data.map((el: any, i: number) => (
					<img
						key={i}
						src={`${IMAGE_BASE_URL}${el.img}`}
						alt={el.alt}
						className='image'
						width={el.width}
						height={el.height}
						loading='lazy'
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonryGrid;
