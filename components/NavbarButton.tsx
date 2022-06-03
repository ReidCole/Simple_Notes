import Link from "next/link";

type Props = {
  iconClass: string;
  title: string;
  colorClass: string;
  href: string;
  type: "link" | "button";
  onClick?: () => void;
};

const NavbarLink: React.FC<Props> = ({ iconClass, title, colorClass, href, type, onClick }) => {
  if (type === "link") {
    return (
      <Link passHref href={href}>
        <a
          className={`${colorClass} text-3xl flex items-center hover:text-black focus-visible:text-black focus-visible:outline-1 outline-black transition-colors p-1`}
          title={title}
        >
          <i className={`bi-${iconClass} flex`} />
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={`${colorClass} text-3xl flex items-center hover:text-black focus-visible:text-black focus-visible:outline-1 outline-black transition-colors p-1`}
        onClick={onClick}
        title={title}
      >
        <i className={`bi-${iconClass} flex`} />
      </button>
    );
  }
};

export default NavbarLink;
