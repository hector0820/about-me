import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import diccionario from '../../../code/bash/diccionario'
import { useState } from 'react';
import Codestyle from '../../Codestyle';
import espanol from '../../../code/bash/español';
import portugues from '../../../code/bash/portugues';

function Bashcode() {
  const [key, setKey] = useState('diccionario');

  return(
  <div className='overflow-auto w-[90%] mx-auto h-96'>
      <p className="text-justify"> 
        I utilized Bash scripting to automate a web scraping task. The
        objective was to retrieve a word dictionary from a website and save
        it as a text file. To achieve this, I employed a combination of Bash
        scripting techniques and web scraping tools. One of the key elements I
        incorporated was the use of global variables to ensure efficient data management
        and access throughout the script. By employing global variables, I could easily
        retrieve the word dictionary and store it in memory during the scraping process.
        Once the data was successfully obtained, I saved it as a text file for future
        reference and analysis. This approach allowed for a streamlined and automated
        solution to retrieve and save the word dictionary, facilitating convenient
        access to the information.
      </p>
      <hr />
      <h3 className='mb-4 uppercase text-blue-400'>Bash Scripting for a Multi-language Dictionary
        <a href='https://github.com/hector0820/Web-Dictionaries' target='_blank' rel="noopener">
          <svg className='h-4 inline pl-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
          </svg>
        </a>
      </h3>
      <Tabs
        id="bash-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="diccionario" title="diccionario.sh"><Codestyle lang='bash' codetext={ diccionario }/></Tab>
        <Tab eventKey="espanol" title="español.sh"><Codestyle lang='bash' codetext={ espanol }/></Tab>
        <Tab eventKey="portugues" title="portugues.sh"><Codestyle lang='bash' codetext={ portugues }/></Tab>
      </Tabs>
  </div>
  );
}

export default Bashcode