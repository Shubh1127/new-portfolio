'use client';
import Spline from '@splinetool/react-spline';

export default function SplineRobot() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Spline 
        scene="https://prod.spline.design/jddKD8wnsHVOTHWu/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}