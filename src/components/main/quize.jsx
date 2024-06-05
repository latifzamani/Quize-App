import React, { useRef, useState } from 'react'
import './quize.css';
import '../../assets/data';
import { data } from '../../assets/data';
function Quize() {

    let [index,setIndex]=useState(0);
    let [question,setQuestion]=useState(data[index]);
    let [lock,setLock]=useState(false);
    let [score,setScore]=useState(0);
    let [result,setResult]=useState(false);

    let option1=useRef();
    let option2=useRef();
    let option3=useRef();
    let option4=useRef();

    let optionArray=[option1,option2,option3,option4];

    const checkAns=(event,ans)=>{
        if(lock==false){
            // if(index>data.length-1){
                
            // }

            if(question.ans===ans){
                event.target.classList.add('correct');
                setLock(true);
                setScore((prev)=>prev+1);
            }else{
                event.target.classList.add('wrong');
                setLock(true);
                optionArray[question.ans-1].current.classList.add('correct'); 
            }
        }
    }
    const showResult=()=>{
        setResult(true);
    }

    const nextQuestion=()=>{
        if(lock==true){
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        optionArray.map((option)=>{
            option.current.classList.remove('wrong');
            option.current.classList.remove('correct');
            return null;
        })
        }
    }
    const reset=()=>{
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setScore(0);
        setResult(false);
    }
  return (
    <div className='container'>
       <h1>Quize App</h1>
       {
        result ?
        <><h3>{score} of {data.length} was true.</h3>
        <button type='button' className='resetBtn' onClick={reset}>Try Again</button>
        </> :
        <><h4>{question.question}</h4>
       <ul>
        <li ref={option1} onClick={(e)=>checkAns(e,1)}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>checkAns(e,2)}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>checkAns(e,3)}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>checkAns(e,4)}>{question.option4}</li>
       </ul>
       <button type='button' onClick={(index==data.length-1) ?  showResult: nextQuestion }>{(index==data.length-1)?'Result':'Next'}</button>
       <div className='footer'>{index+1} of {data.length} questions</div>
       </>
       }
       </div>
  )
}

export default Quize