import Link from "next/link";

type NavbarProps = {
  visible: boolean;
  onClick: () => void;
};
export default function Navbar(navbarProps: NavbarProps) {
  return (
    <div className="fixed flex w-screen justify-end p-4">
      <div className="flex flex-col space-y-2">
        <button
          onClick={navbarProps.onClick}
          className="flex flex-col space-y-1.5 self-end"
        >
          <span className="bg-rose-brown-800 h-0.5 w-6 rounded-xs"></span>
          <span className="bg-rose-brown-800 h-0.5 w-6 rounded-xs"></span>
          <span className="bg-rose-brown-800 h-0.5 w-6 rounded-xs"></span>
        </button>
        {navbarProps.visible && (
          <div className="flex flex-col text-right font-serif space-y-1 text-lg">
            <div>
              <Link href={"/portfolio"}>PORTFOLIO</Link>
            </div>
            <div>
              <Link href={"/blog"}>BLOG</Link>
            </div>
            <div>
              <Link href={"/contact"}>CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
