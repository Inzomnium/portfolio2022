import React, {useEffect, useState } from 'react'
import Speedometer, { Background,  Arc,  Needle,  Progress,  Marks,  Indicator, DangerPath,} from 'react-speedometer';


export const SkillCard = ({titulo, valor}) => {

  const [number, setNumber] = useState(0);
  
  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setNumber(valor + Math.random()),
      50
    );

    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  

  

  
    
  return (
    <>
   <Speedometer
      value={number}
      max={100}
      width={200}
      height={200}
      fontFamily='Quicksand'
      angle={320}
      >
  <Background
    color="#262626"
  />
  <Arc 
  color="#99B4BF"
  arcWidth="12"
  />
  <Needle 
  color="#D94E4E" 
  offset={45}
  baseWidth={4.5}
  circleRadius={12}
  circleColor="#3F5073"
  />
  <Progress
  color="#03A6A6"
  arcWidth={7}
  opacity={0.9}  
  />
 
  
   <Marks
  fontSize={12}
  step={5}
  color="black"
  lineColor="#EBEDF2"
  lineSize={14}
  lineOpacity={0.8}
  numbersRadius={15}
  />
  <DangerPath
  color="#F28705"
  arcWidth={3}
  opacity={0.8}
  />  
</Speedometer>
<div className='meterValue'>
<span>{valor}%</span>
  <h5>{titulo}</h5>  
</div>
   
                                </>
  )
}
