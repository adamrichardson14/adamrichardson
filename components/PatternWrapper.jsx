export default function PatternWrapper({ children }) {
  return (
    <div className="relative overflow-hidden ">
      <div
        className="hidden md:block md:absolute md:inset-y-0 md:h-full md:w-full z-0"
        aria-hidden="true">
        <div className="relative h-full max-w-7xl w-full mx-auto opacity-70">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/3"
            width="700"
            height="784"
            fill="none"
            viewBox="0 0 800 784">
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="700" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/3"
            width="800"
            height="784"
            fill="none"
            viewBox="0 0 600 784">
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="800" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
