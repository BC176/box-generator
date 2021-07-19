import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [createBox, setCreateBox] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCreateBox([color, ...createBox]);
        setColor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color:</label>
                <input autoFocus type="text"
                    onChange={(e) => setColor(e.target.value)}
                    value={color} />
                <input type="submit" name="box" id="addBox" value="Add" />
            </div>

            <div className="boxes">
                {
                    createBox.map((x, i) => <div style={{ backgroundColor: `${x}` }} className="boxMaker" key={i}></div>)
                }
            </div>
        </form >
    )//end return
}//end BoxGenerator

export default BoxGenerator;