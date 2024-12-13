import Link from "next/link";
import styles from "./styles.module.css";

export interface AboutProps {
  name: string;
  desc: string;
  domain: string;
  year: string;
  services: string[];
  mainTechStack: string[];
  platform: string;
  image: string;
}

const Header: React.FC<{ about: AboutProps }> = ({ about }) => {
  return (
    <header className={styles.container}>
      <div className="container">
        <Link href="/">{about?.name} Logo</Link>
      </div>
    </header>
  );
};

export default Header;
