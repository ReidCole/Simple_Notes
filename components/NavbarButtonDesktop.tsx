import Link from "next/link";

type Props = {
  iconClass: string;
  text: string;
  title: string;
  href?: string;
  type: "link" | "button";
  onClick?: () => void;
  gap: string;
};

const NavbarButtonDesktop: React.FC<Props> = ({
  iconClass,
  text,
  title,
  href,
  type,
  onClick,
  gap,
}) => {
  if (type === "link") {
    return (
      <Link passHref href={href || "#"}>
        <a
          className={
            "flex items-center px-4 h-full justify-center hover:hover-hover:bg-black hover:hover-hover:text-white  focus-visible:outline-1 outline-black transition-colors p-1.5 " +
            gap
          }
          title={title}
        >
          <i className={`bi-${iconClass} flex text-2xl`} /> {text}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={
          "flex items-center px-4 h-full justify-center hover:hover-hover:bg-black hover:hover-hover:text-white  focus-visible:outline-1 outline-black transition-colors p-1.5 " +
          gap
        }
        onClick={onClick}
        title={title}
      >
        <i className={`bi-${iconClass} flex text-2xl`} /> {text}
      </button>
    );
  }
};

export default NavbarButtonDesktop;
