import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = ({ name, formattedName, limit, hosts, onHostClick, selectedHost }) => (

  <div className='area' id={name}>
    <h3 className='labels'>{formattedName}</h3>
    <HostList selectedHost={selectedHost} onHostClick={onHostClick} hosts={hosts} />
  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
