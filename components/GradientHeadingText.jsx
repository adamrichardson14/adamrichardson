export default function GradientHeadingText({ text }) {
  return (
    <h2 className="bg-gradient-to-r text-transparent to-cyan-300 from-blue-500 bg-clip-text text-2xl font-bold leading-10 sm:text-5xl pb-2">
      {text}
    </h2>
  );
}
