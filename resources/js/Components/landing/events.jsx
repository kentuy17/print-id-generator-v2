import React from "react";

const Events = ({ events }) => {
  const currentMonth = new Date().toLocaleDateString("default", {
    month: "long",
  });

  console.log(events);
  events.map((x) => {
    console.log(x.date);
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- Heading --> */}
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:mb-6 lg:text-4xl">
            Events for {currentMonth}
          </h2>
          {/* <!-- /Heading --> */}
          <div className="flex flex-row overflow-x-scroll items-center space-x-4 p-4">
            {/* <!-- Article --> */}
            {events.map((event) => (
              <article
                key={event.id}
                className="relative isolate flex flex-col justify-end h-[300px] w-full bg-white pb-8 "
              >
                <time
                  dateTime={event.date}
                  className="absolute top-4 text-center text-white w-full bg-gray-900/80"
                >
                  {event.date}
                </time>
                <div className="px-8">
                  <img
                    className="w-24 h-24 mr-2"
                    src={`/images/${event.image}`}
                    alt={event.name}
                  />

                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <div className="flex flex-wrap w-[200px] items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold leading-6">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {event?.name?.toUpperCase()}
                    </a>
                  </h3>
                </div>
                <div className="flex gap-x-2.5 pl-8 pr-8">
                  <p className="text-xs">
                    {event.location}, Siquijor Negros Oriental
                    <br />
                    Contact: Ms.Ma. Lita T. Rodriguez <br />
                    {event.contact_number}
                  </p>
                </div>
              </article>
            ))}

            {/* <article className="relative isolate flex flex-col justify-end h-[300px] w-full bg-white pb-8 ">
              <time
                dateTime="2020-03-16"
                className="absolute top-4 text-center text-white w-full bg-gray-900/80"
              >
                October 29 - November 1
              </time>
              <div className="px-8">
                <svg
                  className="w-24 h-24 mr-2"
                  viewBox="0 0 1024 1024"
                  astro-icon="ice-cream"
                >
                  <path
                    fill="#9A2D2F"
                    d="M951 732.5c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zm0-50c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zM262 283.4c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zm0-50c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8z"
                  ></path>
                  <path
                    fill="#FFEB4D"
                    d="M320 102.3a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                  ></path>
                  <path
                    fill="#9A2D2F"
                    d="M352 142.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z"
                  ></path>
                  <path
                    fill="#C0FCD0"
                    d="M592 277.3a106 106 0 1 0 212 0 106 106 0 1 0-212 0Z"
                  ></path>
                  <path
                    fill="#FFACC2"
                    d="M687 383.3a106 106 0 1 0 212 0 106 106 0 1 0-212 0Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M793.3 285c-39 0-72.7 22.9-88.5 55.9 4 1.4 13.9-11.4 36.3-9.5 15.2 1.2 18.3-17.7 30-22.2 8.8-3.4 19.3 4.5 32.9 1.8 11.1-2.2 24.6-19.2 9.9-23.6-6.6-1.6-13.5-2.4-20.6-2.4z"
                  ></path>
                  <path
                    fill="#FFEB4D"
                    d="M505 383.3a106 106 0 1 0 212 0 106 106 0 1 0-212 0Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M604.4 248.6c0 6.8 16.7-22.2 20.7-19.7s2.1 23.2 11.2 24c10 .9 17.7-7.9 22.5-17.5 5.8-11.5 6-26.8 19.5-29 11.9-2 15.9 9.8 26.5 13 12.5 3.8 27.5-1.4 33.9-8.2 2.9-3.1 10.4-10.2 1.5-21.8-12.8-6.1-27.1-9.5-42.2-9.5-43.9-.2-81.1 28.8-93.6 68.7zm6.9 36.4c-37 0-69.3 20.6-86 51-5 8.4-.9 14.9 5.3 12.4 17-6.7 20.3-24.7 41.3-27.7 10.9-1.6 56 26.7 77-.3 12.9-16.6 40.7 1.7 28.2-9.9-17.3-15.8-40.4-25.5-65.8-25.5z"
                  ></path>
                  <path
                    fill="#DAE5FF"
                    d="M491 385.9c0 114.3 92.7 206.9 207 206.9s207-92.6 207-206.9v-.1H491v.1z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M873.9 478.8c-14.8 26-24.3 20.3-36 30.8-29.1 26.3-58 15.2-88.9 22.2-29.3 6.7-38.7 52.6-86.3 42.9-27.9-5.7-51.3-10.6-50.9-9.6 26.1 12.6 55.4 19.7 86.2 19.7 76.1-.1 142.4-43.1 175.9-106z"
                  ></path>
                  <path fill="#FFE0B6" d="M139 661.3h472v288H139z"></path>
                  <path fill="#FFACC2" d="M611 661.3H139l335.6-70z"></path>
                  <path fill="#FFD7F5" d="M139 757.3h472v96H139z"></path>
                  <path
                    fill="#FFACC2"
                    d="M386.3 546.2s21.8-9.8 39.1 4c13.1 10.5 19.7 30.6 14.8 56.8-5.3 28.7-36.7 30.7-46.7 26.7s-.9-6.8-16.3-.7c-15.3 6.1-55.2-12.5-48.6-49.5 8.1-44.7 49.7-45.3 57.7-37.3z"
                  ></path>
                  <path
                    fill="#9A2D2F"
                    d="M912 941.8H706V600.7c54.4-2 105.3-24.1 144-62.8 40.6-40.6 63-94.5 63-151.9v-.1c0-3.8-2.6-6.9-6.1-7.8-2.5-54.1-42.8-98.5-95.1-107.2-3.3-59.9-53.1-107.6-113.8-107.6-61.3 0-111.4 48.6-113.9 109.2-48.2 11.7-84.5 54.1-87 105.3H491c-4.4 0-7.9 3.5-8 7.9v.2c0 57.4 22.4 111.4 63 151.9 38.7 38.7 89.6 60.8 144 62.8v341.2h-71V661.3c0-.5-.1-1-.2-1.5v-.2c0-.2-.1-.3-.1-.5 0-.1-.1-.2-.1-.3 0-.1-.1-.3-.2-.4 0-.1-.1-.2-.1-.3-.1-.2-.1-.3-.2-.4 0-.1-.1-.1-.1-.2-.2-.4-.5-.8-.8-1.2 0 0 0-.1-.1-.1-.1-.2-.3-.3-.4-.5l-.1-.1-.4-.4c-.1 0-.1-.1-.2-.1-.1-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.1-.1-.3-.2-.4-.2-.1 0-.2-.1-.3-.1h-.1l-136.5-70c-1.6-.8-3.5-1.1-5.3-.7l-22.9 4.8c-.5-18.7-7.2-34.2-19.5-43.9-12.5-10-26.7-10-36.2-8.3 1.4-33.7 6.2-103.3 16-122.9 14.7-29.5 37.3-21.8 39.8-20.8 4.1 1.6 8.7-.3 10.4-4.4 1.7-4.1-.3-8.8-4.4-10.4-1-.4-10.2-4-22.1-2.2-11.1 1.6-26.8 8.3-37.9 30.7-12.3 24.7-16.5 102.1-17.6 129.1-6.3-.9-13.6-.3-20.7 1.9-11.3 3.6-31.2 14.2-36.8 45.5-2 11.3-.3 22.2 4.6 31.7l-188 39.2c-.5.1-1 .3-1.5.4-.1.1-.3.1-.4.2-.1 0-.2.1-.3.1-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.2-.3.2-.1.1-.2.2-.3.2l-.3.3-.3.3c-.1.1-.2.2-.2.3l-.3.3c-.1.1-.1.2-.2.3-.1.1-.2.2-.2.4-.1.1-.1.2-.2.3-.1.1-.1.3-.2.4 0 .1-.1.2-.1.3-.1.1-.1.3-.2.4 0 .1-.1.2-.1.3 0 .1-.1.3-.1.4 0 .1-.1.2-.1.3 0 .1-.1.3-.1.4 0 .1 0 .2-.1.4 0 .1 0 .3-.1.4v281.2H98c-4.4 0-8 3.6-8 8s3.6 8 8 8h814c4.4 0 8-3.6 8-8s-3.6-8.3-8-8.3zM336.6 585.4c3.7-20.8 15.2-29.2 24.1-32.5 9.9-3.7 18.3-1.9 20-.6 2.4 2.3 5.9 3 8.9 1.6.2-.1 17.5-7.7 30.9 3 8.8 7 13.5 19.5 13.4 34.7 0 4.6-.5 9.4-1.4 14.4-.1.8-.3 1.6-.5 2.3-1.8 6.9-5.8 12-11.8 15.4-9.1 5-20 4.4-23.5 3-1.8-.7-2.2-1.1-2.4-1.4-2.2-2.5-4.5-3.4-6.9-3.4-2.8 0-5.7 1.2-9 2.5-1.1.4-2.4 1-3.9 1.6-2.9 1.2-9.2.6-16-2.4-3.2-1.4-6.5-3.3-9.6-5.9-2.3-1.9-4.7-4.2-6.7-7.1-4.5-5.8-7.6-14.2-5.6-25.2zm-.2 42.9c.7.7 1.5 1.3 2.2 1.9 13 10.6 30.5 15.1 41.7 10.7 1.6-.6 2.9-1.2 4-1.6.4-.2.8-.3 1.1-.5 1.3.9 3 1.8 5.2 2.7 3.4 1.4 8 2.1 13.1 2.1 7.6 0 16.4-1.8 24.1-6 11-6 18-16 20.4-28.8.3-1.4.5-2.8.7-4.1l24.5-5.1 104.5 53.6H216.5l119.9-24.9zm-189.4 41h456v80H147v-80zm0 96h456v80H147v-80zm0 96h456v80H147v-80zm743.8-483.5H695.2c0-.8.1-1.7.2-2.5.8-9.9 3.1-19.4 6.7-28.3 2.5-6.3 5.6-12.2 9.3-17.7 17.6-26.4 47.6-43.9 81.7-43.9h2.7c5.4.1 10.7.7 15.9 1.7 43.3 8.4 76.6 45.5 79.1 90.7zM698 179.3c51.4 0 93.6 39.7 97.7 90H793c-37.1 0-70.2 17.8-91 45.4-20.8-27.6-53.9-45.4-91-45.4-3.6 0-7.2.2-10.7.5 3.8-50.5 46.2-90.5 97.7-90.5zM584.6 288.9c5.1-1.4 10.4-2.5 15.8-3 3.5-.4 7-.6 10.6-.6 34.1 0 64.1 17.5 81.7 43.9-7.3 13.4-11.9 28.4-13.3 44.3-.1 1.4-.2 2.8-.3 4.3h-166c2.4-42.4 32-77.8 71.5-88.9zm108.8 295.9c-105-2.4-190.2-86.4-194.3-190.9h397.7c-4.1 104.5-89.3 188.6-194.3 190.9-1.2-.9-7.8-.9-9.1 0z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M358.7 566s4.3-7.9 9.7-6.7c5.3 1.2 4.3 4.8 3.1 9.1-1.1 4-5.3 12.6-10.2 10.9-4.2-1.5-5.2-7.8-2.6-13.3z"
                  ></path>
                </svg>

                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div className="flex flex-wrap w-[200px] items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 font-semibold leading-6">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    KALAG-KALAG FESTIVAL
                  </a>
                </h3>
              </div>
              <div className="flex gap-x-2.5 pl-8 pr-8">
                <p className="text-xs">
                  Municipal Tourism Office Roxas, Palawan Ms. Melissa Grace D.
                  Cabiguen (0930) 922-9494
                </p>
              </div>
            </article> */}
            {/* <article className="relative isolate flex flex-col justify-end h-[300px] w-full bg-white pb-8 ">
              <time
                dateTime="2020-03-16"
                className="absolute top-4 text-center text-white w-full bg-gray-900/80"
              >
                November 25
              </time>
              <div className="px-8">
                <svg
                  className="w-24 h-24 mr-2"
                  viewBox="0 0 1024 1024"
                  astro-icon="indicator"
                >
                  <path
                    fill="#9A2D2F"
                    d="M263.7 231.7c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zm0 50c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zm688 399c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zm0 50c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8z"
                  ></path>
                  <path
                    fill="#FFEB4D"
                    d="M319.8 104.1a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                  ></path>
                  <path
                    fill="#9A2D2F"
                    d="M351.8 144.1c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-18 40-40 40zm0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z"
                  ></path>
                  <path fill="#DAE5FF" d="M541.7 130.1h48v790h-48z"></path>
                  <path
                    fill="#C0FCD0"
                    d="M815.7 594h-408c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h408l64 48-64 48z"
                  ></path>
                  <path
                    fill="#FFEB4D"
                    d="M315.7 439h408c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-408l-64 48 64 48z"
                  ></path>
                  <path
                    fill="#DAE5FF"
                    d="M815.7 284h-408c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h408l64 48-64 48z"
                  ></path>
                  <path
                    fill="#A7F9CE"
                    d="M303.7 810.1a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z"
                  ></path>
                  <path
                    fill="#FFACC2"
                    d="M374.7 921.1h-196v-58c0-53.9 44.1-98 98-98s98 44.1 98 98v58z"
                  ></path>
                  <path
                    fill="#CAE8FF"
                    d="M498.7 921.1h-161v-33.5c0-44.3 36.2-80.5 80.5-80.5s80.5 36.2 80.5 80.5v33.5z"
                  ></path>
                  <path
                    fill="#9A2D2F"
                    d="M924.7 913.1h-327V602h218c1.7 0 3.4-.6 4.8-1.6l64-48c2-1.5 3.2-3.9 3.2-6.4s-1.2-4.9-3.2-6.4l-64-48c-1.4-1-3.1-1.6-4.8-1.6h-218v-43h126c13.2 0 24-10.8 24-24v-64c0-13.2-10.8-24-24-24h-126v-43h218c1.7 0 3.4-.6 4.8-1.6l64-48c2-1.5 3.2-3.9 3.2-6.4s-1.2-4.9-3.2-6.4l-64-48c-1.4-1-3.1-1.6-4.8-1.6h-218v-49.9c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8V180h-126c-13.2 0-24 10.8-24 24v64c0 13.2 10.8 24 24 24h126v43h-218c-1.7 0-3.4.6-4.8 1.6l-64 48c-2 1.5-3.2 3.9-3.2 6.4s1.2 4.9 3.2 6.4l64 48c1.4 1 3.1 1.6 4.8 1.6h218v43h-126c-13.2 0-24 10.8-24 24v64c0 13.2 10.8 24 24 24h126v311.1h-27v-25.5c0-28.8-13.9-54.5-35.3-70.7.2-2.3.3-4.5.3-6.8 0-48.5-39.5-88-88-88-31 0-58.2 16.1-73.9 40.3-10.4-3.4-21.5-5.3-33.1-5.3-58.4 0-106 47.6-106 106v50h-70c-4.4 0-8 3.6-8 8s3.6 8 8 8h824c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-375-1V602h32v310.1h-32zm0-774h32V180h-32v-41.9zM407.7 276c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8H813l53.3 40-53.3 40H407.7zm174 16v43h-32v-43h32zM318.4 431 265 391l53.3-40h405.3c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8H318.4zm263.3 16v43h-32v-43h32zm-174 139c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8H813l53.3 40-53.3 40H407.7zm-24 152.1c38.8 0 70.5 30.9 71.9 69.3-11.4-5.3-24.1-8.3-37.4-8.3-17.7 0-34.1 5.2-48 14.2-10.2-19.1-26.1-34.7-45.4-44.6 13.1-18.5 34.6-30.6 58.9-30.6zm-197 175v-50c0-49.6 40.4-90 90-90 8.9 0 17.5 1.3 25.6 3.7 5.2 1.5 10.1 3.5 14.9 5.9 17.4 8.8 31.6 23.1 40.3 40.6-11 10.4-19.3 23.6-23.8 38.4-1.8 5.8-3 11.9-3.5 18.1-.2 2.6-.3 5.2-.3 7.8v25.5H186.7zm159 0v-25.5c0-5.3.6-10.4 1.7-15.4 7.1-32.6 36.1-57.1 70.8-57.1 13.1 0 25.4 3.5 36 9.6 5 2.9 9.7 6.4 13.9 10.4 13.9 13.2 22.6 31.9 22.6 52.5v25.5h-145z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M302.3 776.8c-8.1-2.4-16.7-3.7-25.6-3.7-46 0-84 34.6-89.3 79.2 22.7-.7 47.4-5.4 60.9-11.7 24.3-11.3 9.5-38 43.8-42.2 10.8-1.3 21.2-3.2 32-11.8-2.2-1.4-4.5-2.7-6.9-3.9-4.8-2.4-9.8-4.4-14.9-5.9zm81.4-38.7c-21.9 0-41.6 9.9-54.8 25.4-1.4 1.7-2.8 3.4-4.1 5.2 4.9 2.5 9.5 5.3 13.9 8.5.6-.2 1.3-.5 1.9-.7 8.8-3.2 15-9.2 21.7-12.8 11.3-6.1 27.5 1.3 45.7 1.3 7.5 0 15.3-2.3 23.6-8.7a71.865 71.865 0 0 0-47.9-18.2z"
                  ></path>
                </svg>

                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div className="flex flex-wrap w-[200px] items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 font-semibold leading-6">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    PINIPIG FESTIVAL
                  </a>
                </h3>
              </div>
              <div className="flex gap-x-2.5 pl-8 pr-8">
                <p className="text-xs">
                  Municipal Tourism Office Sofronio Espanola, Palawan Rogelda
                  Pielago Reyes 09157860617
                </p>
              </div>
            </article> */}
            {/* <article className="relative isolate flex flex-col justify-end h-[300px] w-full bg-white pb-8 ">
              <time
                dateTime="2020-03-16"
                className="absolute top-4 text-center text-white w-full bg-gray-900/80"
              >
                November 11
              </time>
              <div className="px-8">
                <img className="w-24 h-24 mr-2" src="/images/1741986594.jpg" />

                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div className="flex flex-wrap w-[200px] items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 font-semibold leading-6">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    SUBARAW FESTIVAL PPUR (UNDERGROUND RIVER DAY)
                  </a>
                </h3>
              </div>
              <div className="flex gap-x-2.5 pl-8 pr-8">
                <p className="text-xs">
                  City Tourism Office Puerto Princesa City, Palawan Mr. Demetrio
                  Alvior, JR. (048) 717-8005/8035
                </p>
              </div>
            </article> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
