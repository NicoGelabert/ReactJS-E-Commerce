import React from 'react'

const CartForm = ({formData, setFormData, inputs, handleSubmit}) => {
        
    function handleChange(e) {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value,
            }
        )
    }   

    return (
        <div className="form">
            <form
            onSubmit={handleSubmit}
            onChange={handleChange}>
                {inputs.map((inp) => {
                return(
                    <div className="mt-3">
                        <label>{inp.label}</label>
                        <input className="form-control" type={inp.type} name={inp.name} placeholder={inp.placeholder} value={inp.value} />
                    </div>
                )})
                }
                <div className="mt-5">
                    <button className="btn btn-productos">confirmar compra</button>
                </div>
            </form>
        </div>
    )
}

export default CartForm