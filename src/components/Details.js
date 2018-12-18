import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = ({selectedHost, areas, onActiveToggle, onChangeHostArea}) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (
    selectedHost 
      ? <HostInfo onChangeHostArea={onChangeHostArea} onActiveToggle={onActiveToggle} areas={areas} host={selectedHost} />
      : <Image size='medium' src={Images.westworldLogo}/>
    )

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
