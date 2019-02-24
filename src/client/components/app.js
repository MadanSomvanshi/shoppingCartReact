import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
export default class Demo extends Component {
    render() {
        return (
            <div>
              <Header />
                <BrowserRouter basename="/">
                    <Switch>
                        {/* <Route path="/checkout" component={Checkout} /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
