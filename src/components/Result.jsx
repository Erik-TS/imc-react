import React from 'react'

function Result(props) {

    function loadImage(link){
        if(link !== '') return <img className='h-25 w-25' src={link} alt=""></img>
    }
        
    if(props.status !== '' && props.imc !== ''){
        return(
            <div className='resultado-imc text-center'>
                <h1>{props.status}</h1>
                <h2>{parseFloat(props.imc).toFixed(1)}</h2>
                {loadImage(props.link)}
                {/*  */}
            </div>
        )
    }
    else return ''
}

export default Result