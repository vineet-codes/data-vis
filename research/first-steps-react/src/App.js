import './App.css';
import { arc } from 'd3';

import { range } from 'd3';

const FaceConatiner = ({ width, height, centerX, centerY, children }) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
    </svg>
  );
};

const BackgroundCircle = ({ radius, strokeWidth }) => {
  return (
    <circle
      // cx={`${centerX}`}
      // cy={`${centerY}`}
      r={radius}
      fill='yellow'
      stroke='black'
      strokeWidth={`${strokeWidth}`}
    />
  );
};

const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * (3 / 2));
  return <path d={mouthArc()} />;
};

const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => {
  return (
    <g>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill='black' />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill='black' />
    </g>
  );
};

const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}) => {
  return (
    <FaceConatiner
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}>
      <BackgroundCircle
        radius={`${centerY - strokeWidth / 2}`}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceConatiner>
  );
};

const App = () => {
  //
  const width = 166;
  const height = 166;

  // const strokeWidth = 2;
  // // Eyes input
  // const eyeOffsetX = 30;
  // const eyeOffsetY = 30;
  // const eyeRadius = 10;

  // // Mouth inputs
  // const mouthRadius = 10;
  // const mouthWidth = 40;

  const array = range(15);
  return (
    <>
      <h1 className='title'>Lets make faces</h1>
      {array.map(() => (
        <Face
          width={width}
          height={height}
          centerX={width / 2}
          centerY={height / 2}
          strokeWidth={6 + Math.random() * 2}
          eyeOffsetX={20 + Math.random() * 9}
          eyeOffsetY={20 + Math.random() * 15}
          eyeRadius={5 + Math.random() * 5}
          mouthRadius={7 + Math.random() * 9}
          mouthWidth={30 + Math.random() * 10}
        />
      ))}
    </>
  );
};

export default App;
