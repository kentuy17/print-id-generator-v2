import React from "react";

const SocialLinks = () => {
  return (
    <div className="max-w-7xl justify-center flex mx-auto mt-4">
      <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
        {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" --> */}
        <a
          href="#news"
          className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
          aria-current="page"
        >
          <span>
            <svg
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
              astro-icon="news-and-update"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
              <path d="M14 3v5h5m-3 5H8m8 4H8m2-8H8"></path>
            </svg>
          </span>
          News and Update
        </a>
        <a
          href="/accreditation"
          className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
        >
          <span>
            <svg
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
              astro-icon="accreditations"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </span>
          Accreditations
        </a>
        <a
          href="#"
          className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
        >
          <span>
            <svg
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
              astro-icon="announcements"
            >
              <path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"></path>
              <path d="M19 10v1a7 7 0 0 1-14 0v-1m7 8.4v3.3M8 22h8"></path>
            </svg>
          </span>
          Announcements
        </a>
        <a
          href="#"
          className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
        >
          <span>
            <svg
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
              astro-icon="publications"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </span>
          Publications
        </a>
      </nav>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" --> */}
          <div className="flex">
            <a
              href="#news"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
              aria-current="page"
            >
              <span>
                <svg
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
                  astro-icon="news-and-update"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                  <path d="M14 3v5h5m-3 5H8m8 4H8m2-8H8"></path>
                </svg>
              </span>
            </a>
            <a
              href="/accreditation"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
            >
              <span>
                <svg
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
                  astro-icon="accreditations"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
            >
              <span>
                <svg
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
                  astro-icon="announcements"
                >
                  <path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"></path>
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1m7 8.4v3.3M8 22h8"></path>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium gap-2"
            >
              <span>
                <svg
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-900 group-hover:text-neutral-800"
                  astro-icon="publications"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SocialLinks;
