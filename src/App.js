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
    hosts: []
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

  get activeHosts() {
    return this.state.hosts.filter(h => h.active)
  }

  get inactiveHosts() {
    return this.state.hosts.filter(h => !h.active)
  }

  render(){
    return (
      <Segment id='app'>
         <WestworldMap hosts={this.activeHosts} areas={this.state.areas}/>
         <Headquarters hosts={this.inactiveHosts} areas={this.state.areas} />
      </Segment>
    )
  }
}

export default App;
