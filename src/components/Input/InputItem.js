import React from 'react'

function InputItem({items, state, onSave}) {
    const handleInput = (e) => {
        onSave(e)
    }

    return (
        <div>
            {items.map(item => 
                <div className="input" key={item.id}>
                    <label htmlFor={item.name}>{item.name}</label>
                    <input type={item.type}
                        onChange={handleInput}
                        id={item.name}
                        placeholder={item.placeholder}
                        name={item.name}
                        value={state?.[item.name] || ''}
                        required/>
                </div>
            )}
        </div>
    )
}

export default InputItem
