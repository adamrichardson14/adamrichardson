/* eslint-disable react/no-unescaped-entities */
import OGContainer from "../components/OGContainer";
import Socials from "../components/Socials";
import Wrapper from "../components/Wrapper";
export default function About() {
  return (
    <Wrapper>
      <OGContainer description="About Adam Richardson - Full Stack Developer and Content Creator">
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
            Hi, I'm Adam.{" "}
            <span role="img" aria-label="Hand Wave Emoji">
              ✋
            </span>
          </h1>
          <div className="text-2xl font-medium text-gray-300 mt-8 leading-10">
            <p>I'm a self taught programmer with around 10 years of experience.</p>
            <p className="mt-4">
              I recently launched this website and a Youtube channel which will be used to share
              code and teach building full stack websites from real applications that we're working
              on.
            </p>
          </div>
          <Socials />
        </div>
      </OGContainer>
    </Wrapper>
  );
}
