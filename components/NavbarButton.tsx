import Link from "next/link";

type Props = {
  iconClass: string;
  title: string;
  href?: string;
  type: "link" | "button";
  onClick?: () => void;
};

const NavbarLink: React.FC<Props> = ({ iconClass, title, href, type, onClick }) => {
  if (type === "link") {
    return (
      <Link passHref href={href || "#"}>
        <a
          className={
            "text-3xl flex items-center hover:hover-hover:bg-black hover:hover-hover:text-white rounded-lg focus-visible:outline-1 outline-black transition-colors p-1.5"
          }
          title={title}
        >
          <i className={`bi-${iconClass} flex`} />
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={
          "text-3xl flex items-center hover:hover-hover:bg-black hover:hover-hover:text-white rounded-lg focus-visible:outline-1 outline-black transition-colors p-1.5"
        }
        onClick={onClick}
        title={title}
      >
        <i className={`bi-${iconClass} flex`} />
      </button>
    );
  }
};

export default NavbarLink;
