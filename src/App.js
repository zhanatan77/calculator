import { useDispatch, useSelector } from 'react-redux';
import { ADD_MONEY, AC_MONEY, DEL_MONEY} from './components/redux/ActionsType';
import { useEffect, useState } from 'react';

function App() {
const[dark,setDark] = useState(false);
const[ket, setKet] = useState(false);
  const balance = useSelector((state )=> {
    return state.money;
  })
  const dispatch = useDispatch()
console.log(balance);

useEffect(() => {
  const local = localStorage.getItem("balance");
  dispatch({type: ADD_MONEY, payload: local })
},[])
useEffect(() => {
  localStorage.setItem("balance", balance);
},[balance]);

  
  return (
      <div style={{ background: dark ? "black " : "",
        height: "100vh"}}>
        <div className="container">
         <div className="header">
              <h1 onClick={() => setKet(!ket)}
              style={{color: dark ? "white" : "black",  }}
              > motion </h1> 
              <label class="switch">
                <label></label>
                <input type="checkbox"  onChange={() => setDark(!dark)}/>
                <span class="slider"></span>
                </label>
            </div>
          <div className="cart">
          <div className="kalkulator">
         <div className="block">
          <h1>{balance}</h1>
       </div>
      <div className="kalkulator-title">
      <button onClick={() => {
        dispatch({type: AC_MONEY});
        localStorage.removeItem("balance")
      }}> C</button>
      <button  onClick={() =>  dispatch({type: DEL_MONEY})}> del</button>
     <button  onClick={() =>{ const result = eval(balance);
      dispatch({type: ADD_MONEY, payload: balance.length !== 0 ? "=" + result : ""})}}>=</button>
     <button onClick={() =>   dispatch({type: ADD_MONEY, payload: balance.length !==  0 ? "+" : ""})}>+</button>
     <button onClick={() =>  dispatch({type: ADD_MONEY, payload: 7 })}>7</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload:  8})}>8</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload:  9})}>9</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: balance.length !== 0 ? '-' : ''})}>-</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: 4 })}>4</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload:  5 })}>5</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload:  6})}>6</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: balance.length !==  0 ? '/' : ""})}>/</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: 1})}>1</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: 2})}>2</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: 3})}>3</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: balance.length !== 0 ? '*' : ''})}>*</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: 0})}>0</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: balance.length !== 0 ? '.' : '  '})}>.</button>
     <button onClick={() => dispatch({type: ADD_MONEY, payload: balance.length !== 0 ? '%' : ''})}>%</button>
      </div>
      </div>
     </div>
      </div>
      </div>
  );
};
export default App;


  // const [num, setNum] = useState([])

  // function LCL (str){
  //   let data = JSON.parse(localStorage.getItem('num'))||[];
  //   data.push(str)
  //   localStorage.setItem('num', JSON.stringify(data))
  // }
  // function read (){
  //   let data = JSON.parse(localStorage.getItem('num'))||[];
  //   setNum(data)
  // }
  // useEffect(()=>{
  //   read(balance)
  // },[1])