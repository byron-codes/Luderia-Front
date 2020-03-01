import React from 'react'

export default props => (
    <div className={`${props.class || ``} container-fluid`}>
        {props.children}
    </div>
)
