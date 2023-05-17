import { CodeBlock } from "react-code-blocks";   
    
function Codestyle(props) {

  function codetext(x) {
    return x.toString()
  }
  
  return(
    <CodeBlock
      text={ codetext(props.codetext) }
      language={ props.lang }
      showLineNumbers={true} />
  );
}

export default Codestyle