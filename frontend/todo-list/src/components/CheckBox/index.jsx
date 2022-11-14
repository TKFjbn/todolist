//componente checkbox

import React, { Fragment } from 'react'

const Checkbox = props => {

    const {
        onChange,
        data: {id, description, done}
    } = props;

    return (
        <>
        <Fragment>
            <label className='lbl-chbx'>
                <input
                className='hidden peer '
                name={id}
                type="checkbox"
                defaultChecked={done}
                onChange={onChange}
                />
                <div className={`task-text ${done ? "line-through text-green-500" : ""}`}> {description} </div>
            </label>
        </Fragment>
        </>
    )
}

export default Checkbox