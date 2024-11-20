import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Body = () => {
  return (
    <>
      <section className="my-8 lg:flex lg:mx-[8rem]">
        <div className="hero-img flex lg:h-96 lg:w-96 h-72 w-72"></div>
        <div className="lg:w-1/2 max-sm:my-4 space-y-4 lg:my-auto ">
          <Image
            src="/hero.svg"
            width={300}
            className="mx-auto"
            height={200}
            alt="hero"
          />
          <h1 className="text-2xl w-[13rem] font-extrabold mx-auto lg:w-[18rem] lg:text-4xl text-center">
            Full-Stack Web Developer
          </h1>
          <p className="text-center text-md mx-auto lg:w-[35rem] text-gray-500 font-bold leading-2">
            Hi, I&apos;m Sawan Rijal. A passionate Full-Stack Developer based in
            Winnipeg, Manitoba.
          </p>
          <div className="flex justify-center space-x-4">
            <Image
              src="/linkedin.png"
              className="w-10 h-10 shadow-xl rounded-full"
              alt="linkedin"
              width={40}
              height={40}
            />
            <Image
              src="/github.png"
              className="w-10 h-10 p-1 rounded-full shadow-xl"
              alt="github"
              width={50}
              height={40}
            />
            <a
              
              download="sd.pdf"
              className="flex items-center justify-center w-10 h-10 p-1 rounded-full shadow-xl"
            >
              <svg
                className="shadow-xl rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#c9dcf4"
                  d="M71.986,88.109c-14.657,1.189-29.314,1.189-43.971,0c-3.666-0.297-6.521-3.286-6.707-6.96 c-1.036-20.432-1.036-40.864,0-61.296c0.186-3.678,3.049-6.665,6.72-6.962c9.872-0.8,19.745-1.061,29.617-0.783 c0.83,0.023,1.642,0.177,2.411,0.446c1.206,0.422,18.254,17.808,18.662,18.874c0.322,0.843,0.504,1.741,0.529,2.66 c0.426,15.686,0.241,31.372-0.554,47.059C78.506,84.821,75.653,87.811,71.986,88.109z"
                ></path>
                <path
                  fill="#4a254b"
                  d="M50,53.947c2.567,0,4.683-1.935,4.967-4.426c0.035-0.303-0.186-0.574-0.491-0.574c-1.726,0-7.224,0-8.952,0 c-0.305,0-0.527,0.271-0.492,0.574C45.317,52.012,47.433,53.947,50,53.947z"
                ></path>
                <circle cx="37.5" cy="43.447" r="5.5" fill="#fff"></circle>
                <circle cx="37.5" cy="43.447" r="2.5" fill="#4a254b"></circle>
                <circle cx="62.5" cy="43.447" r="5.5" fill="#fff"></circle>
                <circle cx="62.5" cy="43.447" r="2.5" fill="#4a254</div>b"></circle>
                <path
                  fill="#6b96d6"
                  d="M68.634,31.425l10.075,0.006c-0.407-1.067-1.03-2.049-1.851-2.872c-4.582-4.596-9.135-9.277-13.596-13.935 c-0.9-0.94-2.002-1.644-3.208-2.066l0.022,10.324C60.087,27.601,63.914,31.422,68.634,31.425z"
                ></path>
                <path
                  fill="#6b96d6"
                  d="M71.761,63.881H28.239c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h43.521c0.276,0,0.5,0.224,0.5,0.5 S72.037,63.881,71.761,63.881z"
                ></path>
                <path
                  fill="#6b96d6"
                  d="M61.195,70.924H28.239c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h32.956c0.276,0,0.5,0.224,0.5,0.5 S61.472,70.924,61.195,70.924z"
                ></path>
                <path
                  fill="#6b96d6"
                  d="M71.761,77.968H28.239c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h43.521c0.276,0,0.5,0.224,0.5,0.5 S72.037,77.968,71.761,77.968z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="">
        <div>
        <h1 className="text-center text-2xl font-bold">My Tech Stack</h1>
        <div className="flex mx-auto justify-evenly flex-wrap max-sm:w-[19rem] lg:w-[27rem] gap-4 space-x-5 my-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="60px"
                  height="60px"
                >
                  <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                  <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                  <path
                    fill="#FFF"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                  />
                  <path
                    fill="#EEE"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  />
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0277BD"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#039BE5"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>JAVASCRIPT</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>EXPRESS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#5d4037"
                    d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                  ></path>
                  <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                  <path
                    fill="#4caf50"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                  ></path>
                  <path
                    fill="#81c784"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>MONGODB</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
                    x1="24"
                    x2="24"
                    y1="43.734"
                    y2="4.266"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#0a070a"></stop>
                    <stop offset=".465" stop-color="#2b2b2b"></stop>
                    <stop offset="1" stop-color="#4b4b4b"></stop>
                  </linearGradient>
                  <circle
                    cx="24"
                    cy="24"
                    r="19.734"
                    fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
                  ></circle>
                  <rect
                    width="3.023"
                    height="15.996"
                    x="15.992"
                    y="16.027"
                    fill="#fff"
                  ></rect>
                  <linearGradient
                    id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
                    x1="30.512"
                    x2="30.512"
                    y1="33.021"
                    y2="18.431"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".377"
                      stop-color="#fff"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset=".666"
                      stop-color="#fff"
                      stop-opacity=".3"
                    ></stop>
                    <stop offset=".988" stop-color="#fff"></stop>
                  </linearGradient>
                  <rect
                    width="2.953"
                    height="14.59"
                    x="29.035"
                    y="15.957"
                    fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
                  ></rect>
                  <linearGradient
                    id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
                    x1="22.102"
                    x2="36.661"
                    y1="21.443"
                    y2="40.529"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".296" stop-color="#fff"></stop>
                    <stop
                      offset=".521"
                      stop-color="#fff"
                      stop-opacity=".5"
                    ></stop>
                    <stop
                      offset=".838"
                      stop-color="#fff"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <polygon
                    fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
                    points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
                  ></polygon>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>NEXTJS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#80deea"
                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                  ></path>
                  <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>REACT</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#388e3c"
                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                  ></path>
                  <path
                    fill="#2e7d32"
                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>NODEJS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        </div>
      </section>
      <section className="mt-[5rem]" id="about">
        <div className="lg:flex lg:mx-[128px]">
          <div className="lg:w-1/2">
            <Image
              className="mx-auto lg: rounded-[100%] border border-black"
              src={"/aboutme.svg"}
              width={250}
              height={100}
              alt="about"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-center text-md mx-auto lg:my-12 lg:w-[33rem] w-[18rem] my-4 text-gray-500 font-bold leading-2">
              I am a Full-Stack Developer with a passion for creating beautiful
              and user-friendly websites. I have experience in building web
              applications using modern technologies like React, Next.js,
              Node.js, Express, and MongoDB. I am always eager to learn new
              technologies and improve my skills.
            </p>
          </div>
        </div>
      </section>
      <section className="projects py-16 max-sm:mx-7">
        <div className="container lg:mx-[8rem] px-4">
          <h2 className="text-2xl font-bold text-center max-sm:text-2xl mb-12">
            My Recent Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-[60rem] mx-auto cursor-pointer">
            <div className="group border relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/podcast.svg"
                  width={400}
                  height={400}
                  alt="Project 1"
                  className="object-contain w-full max-sm:h-96"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">Podcaster</h3>
                    <p className="mb-4">Create podcasts with AI</p>
                    <div className="flex justify-center flex-wrap gap-4 mb-4 lg:w-[18rem]">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Nextjs
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Convex backend
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Clerk Authentication
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Dall-e-3 API
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Open AI&apos;s Text-to-speech API
                      </span>
                    </div>
                    <div className="flex justify-center gap-4">
                      <a
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 ease-in-out"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group border relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/ecommerce.svg"
                  width={400}
                  height={400}
                  alt="Project 1"
                  className="object-contain w-full max-sm:h-96"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">YumMomo</h3>
                    <p className="mb-4">An ecommerce website for a business</p>
                    <div className="flex justify-center flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Nextjs
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Mongodb
                      </span>
                    </div>
                    <div className="flex justify-center gap-4">
                      <a
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 ease-in-out"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group border relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/blog.svg"
                  width={400}
                  height={400}
                  alt="Project 1"
                  className="object-contain w-full max-sm:h-96"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">SimpleBlog</h3>
                    <p className="mb-4">
                      A simple blog writing web application
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Nextjs
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Mongodb
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        TinyMCE Text Editor
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        Web search API
                      </span>
                    </div>
                    <div className="flex justify-center gap-4">
                      <a
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 ease-in-out"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4 flex flex-col">
                <h3 className="text-xl font-semibold max-sm:mx-auto">Contact Information</h3>
                <div className="flex items-center space-x-4">
                  <Image className="" src={"/email.png"} height={30} width={30} alt="email"/>
                  <a href="mailto:rijalsawan@example.com" className="text-gray-600 hover:text-black cursor-pointer">rijalsawan@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                <Image className="" src={"/location.png"} height={30} width={30} alt="email"/>
                  <p className="text-gray-600">Winnipeg, Manitoba, Canada</p>
                </div>
                <Image className="w-[lg:30rem]" src={"/contact.svg"} height={100} width={300} alt="contact"/>
              </div>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  
                  className="w-full bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Sawan Rijal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Body;
