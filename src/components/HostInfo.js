import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
// import { hostname } from 'os';


class HostInfo extends Component {
  constructor(props) {
    super(props)
    const options = props.areas.map(a => ({
      key: a.name,
      text: a.formattedName,
      value: a.name
    }))

    this.state = {
      options,
      value: props.host.area
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {...state, value: props.host.area}
  }

  // componentDidUpdate(prevProps, prevState, snap) {
  //   console.log(prevProps)
  //   console.log(prevState)
  //   console.log(snap)
  // }

  handleChange = (e, {value}) => {
    this.props.onChangeHostArea(this.props.host.id, value)
    this.setState({ value })
  }

  toggle = (e, data) => {
    const active = data.checked
    this.props.onActiveToggle(this.props.host.id, active)
  }

  get name() {
    return  (this.props.host.lastName === 'n/a') ? this.props.host.firstName : `${this.props.host.firstName} ${this.props.host.lastName}`
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.name} | { this.props.host.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.host.active ? "Active" : "Decommissioned"}
                  checked={this.props.host.active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
