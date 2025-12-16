import React from 'react'

const CustomInput = ({ className }) => {
    return <fieldset className={`${className} fieldset w-full`}>
        <legend className="fieldset-legend">What is your name?</legend>
        <input type="text" className="input input-md text-sm outline-none focus:outline-none border border-primary/20 w-full rounded-xl focus:border-primary/40 shadow-none focus:shadow-lg shadow-primary/10 transition-all duration-300" placeholder="Type here" />
        {/* <p className="label">Optional</p> */}
    </fieldset>
}

export default CustomInput