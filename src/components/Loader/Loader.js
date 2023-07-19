import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader () {
  return (
    <div className={css.Container}>
    <ThreeCircles
  height="100"
  width="100"
  color="#8B00FF"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  );
};


