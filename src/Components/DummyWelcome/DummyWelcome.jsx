import React from "react";

import Dummy from "../Dummy/Dummy";
import Welcome from "../Welcome/Welcome";

const DummyWelcome = (props) => {
    return (
        <>
            <Dummy />
            <Welcome name="Rafa" />
        </>
    );
};

export default DummyWelcome;
