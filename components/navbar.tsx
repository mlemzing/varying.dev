import Link from "next/link";

type NavbarProps = {
  visible: boolean;
  onClick: () => void;
};
export default function Navbar(navbarProps: NavbarProps) {
  return (
    <div className="fixed flex w-screen justify-end p-4 z-10">
      <div className="flex flex-col space-y-2">
        <button
          onClick={navbarProps.onClick}
          className="flex flex-col space-y-1.5 self-end w-6 hover:w-8"
        >
          <span className="bg-rose-brown-800 h-0.5 rounded-xs w-full"></span>
          <span className="bg-rose-brown-800 h-0.5 rounded-xs w-full"></span>
          <span className="bg-rose-brown-800 h-0.5 rounded-xs w-full"></span>
        </button>
        {navbarProps.visible && (
          <div className="flex flex-col text-right font-serif space-y-1 text-lg">
            <button className="hover:font-semibold text-right">
              <Link href={"/"}>HOME</Link>
            </button>
            <button className="hover:font-semibold text-right">
              <Link href={"/portfolio"}>PORTFOLIO</Link>
            </button>
            <button className="hover:font-semibold text-right">
              <Link href={"/blog"}>BLOG</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
