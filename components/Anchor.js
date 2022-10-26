import React from 'react';

const Anchor = ({ text, href, target, rel, className }) => {
    return (
        <div className="anchor-div">
            <a href={href} target="_blank" rel="noreferrer" className={className}>{text}</a>
        </div>
    )
}

export default Anchor;