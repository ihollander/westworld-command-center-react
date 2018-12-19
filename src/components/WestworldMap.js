import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';


const WestworldMap = ({areas, hosts, onHostClick, selectedHost}) => {

  const renderAreas = () => {
    return areas.map(area => {
      const areaHosts = hosts.filter(host => host.area === area.name)
      return (
        <Area selectedHost={selectedHost} onHostClick={onHostClick} key={area.id} limit={area.limit} name={area.name} formattedName={area.formattedName} hosts={areaHosts} />
      )
    })
  }

  return (
    <Segment id="map">
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap
