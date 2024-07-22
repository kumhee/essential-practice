import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import {useState} from 'react';

function App() {
  // Note: user가 입력한 값을 얻고 저장할 상태관리 훅
  //  초기 투자금, 연간 투자금, 기대 수익률, 투자기간
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration >= 1;

  // Note: input 필드에서 값을 변경할 때마다 발생되어야 할 함수 (상태를 업데이트하기 위함)
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return{
        ...prevUserInput,
        [inputIdentifier]: + newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter duration greater than zero</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
