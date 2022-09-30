export const Important = ({
                              size = '1rem',
                              color = "red"
                          }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} preserveAspectRatio="xMidYMid meet"
         viewBox="0 0 24 24">
        <g fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path strokeLinecap="round" d="M12 7v6m0 3.5v.5"/>
        </g>
    </svg>
)