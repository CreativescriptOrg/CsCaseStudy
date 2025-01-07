import parse from "html-react-parser";

const ProjectDetailsSection = ({
	data,
}: {
	data: {
		heading: string;
		desc: string;
	}[];
}) => {
	return (
		data &&
		data.map((el: any, i: number) => (
			<div className='section container'>
				<div className='section_info'>
					<h2 className='section_heading'>{el.heading}</h2>
					<div className='section_info_right'>
						{<div>{parse(el.desc)}</div>}
					</div>
				</div>
			</div>
		))
	);
};

export default ProjectDetailsSection;
