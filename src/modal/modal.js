import React, {Component, Fragment}from 'react'
import './modal.css'
export default class Modal extends Component{
    state = {
        isOpen: false,
        isActive: true
    }
    cancelLink(event){
        event.preventDefault();
        console.log('По ссылке кликнули.');
    }
    changeActive(){
        this.setState(state => ({...state, isActive: !state.isActive}))
    }
    render(){
        return (
            <Fragment>
                <button onClick={() => { this.setState({isOpen: true}) }}>Open modal</button>
                { this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal title</h1>
                            <p>i am awesome modal!</p>
                            <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                            <a href="https://vk.com" onClick={this.cancelLink}>VK</a>
                            <p onClick={this.changeActive}>{this.state.isActive ? 'Включено' : 'Выключено'}</p>
                        </div>
                    </div>
                )}
            </Fragment>
        )
    }
}