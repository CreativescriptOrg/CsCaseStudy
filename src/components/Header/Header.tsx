import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
	return (
		<header className={styles.container}>
			<div className='container'>
				<Link href='/'>Creative Script Logo</Link>
			</div>
		</header>
	);
};

export default Header;
