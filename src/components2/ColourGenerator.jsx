import React, { useState } from "react";
import Colour from "./Colour";
import Values from "values.js";

const ColourGenerator = () => {
    const [colours, setColours] = useState(new Values("navy").all(10));
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const renderColours = (e) => {
        try {
            e.preventDefault();
            setColours(new Values(input).all(10));
            setError(false);
            setInput("");
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <>
            <section className="container">
                <h3>Colour Generator: </h3>
                <form onSubmit={renderColours}>
                    <input
                        placeholder="enter colour"
                        className={error ? "error" : ""}
                        type="text"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    <button className="btn" type="submit">
                        submit
                    </button>
                </form>
            </section>

            <section className="colors">
                {colours.map((colour, index) => (
                    <Colour
                        key={index}
                        {...colour}
                        hex={colour.hex}
                        index={index}
                    />
                ))}
            </section>
        </>
    );
};

export default ColourGenerator;
