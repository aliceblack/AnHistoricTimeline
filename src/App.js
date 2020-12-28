import React from 'react';


import logo from './sword.png';
import './App.css';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        items: [{"id":0}]
    };
  }

  render() {
    var listItems = this.state.items.map(function(item) {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date={item?.date}
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">{item?.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item?.subtitle}</h4>
          <p>{item?.description}</p>
          <img class="img-historic" src={item?.media} ></img>
        </VerticalTimelineElement>
      ); 
    }); 
    return (
      <div> 
        <VerticalTimeline>
          {listItems} 
        </VerticalTimeline>
      </div> 
    ); 
  } 

  componentDidMount() {
    const current = this;
    fetch("/items.json")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      current.setState({items: data});
    })
  }


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <Board>
        </Board>
      </div>
    </div>
  );
}

export default App;
