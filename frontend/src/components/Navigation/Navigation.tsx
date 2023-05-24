import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import {ThemeToggle} from "../ThemeToggle";

export default function Navigation(): ReactElement {
  const router = useRouter();
  const activeUrl = (path: string): string =>
    router.asPath === path ? "active" : "";

  return (
    <div className="md:bg-neutral-900">
      <header className="bg-neutral-700 md:bg-neutral-900 uppercase text-white flex flex-col md:mx-auto md:max-w-screen-md md:flex-row md:justify-between">
        <div className="py-6 px-4 md:py-8 md:px-0">
          <Link href="/" className={`${activeUrl("/")}`}>
            <span>Madan Limbu</span>
          </Link>
        </div>
        {/* <div className="navigation__centre">
                        <ThemeToggle />
                    </div> */}
        <div className="py-3 px-4 bg-neutral-900 md:py-8 md:px-0">
          <Link href="/posts" className={`mr-4 ${activeUrl("/posts")}`}>
            <span>Posts</span>
          </Link>
          <Link href="/about" className={`${activeUrl("/about")}`}>
            <span>About</span>
          </Link>
        </div>
      </header>
    </div>
  );
}
