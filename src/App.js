import React,{useState} from 'react'

const App= () => 
{
  const [temperatureValue,setTemperateValue] =useState(15);
  const [temperatureColor,setTemperateColor] = useState('cold')

  const increaseTemperature = () =>{
    const newTemperature =temperatureValue+1

    if(newTemperature >15){
      setTemperateColor('hot')
    }
    setTemperateValue(newTemperature)
  }

  const decreaseTemperature = () =>{
    const newTemperature =temperatureValue-1

    if(newTemperature <15){
      setTemperateColor('cold')
    }
    setTemperateValue(newTemperature)
  }

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className= {`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={()=>increaseTemperature()} >+</button>
        <button onClick={()=>decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App;