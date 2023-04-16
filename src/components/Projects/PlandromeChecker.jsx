import React, { useState, useEffect } from 'react'

const PlandromeChecker = () => {

  const [outputText, setOutputText] = useState('Enter a Word/Sentence Below to Check')
  const [outputStyle, setOutputStyle] = useState('text-gray-300')
  const [input, setInput] = useState('');

  useEffect(() => {
    document.title = "Plandrome Chacker - Mateen Ahmed";
    let func = e => {
      if (e.key == 'Enter' && document.getElementById('input').focus == true) handleSubmit();
    }
    document.addEventListener('keydown', func)

    return () => {
      document.removeEventListener('keydown', func)
    }
  }, [])

  const style = {
    btnStyle: 'w-[48%] text=[15px] xs:text-xl font-bold text-gray-400 hover:text-gray-700 rounded-full transition-all duration-50 hover:bg-gray-400 active:scale-95 px-3 py-1.5',
  }

  const handleSubmit = e => {
    e.preventDefault();
    let updatedText = input.toLowerCase().replace(/[^\w\d]/g, ''),
      result = updatedText.split('').reverse().join('') == updatedText;

    if (result && updatedText.length >= 3) {
      setOutputStyle('text-green-400');
      setOutputText(`"${input}" is a Plandrome ${input.split(' ').length > 1 ? 'Sentence' : 'Word'}!`);
      document.getElementById('input').value = '';
    } else if (!result && updatedText.length >= 3) {
      setOutputStyle('text-red-300');
      setOutputText(`"${input}" is a not Plandrome ${input.split(' ').length > 1 ? 'Sentence' : 'Word'}!`);
      document.getElementById('input').value = '';
    }
    else {
      setOutputStyle('text-blue-300');
      setOutputText('Please Enter Text Correctly!');
      document.getElementById('input').value = '';
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center font-jet p-2 py-8 min-h-[90vh]'>

      <div className='plandrome bg-gray-700 rounded-lg max-w-[500px] text-center p-3 animate-fadeUp'>
        <h1 className='text-[27px] xs:text-4xl font-bold text-gray-300 pt-1'>Plandrome Checker</h1>

        <div id='output_div' className={outputStyle + ' mt-5 text-[15px] xs:text-lg'}>{outputText}</div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center p-3 pt-1'>
          <input id='input' type="text" spellCheck={false} onChange={e => setInput(e.target.value)} className='w-[95%] min-h-[45px] rounded bg-gray-400 focus:outline-none px-2' />

          <div className='flex flex-wrap justify-between w-[95%] max-w-[450px] my-5 mt-3'>
            <button type="submit" className={style.btnStyle} >Check</button>
            <button type="reset" className={style.btnStyle} onClick={() => (setOutputText('Enter a Word/Sentence Below to Check'), setOutputStyle('text-gray-300'))} >Reset</button>
          </div>
        </form>

        <div className='flex justify-center text-gray-400 text-sm xs:text-lg border-2 border-gray-400 rounded-md p-2 pt-6 relative'>
          <h2 className='absolute -top-5 text-gray-700 bg-gray-400 rounded-full px-4 py-1'>What are Palindrome words/sentences?</h2>
          <p className='pt-1'>
            A palindrome is a word or sentence that's spelled the same way both
            forward and backward, ignoring punctuation, case, and spacing.
            <br />
            For Example: Tibit, Eye, Civic, Dewed, Do geese see God?, Mr. Owl
            ate my metal worm...
          </p>
        </div>
      </div>

    </div>
  )
}

export default PlandromeChecker