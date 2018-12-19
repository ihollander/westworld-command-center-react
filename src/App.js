import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

const AREA_URL = "http://localhost:4000/areas";
const HOSTS_URL = "http://localhost:4000/hosts";
// const URLS = ["http://localhost:4000/areas", "http://localhost:4000/hosts"]


class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHostId: null
  }

  componentDidMount() {
    const hostFetch = fetch(HOSTS_URL).then(r => r.json())
    const areaFetch = fetch(AREA_URL).then(r => r.json())
    Promise.all([hostFetch, areaFetch]).then(([hosts, areasData]) => {
      const areas = areasData.map(a => {
        const formattedName = a.name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        return {...a, formattedName }
      })
      this.setState({ hosts, areas })
    })
  }
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  handleActiveToggle = (id, active) => {
    const hosts = this.state.hosts.map(h => h.id === id ? {...h, active} : h)
    this.setState({ hosts })
  }

  handleChangeArea = (id, area) => { 
    // check how many hosts are allowed in a given area
    const limit = this.state.areas.find(a => a.name === area).limit    

    // count how many hosts in that area including newly added
    const hosts = this.state.hosts.map(h => h.id === id ? {...h, area } : h)
    const currentlyInArea = hosts.filter(h => h.area === area).length

    if (currentlyInArea <= limit) {
      this.setState({ hosts }, () => {console.log(area, limit, currentlyInArea)})
    } else {
      alert(`The limit for ${area} is ${limit}, no more hosts can be added`)
    }
  }

  handleHostClick = (selectedHostId) => {
    this.setState({ selectedHostId })
  }

  get selectedHost() {
    return this.state.hosts.find(h => h.id === this.state.selectedHostId)
  }

  get activeHosts() {
    return this.state.hosts.filter(h => h.active)
  }

  get inactiveHosts() {
    return this.state.hosts.filter(h => !h.active)
  }

  render(){
    const { state: { areas }, inactiveHosts, activeHosts, handleHostClick, selectedHost } = this
    return (
      <Segment id='app'>
         <WestworldMap onHostClick={handleHostClick} hosts={activeHosts} areas={areas} selectedHost={selectedHost}/>
         <Headquarters onChangeHostArea={this.handleChangeArea} onActiveToggle={this.handleActiveToggle} selectedHost={selectedHost} onHostClick={handleHostClick} hosts={inactiveHosts} areas={areas} />
      </Segment>
    )
  }
}

export default App;
