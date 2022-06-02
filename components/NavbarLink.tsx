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
        className={`${colorClass} text-3xl flex items-center hover:text-black focus-visible:text-black focus-visible:outline-1 outline-black transition-colors p-1`}
        title={linkTitle}
      >
        <i className={`bi-${iconClass} flex`} />
      </a>
    </Link>
  );
};

export default NavbarLink;
