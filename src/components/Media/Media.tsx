import { IMAGE_BASE_URL } from "@/config";

const Media = ({
	data,
}: {
	data: {
		isVideo?: boolean;
		img: string;
		alt: string;
		width: number;
		height: number;
	};
}) => {
	return (
		<>
			{data.isVideo ? (
				<video
					controls
					src={`${IMAGE_BASE_URL}${data.img}`}
					width={data.width}
					height={data.height}
				/>
			) : (
				<img
					src={`${IMAGE_BASE_URL}${data.img}`}
					alt={data.alt}
					className='image'
					width={data.width}
					height={data.height}
					loading='lazy'
				/>
			)}
		</>
	);
};

export default Media;
