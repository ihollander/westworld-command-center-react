import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({host, onHostClick}) => {

  const handleClick = () => {
    onHostClick(host.id)
  }
  // /* NOTE: The className "host selected" renders a different style than simply "host". */
  return(
    <Card
      className={`host ${host.selected && "selected"}`}
      onClick={handleClick}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
