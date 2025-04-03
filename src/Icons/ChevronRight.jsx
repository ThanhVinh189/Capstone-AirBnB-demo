export default function ChevronRight(props) {
  const { width, height, type } = props;
  return (
    <>
      {type === "single" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12l-7 -7M16 12l-7 7"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="12;0"
            />
          </path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeDasharray={10}
            strokeDashoffset={10}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path d="M12 12l-5 -5M12 12l-5 5">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="10;0"
              />
            </path>
            <path d="M18 12l-5 -5M18 12l-5 5">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.3s"
                dur="0.3s"
                values="10;0"
              />
            </path>
          </g>
        </svg>
      )}
    </>
  );
}
