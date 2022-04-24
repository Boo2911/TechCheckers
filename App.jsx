import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            address:'',
            pincode:'',
            contact:'',
            bio:'',
            category:'',
            brandname:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changePincode = this.changePincode.bind(this)
        this.changeContact = this.changeContact.bind(this)
        this.changeBio = this.changeBio.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
        this.changeBrandname = this.changeBrandname.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changeAddress(event){
        this.setState({
            address: event.target.value
        })
    }
    changePincode(event){
        this.setState({
            pincode: event.target.value
        })
    }
    changeContact(event){
        this.setState({
            contact: event.target.value
        })
    }
    changeBio(event){
        this.setState({
            bio: event.target.value
        })
    }
    changeCategory(event){
        this.setState({
            category: event.target.value
        })
    }
    changeBrandname(event){
        this.setState({
            brandname: event.target.value
        })
    }
    

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            address: this.state.address,
            pincode: this.state.pincode,
            contact: this.state.contact,
            bio: this.state.bio,
            category: this.state.category,
            brandname: this.state.brandname
            
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            address:'',
            pincode:'',
            contact:'',
            bio:'',
            category:'',
            brandname:''
            
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit} >
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Address'
                            onChange={this.changeAddress
                            value={this.state.address}
                            className='form-control form-group'
                            />

                           <input type='number'
                            placeholder='Pincode'
                            onChange={this.changePincode}
                            value={this.state.contact}
                            className='form-control form-group'
                            />

                            <input type='number'
                            placeholder='Contact'
                            onChange={this.changeContact}
                            value={this.state.contact}
                            className='form-control form-group'
                            />

                           <input type='text'
                            placeholder='Bio'
                            onChange={this.changeBio}
                            value={this.state.bio}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Category'
                            onChange={this.changeCategory}
                            value={this.state.category}
                            className='form-control form-group'
                            />
                            <input type='text'
                            placeholder='Brandname'
                            onChange={this.changeBrandname}
                            value={this.state.brandname}
                            className='form-control form-group'
                            />

                            


                            <input type="submit" className='btn btn-primary btn-block' value='Submit' />
                        </form>

                    </div>

                </div>

            </div>
         );
    }
}

export default App;