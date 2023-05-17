import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {

  function finish(x, y) {
    if(x) {
      return "Bachelor's degree in ".concat('', y)
    }
    return "Unfinished degree in ".concat('', y)
  }

  function getmy(x) {
    let a = new Date(x)
    let months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
    return months[a.getMonth()].concat(' ', a.getFullYear().toString())
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { props.university }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='mb-0'>{ finish(props.finish, props.career) }</h4>
        <div>
          <div className='block text-sm mb-2 text-stone-500'>
            <span className='uppercase after:content-["-"] after:px-1'>{ getmy(props.start) }</span>
            <span className='uppercase' >{ getmy(props.end) }</span>
          </div>
          <p>
            Developed skills
          </p>
          <ul className='list-disc text-sm'>
            { props.skills.map((skill)=>{
              return(
                <li className='my-1 pr-7 text-justify'>{ skill }</li>
              )
            }) }
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function University(props) {
  const [modalShow, setModalShow] = useState(false);
  return(
    <>
      <div onClick={ () => setModalShow(true) } className="cursor-pointer p-6 max-w-[95%] bg-white rounded-xl shadow-lg flex items-center space-x-4 w-96">
        <div className="shrink-0">
        <picture className='flex-auto justify-items-center'>
          <svg className="h-12 w-12 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
          </svg>
        </picture>
        </div>
        <div>
          <div className="mx-auto font-medium text-black">{ props.university }</div>
          <p className="text-slate-500 m-0">{ props.career }</p>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        university={ props.university }
        career={ props.career }
        finish={ props.finish }
        start={ props.start }
        end={ props.end }
        skills={ props.skills }
      />
    </>
  );
  
}
export default University