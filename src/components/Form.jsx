import React, { useState } from 'react'

function Content(props) {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const classNames = {
        listGroupSize: 'row mx-sm-1 mx-md-3 mx-lg-auto'
    }

    function handleAltura(event) {
        let value = event.target.value
        if(value.includes(',')){
            value.indexOf(',') !== (value.length - 1) ? (value = value.replace(',', '.')) : value = value.replace(',', '')
        }
        setAltura(() => {
            return parseFloat(value)
        })
    }

    function handlePeso(event) {
        let value = event.target.value
        if(value.includes(',')){
            value.indexOf(',') !== (value.length - 1) ? (value = value.replace(',', '.')) : value = value.replace(',', '')
        }
        setPeso(() => {
            return parseFloat(value)
        })
    }

    return(
        <div className="form-imc">
            <form>
                <div className='list-group'>
                    <div className={classNames.listGroupSize}>
                        <div className='col'>
                            <input onChange={handleAltura} className='form-control' type="text" name="altura" placeholder="Altura" />
                        </div>
                    </div>
                    <div className={classNames.listGroupSize}>
                        <div className='col'>
                            <input onChange={handlePeso} className='form-control' type="text" name="peso" placeholder="Peso" />
                        </div>
                    </div>
                    <div className='row mx-auto'>
                        <div className='col'>
                            <button onClick={(event) => {
                                event.preventDefault()
                                props.loadResult(altura, peso)
                            }} className='btn btn-dark'>Calcular</button>
                        </div>
                    </div>
                </div>     
            </form>
        </div>
    )
}

export default Content