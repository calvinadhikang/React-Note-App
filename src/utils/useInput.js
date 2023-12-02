import { useState } from "react";


function useInput(val = "") {
    const [value, setValue] = useState(val);

    const onValueChangeHandler = (e) => {
        setValue(e.target.value);
    }

    return [value, onValueChangeHandler]
}

export default useInput;