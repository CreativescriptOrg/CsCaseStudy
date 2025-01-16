import { IMAGE_BASE_URL } from "@/config";
import Image from "next/image";

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
					className='media'
				/>
			) : (
				<Image
					src={`${IMAGE_BASE_URL}${data.img}`}
					alt={data.alt}
					className='image media'
					width={data.width}
					height={data.height}
					loading='lazy'
				/>
			)}
		</>
	);
};

export default Media;
