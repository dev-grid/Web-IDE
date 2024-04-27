const { useState } = require("react");

const useCss = () => {
    const [css, setCss] = useState(`button{
  height: 45px;
  border: none;
  padding: 0 30px;
  border-radius: 8px;
  margin: 10px;
  color: #fff;
  background: #5234e1;
}`);
    
    const setCssValue = (value) => {
        setCss(value);
    }
    return [ css, setCss ];
}

export default useCss;