export const ThreeDotsRotate = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
  <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
  <g>
      <circle cx="4" cy="12" r="3" fill="currentColor"></circle>
      <circle cx="20" cy="12" r="3" fill="currentColor"></circle>
      <animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"></animateTransform>
  </g>
</svg>
  )