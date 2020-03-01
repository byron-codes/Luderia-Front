import React from 'react'
import Grid from '../Layout/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <input value={props.value} name={props.name} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}></input>
        </div>
    </Grid>
)