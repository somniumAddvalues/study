import React from 'react'

export default function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null
        state = { Component: AsyncComponent.Component}

        componentWillMount() {
            
        }
    }
}