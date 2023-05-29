import React, { useState, useEffect } from 'react';

const UserGuessInput = (props) => {

    const [userGuess, setUserGuess] = useState(0)
    const [userProposition, setUserProposition] = useState()
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(100)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserProposition(userGuess)
    }


    useEffect(() => {
        if (userProposition < props.randomNumber) {
            setMin(userProposition)
        }
        else if (userProposition > props.randomNumber && max > userProposition) {
            setMax(userProposition)
        }
        else if (userProposition == props.randomNumber) {
            alert(`Bravo, le nombre était bien ${props.randomNumber} !`)
        }

    }, [userProposition])

    return (

        <>
            <form action="">
                <label htmlFor="userGuess"></label>
                <input type="number" placeholder="Entrez votre proposition" id='userGuess' onChange={(e)=>setUserGuess(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Valider</button>
            </form>

            <p>Le nombre est compris entre {min} et {max}</p>
        </>
    )
}

export default UserGuessInput;