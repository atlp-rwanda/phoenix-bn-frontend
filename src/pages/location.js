import React, { Component } from 'react'
import TopNav from '../components/common/AuthTopNav';
import CreateLocation from '../components/form/createLocation';
import ListLocation from '../components/form/listLocation';

export default class location extends Component {
       
    render() {
        return (
            <div>
                <div>
                <TopNav />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 m-5 p-5">
                    <CreateLocation />
                    <ListLocation />
                </div>
            </div>
        )
    }
}