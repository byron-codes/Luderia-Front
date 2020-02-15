import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default props => (
    <Router>
        <Switch>
            <Route path="/" component={Dashboard} exact></Route>
            <Route path="/billingCycle" component={BillingCycle} exact></Route>
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    </Router>
)
