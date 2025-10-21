interface CustomRadialBarProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  colorLine?: string;
}

export function CustomRadialBar({
  value,
  max = 100,
  size = 200,
  strokeWidth = 10,
  colorLine = "#0055ff",
}: CustomRadialBarProps) {
  const percentage = Math.min((value / max) * 100, 100); // Limitar al 100%
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#3b3b3b"
        fill="none"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={colorLine}
        fill="none"
        strokeWidth={3}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="20px"
        fill="#9e9e9e"
      >
        {Math.round(percentage)}%
      </text>
    </svg>
  );
}
