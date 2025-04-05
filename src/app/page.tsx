"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#D4D4D8] px-4 py-16 md:px-8 lg:px-16 flex flex-col items-center">
      <main className="w-full max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="h-8 overflow-hidden font-medium relative text-[#D4D4D8]">
            <div className="animate-slide-text">
              <div className="py-1">Chinedu Alvin Okafor</div>
              <div className="py-1">Software Engineer</div>
              <div className="py-1">Music Producer</div>
              <div className="py-1">Human</div>
              <div className="py-1">Chinedu Alvin Okafor</div>{" "}
              {/* Repeat first item for seamless loop */}
            </div>
            <style jsx>{`
              @keyframes slideText {
                0% {
                  transform: translateY(0);
                }
                20% {
                  transform: translateY(-20%);
                }
                40% {
                  transform: translateY(-40%);
                }
                60% {
                  transform: translateY(-60%);
                }
                80% {
                  transform: translateY(-80%);
                }
                100% {
                  transform: translateY(0);
                }
              }
              .animate-slide-text {
                animation: slideText 12s ease-in-out infinite;
              }
            `}</style>
          </div>
        </header>

        <section className="mb-10">
          <p className="text-[#e4e4e7] mb-2">
            I'm a <span className="text-[#99A1AF]">Software Engineer</span> on a
            mission to build <span className="text-[#99A1AF]">impactful</span>{" "}
            consumer products.
          </p>
          <p className="text-[#e4e4e7]">
            With <span className="text-[#99A1AF]">3+ years</span> of experience,
            I'm all about creating{" "}
            <span className="text-[#99A1AF]">user-friendly</span> solutions that
            tackle real-world problems, the kind that genuinely make a
            difference in people's lives! When I'm not coding, you can find me
            making music or lost in the world of film.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl mb-4 text-[#D4D4D8] ">Work</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#d4d4d8]"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                href="https://bookumapp.com/"
                className="text-[#99A1AF] underline hover:text-[#D4D4D8] transition-colors"
              >
                Bookum
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#d4d4d8]"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                href="https://www.mediqihealth.com"
                className="text-[#99A1AF] underline hover:text-[#D4D4D8] transition-colors"
              >
                MEDIQ-i
              </a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl mb-4 text-[#D4D4D8]">
            Tools, Languages, Libraries & Frameworks
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#99A1AF]">
            {[
              "React.js",
              "Next.js",
              "React Native",
              "Astro.js",
              "Radix UI",
              "Chakra UI",
              "Material UI",
              "Zustand",
              "Tanstack Query",
              "Express.js",
              "Postgres SQL",
              "Supabase",
              "BullMQ(Redis)",
              "Netlify",
              "Railway",
              "Vercel",
              "Javascript",
              "Typescript",
              "CSS",
              "HTML",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="cursor-pointer hover:text-[#D4D4D8] hover:scale-105 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl mb-4">Writing</h2>
          <ul className="list-disc list-inside text-[#d4d4d8]">
            <li>
              <a
                href="https://medium.com/@alvinokafor/handling-multiple-github-user-accounts-on-one-computer-4d50792e4c7f"
                className="underline text-[#99A1AF] hover:text-[#D4D4D8]"
              >
                Handling Multiple Github User Accounts On One Computer
              </a>
            </li>
          </ul>
        </section>

        <footer className="flex gap-6 text-[#99a1af]">
          <a
            href="https://drive.google.com/file/d/1Ujxz09iJLwwGvwWcERXrXObJDL7D_P2x/view?usp=sharing"
            target="_blank"
            className="hover:text-[#ffffff] transition-colors"
          >
            resume
          </a>
          <a
            href="mailto:alvin2k99@gmail.com"
            className="hover:text-[#ffffff] transition-colors"
          >
            mail
          </a>
          <a
            href="https://x.com/retrosearth"
            target="_blank"
            className="hover:text-[#ffffff] transition-colors"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/chinedu-okafor-05a4a91a1/"
            target="_blank"
            className="hover:text-[#ffffff] transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/alvinokafor"
            target="_blank"
            className="hover:text-[#ffffff] transition-colors"
          >
            github
          </a>
          <a
            href="https://open.spotify.com/playlist/08GACrIWtNtdPOIVYCG629?si=77949fb3264e4719"
            target="_blank"
            className="hover:text-[#ffffff] transition-colors"
          >
            my music
          </a>
        </footer>
      </main>
    </div>
  );
}
