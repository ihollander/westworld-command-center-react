import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = ({hosts, onHostClick, selectedHost}) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      <HostList selectedHost={selectedHost} onHostClick={onHostClick} hosts={hosts} />
    </Segment>
  </Segment.Group>
)

export default ColdStorage
