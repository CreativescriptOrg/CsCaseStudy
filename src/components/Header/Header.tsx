import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const Header = () => {
	return (
		<header className={styles.container}>
			<div className='container'>
				<Link href='/'>
					<Image src={"/images/logo.svg"} alt='logo' width={180} height={60} />
				</Link>
			</div>
		</header>
	);
};

export default Header;
