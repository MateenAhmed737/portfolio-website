import React, { useState, useEffect, useLayoutEffect } from 'react';
import data from '../../constants/data';
import { evaluate } from 'mathjs';
import gsap from 'gsap';

const Calculator = () => {

  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState('');
  const calcKeys = data.calcKeys;

  useLayoutEffect(() => {
    gsap.fromTo('.gsapAnime', { opacity: 0, y: 100 }, { duration: 1, opacity: 1, y: 0, stagger: 0.3 })
  }, [])

  useEffect(() => {
    document.title = "Calculator - Mateen Ahmed";
    const resizeHandler = () => window.innerWidth <= 380 && setWinWidth(window.innerWidth);
    const keyDownHandler = e => {
      const index = calcKeys.name.indexOf(e.key);
      index != -1 && ['Enter', '/', '*', '-', '+', '.'].every(elem => e.key != elem) ? (animateKeyPress(calcKeys.id[index]), handleClick(document.getElementById(calcKeys.id[index]))) : null;
    };

    window.addEventListener('resize', resizeHandler)
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  const animateKeyPress = e => {
    let elem = document.getElementById(e);

    elem.classList.add('new_quote_Anime');
    setTimeout(() => {
      elem.classList.remove('new_quote_Anime');
    }, 200);
  }

  // useEffect(() => {
  //   console.log(input, output);
  // }, [input, output])

  const handleClick = e => {
    let key = e.name, lastInChar = input[input.length - 1], lastOutChar = output[output.length - 1], keys = ['/', '+', '*', '-'];
    if (key == 'Escape') {
      setInput(0);
      setOutput('');
    }
    else if (key != 'Enter' && output.match(/[=]/)) {

      setInput(prev => prev + key);
      setOutput(input + key);
    }
    else if (key == 'Enter' && !output.match(/[=]/) && output) {

      const signs = output?.match(/[-|+|*|/]+/g)?.filter(e => e.length > 1);
      const check_signs = !signs || signs.every((e) => e[e.length - 1] == '-') ? output : output.replace(/[-|+|*|/]+/g, e => e[e.length - 1] != '-' ? e[e.length - 1] : e);
      const check_decimal = String(evaluate(check_signs)).match(/[.]/) ? evaluate(check_signs).toFixed(4).replace(/[0]+$/, '') : evaluate(check_signs);
      setInput(check_decimal);
      setOutput(prev => `${prev}=${check_decimal}`);
    }
    else if (key == '/' || key == '*' || key == '-' || key == '+') {

      setInput(prev => lastInChar != '.' && (output.length < 3 || !output.slice(-3).split('').every(e => e == '+' || e == '-' || e == '/' || e == '*')) ? key : prev);
      setOutput(prev => lastInChar != '.' && (prev.length < 3 || !prev.slice(-3).split('').every(e => e == '+' || e == '-' || e == '/' || e == '*')) ? prev + key : prev);
    }
    else if (key == '.') {

      const temp = state => state.split('').map(e => e == '/' || e == '*' || e == '=' || e == '-' || e == '+' ? ' ' : e).join('').split(' ');
      setInput(prev => prev == 0 || (isNaN(Number(lastInChar)) && lastInChar != '.') ? '0.' : typeof parseInt(lastInChar) == 'number' && (prev.match(/[.]/g) == null || !prev.match(/[.]/g)[0]) ? prev + key : prev);
      setOutput(prev => prev == 0 && lastInChar == '.' ? '0.' : isNaN(Number(lastOutChar)) && lastOutChar != '.' ? prev + '0.' : typeof parseInt(lastInChar) == 'number' && (temp(prev)[temp(prev).length - 1].match(/[.]/g) == null || !temp(prev)[temp(prev).length - 1].match(/[.]/g)[0]) ? prev + '.' : prev);
    }
    else {
      setOutput(prev => key == 'Enter' ? prev : output.match(/[=]/) ? prev + key : prev == 0 && key == 0 ? key : prev + key);
      setInput(prev => key == 'Enter' ? prev : lastInChar != '.' && (prev == 0 || lastInChar == '/' || lastInChar == '*' || lastInChar == '-' || lastInChar == '+') ? key : prev + key);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center font-jet" style={{ height: "100vh", width: "100vw", paddingLeft: 15, paddingRight: 15 }}>
      {/* Toggle Button Start */}
      <div className='gsapAnime flex items-center justify-around font-pop cursor-pointer bg-gray-100 rounded-lg p-3 mb-6' onClick={() => setToggle(prev => !prev)}>
        Minimilistic Design
        <div className={`h-4 w-8 ml-10 rounded-full transition-all duration-500 ${toggle ? 'bg-primary-tint' : 'bg-gray-200'}`}>
          <div className={`w-4 h-4 rounded-full scale-125 transition-all duration-500 ${toggle ? 'translate-x-[110%] bg-primary' : 'translate-x-0 bg-gray-300'}`}></div>
        </div>
      </div>
      {/* Toggle Button End */}

      <div className={`gsapAnime block bg-gray-900 border-gray-900 ${toggle ? 'border-0 rounded-sm overflow-hidden' : 'border-4'}`} style={{ width: winWidth <= 380 ? winWidth - 30 : 350, height: winWidth <= 380 ? winWidth / 100 * 130 : 500 }} >
        {/* Display Start */}
        <div className={`w-full h-1/5 flex flex-col bg-gray-700 text-white border-gray-900 transition-all duration-300 ${toggle ? 'border-0' : 'border border-b'}`}>
          <input type='text' value={output} id='formulaScreen' className='h-2/5 px-2 pt-2 text-yellow-500 bg-transparent overflow-x-scroll text-[11px] min-[200px]:text-sm min-[300px]:text-lg text-right focus:outline-none border-r-0' readOnly />
          <input type='text' value={input} id='display' className='h-3/5 px-2 py-1 text-xl min-[200px]:text-2xl min-[300px]:text-4xl bg-transparent overflow-x-scroll text-right focus:outline-none border-r-0' readOnly />
        </div>
        {/* Display End */}

        {/* Pads Start */}
        <div className='h-4/5 flex flex-wrap text-[10px] min-[200px]:text-sm min-[300px]:text-lg font-jet relative'>
          {calcKeys.value.map((e, i) => (
            <button key={i} id={calcKeys.id[i]} name={calcKeys.name[i]} onClick={e => handleClick(e.target)} className={`text-black hover:text-white border-gray-900 ${toggle ? 'border-0' : 'border'} ${i == 0 || i == 14 ? 'w-2/4' : 'w-1/4'} ${i == 16 ? 'h-2/5 absolute bottom-0 right-0' : 'h-1/5'} ${i == 0 ? 'bg-red-600 hover:bg-red-700 hover:text-gray-200 focus:outline-none outline-none focus:bg-red-700' : i == 1 || i == 2 || i == 6 || i == 10 ? 'bg-gray-500/90 hover:bg-gray-400/70 focus:outline-none outline-none focus:bg-gray-400/70' : i == 16 ? 'bg-cyan-700 hover:bg-cyan-800 outline-none hover:text-gray-300 focus:outline-none focus:bg-cyan-800' : 'bg-gray-600 hover:bg-gray-500 focus:outline-none outline-none focus:bg-gray-500'} transition-all ${toggle ? 'duration-300 active:scale-[0.90]' : 'duration-50 active:scale-95'}`}>{e}</button>
          ))}
        </div>
        {/* Pads End */}
      </div>
    </div>
  );
}

export default Calculator;