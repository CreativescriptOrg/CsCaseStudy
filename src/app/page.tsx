import data from "../case_study_1.json";

export default function Home() {
	return (
		<div className='container website_list'>
			<h1>Case Studies</h1>
			<ul>
				{[
					{ href: "/casestudy/konster", label: "Konster" },
					{ href: "/casestudy/docchase", label: "Docchase" },
					{ href: "/casestudy/cumulus", label: "Cumulus" },
					{ href: "/casestudy/polyviam", label: "Polyviam" },
					{ href: "/casestudy/second-sathi", label: "Second Sathi" },
					{ href: "/casestudy/taie", label: "Taie" },
					{ href: "/casestudy/fuzzle", label: "Fuzzle" },
					{ href: "/casestudy/dolado", label: "Dolado" },
					{ href: "/casestudy/real-estate", label: "Real Estate" },
					{ href: "/casestudy/cubu", label: "Cubu" },
					{ href: "/casestudy/one-nation-innovation", label: "One Nation" },
					{ href: "/casestudy/poker-zombie", label: "Poker Zombie" },
					{ href: "/casestudy/seoul", label: "Seoul Medical CRM" },
					{ href: "/casestudy/eventflow", label: "Event Flow" },
					{ href: "/casestudy/estu", label: "Estu" },
					{ href: "/casestudy/game-menu", label: "Game Menu" },
				].map((item, index) => (
					<li key={index} style={{ margin: "10px 0" }}>
						<a
							href={item.href}
							style={{ textDecoration: "none", color: "#0070f3" }}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
