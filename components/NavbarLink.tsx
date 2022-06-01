import Link from "next/link";

type Props = {
  iconClass: string;
  linkTitle: string;
  colorClass: string;
  href: string;
};

const NavbarLink: React.FC<Props> = ({ iconClass, linkTitle, colorClass, href }) => {
  return (
    <Link passHref href={href}>
      <a
        className={`${colorClass} text-3xl h-full flex items-center hover:text-black transition-colors`}
        title={linkTitle}
      >
        <i className={`bi-${iconClass}`} />
      </a>
    </Link>
  );
};

export default NavbarLink;
