import React, { useState, useEffect } from 'react';

export function App(props) {
    const [state, setState] = useState(-1)
    useEffect(() => {
      setInterval(() => populate(state), 1000)
      setInterval(() => setState(Math.random()), 1000)
    }, [])

    populate = (_state) => {
      console.log(Date.now(), _state)
    }

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
