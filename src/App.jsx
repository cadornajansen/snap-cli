export default function App() {
  return (
    <div className="w-full h-screen-ios max-h-screen">
      <header className="w-full flex justify-between fixed top-0 py-6 px-4 md:py-8 md:px-20">
        <div className="w-full inline-flex gap-2 md:gap-4 items-center">
          <h1 className="font-bold text-base md:text-lg">Snap CLI</h1>
          <span className="text-cyan-500 text-xs font-medium px-2 py-[2px] border-opacity-50 border-cyan-800 border rounded-md">
            Beta
          </span>
        </div>
        <div className="flex gap-4">
          <nav className="text-white/80 text-sm flex gap-4">
            <a href="#">Docs</a>
            <a href="#">Examples</a>
          </nav>
          <span
            aria-hidden="true"
            class="bg-white/30 mx-2 hidden h-5 w-px sm:!inline-block"
          ></span>
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 127.14 96.36"
              width="20"
              height="20"
            >
              <g>
                <g id="Discord_Logos" data-name="Discord Logos">
                  <g
                    id="Discord_Logo_-_Large_-_White"
                    data-name="Discord Logo - Large - White"
                  >
                    <path
                      fill="currentColor"
                      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </header>
      <main className="h-full flex flex-col gap-6 justify-center items-center text-center">
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-white/90 flex flex-col font-bold text-3xl md:text-7xl">
            <span>
              The Handy{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r to-indigo-500 from-10% via-sky-500 via-30% from-emerald-500 to-90%">
                Interactive
              </span>
            </span>
            <span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                CLI
              </span>{" "}
              for Developers
            </span>
          </h1>
          <p className="px-6 xl:px-[25rem] text-white/80 text-base md:text-xl font-medium flex flex-col">
            A collection of snappy and sleek tools to spice up CLI experience making your interactions a delight!
          </p>
        </div>
        <div className="w-full flex justify-center gap-4">
          <button className="smooth hover:scale-[1.05]   flex gap-3 items-center px-5 py-2 font-medium rounded-md outline-none bg-white text-black/80">
            Start using our CLI{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 12H4.75"
              ></path>
            </svg>
          </button>
          <button className="cmd font-[sans] before:text-slate-11 before:mr-2 before:content-['$'] border-slate-6 relative items-center overflow-auto whitespace-pre rounded-md border px-4 text-sm backdrop-blur-md max-w-max hidden md:!inline-flex">
            npm install snap-cli{" "}
            <button class="text-slate-11 focus:text-slate-12 focus:ring-slate-8 hover:text-slate-12 rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.75 12.25H14.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.75 15.25H14.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
        </div>
      </main>
      <footer className="w-full flex justify-center items-center fixed bottom-0 py-6 px-4 md:py-8 md:px-20">
        <div className="text-xs md:text-sm font-medium">
          <span className="text-white/70 flex items-center gap-1">
            Created By{" "}
            <a className="smooth hover:underline hover:-translate-y-1 flex items-center gap-1 text-white" href="https://www.jansencadorna.com">
              <img
                className="mx-1 rounded-full"
                height={24}
                width={24}
                src="https://avatars.githubusercontent.com/u/119676423?v=4"
              />
              Jansen Cadorna
            </a>{" "}
            with <span className="text-white">Tailwind</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
