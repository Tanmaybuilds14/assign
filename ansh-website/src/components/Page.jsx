import React from 'react';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={`page ${props.className || ''}`} ref={ref} data-density={props.density || 'soft'}>
            <div className="page-content">
                {props.children}
                {props.number && <p className="page-number">{props.number}</p>}
            </div>
        </div>
    );
});

export default Page;
