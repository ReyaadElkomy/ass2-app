import React, {Component} from 'react';

class LifeCycleComB extends Component
{
    constructor(){ 
        super();

        this.state = {

        }
        console.log('B constructor() ');
        
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('B getDerivedStateFromProps() ');
        return null;
    }
    

    render()
    {
        return (
            <div>
                <div>LifeCycleComB</div>
            </div>
        )
    }

    componentDidMount()
    {
        console.log('B componentDidMount() ');        
    }
   
}

export default LifeCycleComB;
