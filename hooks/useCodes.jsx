const { useState } = require("react");

const useCodes = () => {
    const [codes, setCodes] = useState("");
    
    const setCodesValue = (value) => {
        setCodes(value);
    }
    return [ codes, setCodesValue ];
}

export default useCodes;