import React from 'react';
import {useState} from 'react';

const SwitchTabs = (props) => {

  return (
    <div>
     <button onClick={props.handleClick}>To Watch</button>
     <button onClick={props.handleClick}>Watched</button>
    </div>
  )
};

export default SwitchTabs;