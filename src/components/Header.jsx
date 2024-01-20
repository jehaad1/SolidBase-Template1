import { A } from "@solidjs/router";
import { signOut, auth, isLoggedIn } from "../firebase.config";

function Header() {
  return (
    <header
      className="
      fixed z-50 w-full top-0
      bg-black/90
      py-3 px-4
      flex items-center gap-8"
    >
      <A
        href="/"
        className="header-link !font-bold !text-3xl mr-auto"
      >
        SolidBase
      </A>
      {isLoggedIn() ? (
        <>
          <A
            href="/Todos"
            className="header-link"
          >
            Todos
          </A>
          <button
            onClick={() => signOut(auth)}
            className="header-link"
          >
            Logout
          </button>
        </>
      ) : (
        <A
          href="/Login"
          className="header-link"
        >
          Login
        </A>
      )}
    </header>
  );
}

export default Header;
