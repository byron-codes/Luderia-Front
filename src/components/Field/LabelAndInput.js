import React from 'react'
import Grid from '../Layout/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input onChange={e => props.onChange(props.name, e.target.value)} value={props.value} name={props.name} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}></input>
        </div>
    </Grid>
)