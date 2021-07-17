import React, { useState, useEffect } from 'react';

const Colour = ({rgb, weight, hex, index}) => {

    const [copiedToClip , setCopiedToClip] = useState(false);
    const backgroundColour = rgb.join(",");
    
    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setCopiedToClip(false);
        },3000);

        return () => clearTimeout(timeout);

    }, [copiedToClip]);

    const copyToClipBoard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(hex);
        setCopiedToClip(true);
    }

    return(
        <article className={`color ${index >= 10 && "color-light"}`} onClick={copyToClipBoard} style={{backgroundColor: `rgb(${backgroundColour})`}}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
            {copiedToClip && <p>copied to the clipboard</p>}
        </article>
    );
}

export default Colour;