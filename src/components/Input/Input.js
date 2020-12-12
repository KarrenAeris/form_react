import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import InputItem from './InputItem'

import './Input.css'

const items = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Имя ...',
        value: ''

    },
    {
        id: 2,
        name: 'surname',
        type: 'text',
        placeholder: 'Фамилия ...',
        value: ''
    },
    {
        id: 3,
        name: 'date',
        type: 'date',
    },

];

function Input() {
    const init = useSelector(state => state)
    const dis = useDispatch()

    const nameInput = (name) => ({
        type: 'NAME',
        name
    })
    
    const surnameInput = (surname) => ({
        type: 'SURNAME',
        surname
    })
    
    const dateInput = (date) => ({
        type: 'DATE',
        date
    })
    
    const selectInput = (select) => ({
        type: 'SELECT',
        select
    })

    const resetInput = isReset => ({
        type: 'RESET',
        isReset
    })

    const handleCheck = e => {
        e.preventDefault()
        console.log(JSON.parse(JSON.stringify(init)))
        dis(resetInput(true))
    }
    
    const handleIn = e => {
        const {value, name} = e.target
        switch (name) {
            case 'name':
                dis(nameInput(value))
                break
            case 'surname':
                dis(surnameInput(value))
                break
            case 'date':
                dis(dateInput(value))
                break
            case 'select':
                dis(selectInput(value))
                break
            default:
                console.log("Поля не найдены")
                break;
        }
    }

    return (
        <div id="input">
            <div className="app">
                <div className="app__header">
                    Ввод
                </div>
                <form method="POST" className="app__content" onSubmit={handleCheck}>
                    <InputItem items={items} state={init} onSave={handleIn} />
                    <div className="input">
                        <select onChange={handleIn} name="select">
                            <option value="Star">⭐</option>
                            <option value="Heart">❤</option>
                            <option value="Octagon">🔷</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">Ok</button>
                </form>
            </div>
        </div>
    )
}

export default Input