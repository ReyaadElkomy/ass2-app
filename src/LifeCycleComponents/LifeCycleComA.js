import React, {Component} from 'react';
import LifeCycleComB from './LifeCycleComB';

class LifeCycleComA extends Component
{
    constructor(){ // First Invocked 
        super();

        this.state = {
            message: ''
        }
        console.log('A constructor() ');

        // Bind Handlers here...
        this.changeMessage = this.changeMessage.bind(this);
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('A getDerivedStateFromProps() ');
        return null;
    }

    shouldComponentUpdate()
    {
        console.log('A getDerivedStateFromProps() ');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, PreveState)
    {
        console.log('A getSnapshotBeforeUpdate() ');
        return null;
    }

    changeMessage()
    {
        this.setState({
            message: "Hello React!"
        })
    }
    render()
    {
        return (
            <div>
                <div>LifeCycleComA</div>
                <LifeCycleComB />

                <button value={this.state.message} onClick={this.changeMessage}> Call Life Cycle Component methods </button>
            </div>
        )
    }

    componentDidMount()
    {
        console.log('A componentDidMount() ');        
    }

    componentDidUpdate()
    {
        console.log("A componentDidUpdate() ");

    }
}

export default LifeCycleComA;
