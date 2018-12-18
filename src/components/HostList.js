import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({ hosts, onHostClick }) => {

  const renderHosts = () => {
    return hosts.map(host => <Host onHostClick={onHostClick} key={host.id} host={host} />)
  }

  return(
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  )
}

export default HostList
