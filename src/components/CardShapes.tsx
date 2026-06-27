type PlantCardShapeProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function PlantCardShape({ id, children, className = "" }: PlantCardShapeProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 550 668"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <foreignObject x={-6} y="-15.4705" width={562} height="682.87">
          <div
            style={{
              backdropFilter: "blur(12.5px)",
              clipPath: `url(#bgblur_${id}_clip_path)`,
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter={`url(#filter0_d_${id})`}>
          <path
            d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
          <path
            d="M439.961 11.2793C486.994 4.82018 530 40.8828 530 88.3057V563C530 604.974 495.974 639 454 639H96C54.0264 639 20 604.974 20 563V88.3057C20.0001 40.8828 63.0061 4.82017 110.039 11.2793C161.32 18.3221 224.927 25.332 275 25.332C325.073 25.332 388.68 18.3221 439.961 11.2793Z"
            stroke={`url(#paint0_linear_${id})`}
            strokeWidth={2}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id={`filter0_d_${id}`}
            x={-6}
            y="-15.4705"
            width={562}
            height="682.87"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={9} />
            <feGaussianBlur stdDeviation="9.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <clipPath id={`bgblur_${id}_clip_path`} transform="translate(6 15.4705)">
            <path d="M19 88.3058C19 40.2507 62.5673 3.75052 110.175 10.2889C161.448 17.3305 224.999 24.3316 275 24.3316C325.001 24.3316 388.552 17.3305 439.825 10.2889C487.433 3.75053 531 40.2507 531 88.3058V563C531 605.526 496.526 640 454 640H96C53.4741 640 19 605.526 19 563V88.3058Z" />
          </clipPath>
          <linearGradient
            id={`paint0_linear_${id}`}
            x1={31}
            y1="56.5"
            x2={472}
            y2={616}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.52" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

type ReviewCardShapeProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function ReviewCardShape({ id, children, className = "" }: ReviewCardShapeProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 550 508"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <foreignObject x={-6} y="-15.1548" width={562} height="522.555">
          <div
            style={{
              backdropFilter: "blur(12.5px)",
              clipPath: `url(#review_blur_${id}_clip_path)`,
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <g filter={`url(#review_filter_${id})`}>
          <path
            d="M19 88.1697C19 41.5238 60.1363 5.47099 106.534 10.2752C158.414 15.6471 223.808 21.1168 275 21.1168C326.192 21.1168 391.586 15.6471 443.466 10.2752C489.864 5.47099 531 41.5237 531 88.1697V403C531 445.526 496.526 480 454 480H96C53.4741 480 19 445.526 19 403V88.1697Z"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
          <path
            d="M443.568 11.2695C489.394 6.52454 530 42.1348 530 88.1699V403C530 444.974 495.974 479 454 479H96C54.0264 479 20 444.974 20 403V88.1699C20 42.1348 60.6056 6.52454 106.432 11.2695C158.318 16.642 223.754 22.1172 275 22.1172C326.246 22.1172 391.682 16.642 443.568 11.2695Z"
            stroke={`url(#review_paint_${id})`}
            strokeWidth={2}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id={`review_filter_${id}`}
            x={-6}
            y="-15.1548"
            width={562}
            height="522.555"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={9} />
            <feGaussianBlur stdDeviation="9.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <clipPath id={`review_blur_${id}_clip_path`} transform="translate(6 15.1548)">
            <path d="M19 88.1697C19 41.5238 60.1363 5.47099 106.534 10.2752C158.414 15.6471 223.808 21.1168 275 21.1168C326.192 21.1168 391.586 15.6471 443.466 10.2752C489.864 5.47099 531 41.5237 531 88.1697V403C531 445.526 496.526 480 454 480H96C53.4741 480 19 445.526 19 403V88.1697Z" />
          </clipPath>
          <linearGradient
            id={`review_paint_${id}`}
            x1={31}
            y1="45.0932"
            x2="326.283"
            y2="547.718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.52" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
