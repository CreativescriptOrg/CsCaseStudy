import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
	subsets: ["latin"],
	variable: "--font-eb-garamond",
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Case Study",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={ebGaramond.variable}>
			<body>{children}</body>
		</html>
	);
}
