import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WebDevelopment from './Tabs/skills/Webdevelopment';
import PythonCode from './Tabs/skills/Pythoncode';
import Bashcode from './Tabs/skills/Bash';



function SkillsTabs() {
  const [key, setKey] = useState('webdevelopment');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="webdevelopment" title="Web Development"><WebDevelopment /></Tab>
      <Tab eventKey="pythoncode" title="Python"><PythonCode /></Tab>
      <Tab eventKey="bash" title="Bash"><Bashcode /></Tab>
    </Tabs>
  );
}

export default SkillsTabs;