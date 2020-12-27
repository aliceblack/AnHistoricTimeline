import logo from './sword.png';
import './App.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="2011 - present"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
          <img class="img-historic" src="https://www.billingschamber.com/media/Entrance-of-Luxor-Temple-Egypt-iStock-175526084.jpg" ></img>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2010 - 2011"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2008 - 2010"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2006 - 2008"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="April 2013"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="November 2012"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2002 - 2006"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#282c34', color: '#fff' }}
        />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default App;
