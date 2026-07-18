import Reveal from "../common/Reveal";

export default function About() {
  return (
    <section id="about" className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 md:grid-cols-2">
      <div>
        <p className="mb-4 text-sm font-semibold text-purple-400 animate-slide-left delay-100">
          FRONT-END DEVELOPER
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl animate-slide-left delay-200">
          빠르게 배우고,<br />
          섬세하게 개발하다
        </h1>

        <div className="mt-8 flex gap-4 animate-slide-left delay-400">
          <a
            href="#projects"
            className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            프로젝트 보기
          </a>

          <a
            href="https://github.com/jsy5876"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-purple-400 hover:text-purple-300"
          >
            GitHub
          </a>
        </div>
      </div>

      <Reveal direction="left">
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-900/20">
            <p className="text-sm text-purple-300">About Me</p>

            <h3 className="mt-4 text-2xl font-bold">
              안녕하세요! 프론트엔드 개발자 조서연입니다.
            </h3>

            <div className="mt-5 leading-7 text-gray-400">
              <p>새롭게 배운 기술을 직접 적용하며 제 역량으로 만들고, 반복되거나 불편한 작업은 더 효율적인 방식으로 개선합니다.
                사용자에게 익숙하고 편리한 경험을 제공하며, 프로젝트를 실사용 가능한 완성도까지 발전시키는 개발자가 되고자 합니다.</p>

            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                #꾸준함
              </span>
               <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                #책임감
              </span>
               <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                #분석적
              </span>
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                #열정적인
              </span>
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                #완벽주의
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}