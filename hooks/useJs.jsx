const { useState } = require("react");

const useJs = () => {
    const [js, setJs] = useState(`const handleClick = () => {
  alert("button clicked");
}`);

    const setJsValue = (value) => {
        setJs(value);
    }
    return [js, setJsValue];
}

export default useJs;