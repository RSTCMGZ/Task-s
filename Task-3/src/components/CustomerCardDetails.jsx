import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <div className='d-flex align-items-center justify-content-center  flex-column w-100'>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 mt-5 bgColor"
    >
      <Tab eventKey="PersonalInfo" title="Personal Info">
      Personal Info
      </Tab>
      <Tab eventKey="SocialMedia" title="Social Medya">
      Social Medya
      </Tab>
      <Tab eventKey="ConversationHistory"title={<span className="assigned-agents-tab">Conversation History</span>} >
      Conversation History
      </Tab>
      <Tab eventKey="AssignedAgents" title="Assigned Agents" >
      Assigned Agents
      </Tab>
    </Tabs>
    </div>

  );
}

export default UncontrolledExample;