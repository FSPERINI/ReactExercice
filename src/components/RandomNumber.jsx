import { useState } from "react";
import UserGuessInput from "./UserGuessInput";
import { useEffect } from "react";

const RandomNumber = () => {

    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1)
    }, [])

    return (
        <>
            <UserGuessInput randomNumber={randomNumber} />
        </>

        
    );
}

export default RandomNumber;