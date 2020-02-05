import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        items: [{
            value: 'eur',
            text: 'EUR'
        }, {
            value: 'pln',
            text: 'PLN'
        }, {
            value: 'gel',
            text: 'GEL'
        }, {
            value: 'dkk',
            text: 'DKK'
        }, {
            value: 'czk',
            text: 'CZK'
        }, {
            value: 'gbp',
            text: 'GBP'
        }, {
            value: 'sek',
            text: 'SEK'
        }, {
            value: 'usd',
            text: 'USD'
        }, {
            value: 'rub',
            text: 'RUB'
        }],
        selectedItems: []
    }

    toggleItem(value) {
        var selectedItems = this.state.selectedItems.slice(0);
        var _index = selectedItems.indexOf(value);
        if (_index === -1) {
            selectedItems.push(value);
        } else {
            selectedItems.splice(_index, 1);
        }
        this.setState({ selectedItems })
    }

    render() {
        const { items, selectedItems } = this.state;
        return (
            <div className='container'>
                <div className='selection-container'>
                    {(selectedItems || []).map(item=>(
                        <div className='item' key={item} >
                        {item}
                        <button type='button' className='remove' ariaLabel='Remove' onClick={()=>this.toggleItem(item)}>
                            <span ariaHidden='true'>×</span>
                        </button>
                    </div>
                    ))}
                </div>
                <div className='option-list'>
                    {items.map(item => (<label key={item.value} className='ck-button'>
                        <input type='checkbox' checked={selectedItems.includes(item.value)} onChange={() => this.toggleItem(item.value)} />
                        <span className='content'>{item.text}</span>
                        <span className='checkmark'></span>
                    </label>))}
                </div>
            </div>
        );
    }
}

export default App;
