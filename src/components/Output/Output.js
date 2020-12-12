import React from 'react'
import './Output.css'
import { useSelector } from 'react-redux'

function Output() {
    const init = useSelector(state => state)
    return (
        <div id="output">
            <div className="app">
                <div className="app__header">
                    Вывод
                </div>
                <div className="app__content">
                    <ul>                    
                    {init && Object.keys(init).map(l =>
                        <li key={l}>
                            <span className="key">{l}</span> : 
                            <span className="value">{init[l]}</span>
                        </li>)
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Output