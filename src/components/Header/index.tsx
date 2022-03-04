import { sendEventTracker } from "@/utils/analytics/tracker";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="text-white bg-gray-900 sticky top-0 z-50">
      <div className="px-4 mx-auto sm:pr-0 max-w-screen-2xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            <Link href="/">
              <img src="/joyful-logo.png" className="w-20 h-10 object-contain" />
            </Link>

            {/* <nav className="hidden space-x-8 text-sm font-medium lg:flex">
            <Link href="/about">
              <a href="">About</a>
            </Link>
            <Link href="/blog">
              <a href="">Blog</a>
            </Link>
            <Link href="/contact">
              <a href="">Contact</a>
            </Link>
            </nav> */}
          </div>

          <div className="items-center justify-end hidden space-x-8 sm:flex">
            {/* <a href="" className="text-sm font-medium">
              +62 856 9232 3330
            </a> */}

            <a
              href="tel:+62856-9232-777"
              className="inline-flex text-center items-center h-16 px-12 text-xs font-bold tracking-widest text-gray-900 uppercase bg-yellow-500"
              onClick={() => {
                sendEventTracker({
                  name: 'click',
                  category: `${router.pathname} - header`,
                  label: 'phone number',
                })
              }}
            >
              Get in touch
              <br />
              +62 856 9232 3330

            </a>
          </div>

          <div className="sm:hidden">
            <button
              className="p-2 text-gray-100 bg-gray-800 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>

              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
