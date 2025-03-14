import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import SocialLinks from "@/Components/landing/social-links";
import Events from "@/Components/landing/events";
import { Announcements } from "@/Components/landing/announcements";
import DestinationHighlight from "@/Components/landing/destination-highlight";

export default function Welcome({ events, canLogin, canRegister }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  console.log([canLogin, canRegister]);

  return (
    <>
      <Head title="Welcome" />
      <div className="relative pt-12 pb-8 bg-black xl:pt-24 sm:pb-12 lg:pb-20 xl:pb-24 2xl:pb-32">
        <header className="absolute inset-x-0 top-0 z-10 py-4 xl:py-6">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center space-y-4 md:flex-row justify-between flex-col">
              <div className="flex flex-shrink-0">
                <a href="/" className="flex items-center mb-2">
                  <img
                    alt=""
                    className="h-18 w-24"
                    width="1920"
                    height="1080"
                    src="/assets/siquijor-tourist-guide-logo-500px.png"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-xl font-semibold text-white mt-1 ml-3">
                    Siquijor Tourism
                  </span>
                </a>
              </div>

              <nav className="md:ml- text-white md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <a href="/destinations" className="mr-5 hover:text-red-500">
                  Destinations
                </a>
                <a href="/about" className="mr-5 hover:text-red-500">
                  About
                </a>
                <a href="/contact" className="mr-5 hover:text-red-500">
                  Contact
                </a>
                <Link href={route("login")} className="mr-5 hover:text-red-500">
                  Login
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <div className="absolute inset-0">
          <img
            alt=""
            className="object-cover w-full h-full filter brightness-75"
            width="1920"
            height="1080"
            src={"/templates/SOPA 2024.00_11_26_11.Still026.jpg"}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative bg-opacity-75">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl justify-center flex text-center">
            <div className="w-full lg:w-2/3 xl:w-1/2 p-6 rounded-lg mt-24 md:mt-8">
              <h1 className="font-sans text-4xl text-center w-full font-semibold tracking-tight text-white sm:text-7xl">
                Uncover Hidden Gems with Us
              </h1>
              <p className="md:mt-8 mt-2 font-sans text-sm font-normal leading-6 text-white">
                Discover the Best Travel Destination and Create Unforgettable
                Experiences
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <a
                  href="/travel-guide"
                  title="Get balanced cooking"
                  className="inline-flex items-center justify-center px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 rounded-full hover:bg-yellow-500 bg-white hover:text-white"
                >
                  <span className="font-serif italic font-normal sm:text-xl">
                    Travel Guide
                  </span>
                </a>
                <a
                  href="https://youtu.be/j_DpWD5_ZBw?si=5z2_S1bDMIcOmp52"
                  title="Get balanced cooking"
                  className="inline-flex items-center group justify-center px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 text-white rounded-full hover:bg-white hover:text-neutral-800 bg-yellow-500 gap-2"
                  target="_blank"
                >
                  <span className="rounded-full p-2 border border-white group-hover:border-neutral-800">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 text-white group-hover:text-neutral-800"
                      astro-icon="play-bold"
                    >
                      <path
                        fill="currentColor"
                        d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-serif italic font-normal sm:text-xl">
                    Watch Video
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
      <DestinationHighlight />
      <Events events={events} />
      <Announcements />
      <div className="p-8 hidden sm:flex"></div>
    </>
  );
}
