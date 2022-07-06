import React, {Component} from 'react';

class LoginForm extends Component
{

    constructor()
    {
        super();

        this.state = {
            userName: '', 
            password: ''
        }

        // Handlers bind
        this.userNameHandler = this.userNameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.formHandler = this.formHandler.bind(this);
    }

    // Event handlers
    userNameHandler(event)
    {
        this.setState({
            userName: event.target.value
        })
    }
    passwordHandler(event)
    {
        this.setState({
            password: event.target.value
        })
    }
    formHandler(inputs)
    {
        const user = {
            userName: 'ITI', 
            password: 'P@ssw0rd'
        }

        if(this.state.userName === user.userName && this.state.password === user.password)
        {
            alert('Welcome ITI');
        }
        else
        {
            alert('Invalid Login!');
        }
        inputs.preventDefault();
    }
    render()
    {
        return (
         <div className=''>
               <div className='d-flex justify-content-center'>
                <form className='col-md-6 mt-3' onSubmit={this.formHandler} >
                    <div className="form-group mb-3">
                        <label>UserName : </label>
                        <input type="text" value={this.state.userName} onChange={this.userNameHandler} className='form-control' placeholder="Enter UserName" />                        
                    </div>
                    <div className="form-group mb-3">
                        <label>Password : </label>
                        <input type="password" value={this.state.password} onChange={this.passwordHandler} className='form-control' placeholder="Enter Password" />                        
                    </div>
                    
                    
                    <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary w-100 "> Submit </button>
                    </div>
                </form>
            </div>
         </div>
        )
    }
}

export default LoginForm;

