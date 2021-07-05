/* eslint-disable react/no-unescaped-entities */
import GradientHeadingText from "../components/GradientHeadingText";
import OGContainer from "../components/OGContainer";
import Wrapper from "../components/Wrapper";
export default function About() {
  return (
    <Wrapper>
      <OGContainer description="About Adam Richardson - Full Stack Developer and Content Creator">
        <div className="mt-8 ">
          <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
            Hi, I'm Adam.{" "}
            <span role="img" aria-label="Hand Wave Emoji">
              ✋
            </span>
          </h1>
          <div className="text-2xl font-medium text-gray-300 mt-8 leading-10">
            <div className="prose prose-2xl prose-dark">
              <p>I'm a self taught programmer with around 10 years of experience.</p>
              <p className="mt-4">
                I recently launched this website and a Youtube channel which will be used to share
                code and teach building full stack websites from real applications that we're
                working on. Below you will see my tech stack which is what you can expect to see
                courses on in the very near future.
              </p>
              <p className="text-2xl font-medium text-gray-300 mt-8 leading-10">
                I use other frameworks and tech for smaller side projects and experimenting for fun,
                however this is my main stack and what I believe I can teach to a good level to help
                aspiring developers.
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Business" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <p>
                I run a development agency{" "}
                <a href="https://zoeble.com" target="_blank" rel="noopener noreferrer">
                  Zoeble Website Design and Development.
                </a>
              </p>
              <p>
                Lots of the projects that you see on my Youtube channel will be based from work that
                we are doing in the agency.
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Stack" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <h3 className="text-xl font-bold leading-7 text-gray-200 sm:text-2xl mt-2">
                Frontend
              </h3>
              <p>
                I've been working with React for a number of years now and will use it for pretty
                much every project. Next.js is my favourite React framework and I use Tailwindcss
                for styling websites. For smaller individual projects I will use Javascript over
                Typescript.
              </p>
              <h3 className="text-xl font-bold leading-7 text-gray-200 sm:text-2xl mt-2">
                Backend
              </h3>
              <p>
                This one is dependant on the project and this changes quite a lot. For simple
                projects I've used a lot of headless CMS's and I feel my favourite is Sanity. I
                enjoy using Strapi and Keystone too.
              </p>
              <p>
                For more complex integrations I would integrate with my own database via an API.
                I've extensively used MySQL and Postgres, along with Mongodb and Firebase Firestore.
                For data that isn't heavily relational I would probably opt for either Firebase or
                Mongodb depending on complexiy. For relational data I would definitely go with
                Postgres.
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Full Stack" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <p>This is what I will default to for larger applications.</p>
              <ul>
                <li>Next.js</li>
                <li>Typescript</li>
                <p className="text-gray-300">
                  I really love using Typescript on larger codebases/projects, especially when
                  working with others.
                </p>
                <li>Tailwindcss</li>
                <li>
                  Express Server (Experimenting on solely using Next API routes on current project"
                </li>
                <p className="text-gray-300">
                  The current project we're working on is built with Next.js API routes solely. This
                  is actually working very well with next-auth and Prisma.
                </p>
                <li>Postgres (AWS)</li>
                <p className="text-gray-300">Postgres DB hosted on AWS RDS.</p>
                <li>AWS S3 - Image/Video Storage</li>
                <li>Prisma - ORM</li>
                <p className="text-gray-300">
                  Huge huge fan of Prisma and I'm confident using this in production projects now.
                  Developer experience is top notch for larger scale projects and being fully typed
                  is amazing for larger projects.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </OGContainer>
    </Wrapper>
  );
}
