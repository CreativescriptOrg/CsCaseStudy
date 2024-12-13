"use client";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGrid = ({ data }: any) => {
	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
			<Masonry gutter='24px'>
				{data.map((el: any, i: number) => (
					<img
						key={i}
						src={el.img}
						alt={el.alt}
						className='image'
						width={el.width}
						height={el.height}
						style={{ width: "100%", display: "block", maxWidth: "auto" }}
						loading='lazy'
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonryGrid;
