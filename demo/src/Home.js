import React, { useState } from 'react';

function Home() {
    const [input1, setInput1] = useState(''); // Use empty string for input
    const [input2, setInput2] = useState(''); // Use empty string for input
    const [result, setResult] = useState(0);

    // Function to handle button clicks
    const handleButtonClick = (value) => {
        setInput1(value); // Set input1 to the button value
    };

    // Function to calculate the result
    const calculate = () => {
        const num1 = Number(input1);
        const num2 = Number(input2);
        setResult(num1 + num2); // Calculate the sum
    };

    return (
        <center>
            <div className='a'>
                <center>
                    <h1>This is home page</h1>
                    <div className='b'>
                        <input
                            type='text'
                            value={input1}
                            readOnly // Make input1 read-only
                            style={{ width: '100px', marginRight: '0' }}
                        />
                        <input
                            type='text'
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)} // Allow input2 to be editable
                            style={{ width: '100px', marginLeft: '0' }} 
                        />
                        <button onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button onClick={() => handleButtonClick('3')}>3</button>
                        <button onClick={() => handleButtonClick('4')}>4</button>
                        <button onClick={() => handleButtonClick('5')}>5</button>
                        <button onClick={() => handleButtonClick('6')}>6</button>
                        <button onClick={() => handleButtonClick('7')}>7</button>
                        <button onClick={calculate}>Calculate</button>
                    </div>
                    {result !== null && <h2>Result: {result}</h2>}
                </center>
            </div>
        </center>
    );
}

export default Home;
