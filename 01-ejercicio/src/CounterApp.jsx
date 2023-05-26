import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = ( event) => setCounter( counter + 1 );
    const handleSubsract = (e) => setCounter( counter - 1 );
    const handleReset= (e) => setCounter( (c) => value );
    


  return (
    <>
        <h1>CounterApp</h1>        
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }> suma 1 </button>
        <button onClick={ handleSubsract}> resta 1 </button>
        <button onClick={ handleReset }> reset </button>
    </>    
  )
}

CounterApp.propTypes = {  
  value: PropTypes.number.isRequired

}

CounterApp.defaultProps = { 
  value: 0,
}