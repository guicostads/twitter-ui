import { FormEvent, KeyboardEvent, useState } from "react"
import Header from "../components/Header"
import Tweet from "../components/Tweet"
import './Status.css'
import Separator from "../components/Separator"
import { PaperPlaneRight } from "phosphor-react"


/** 
* Fluxo de renderização:
*
* 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
* 2. Toda a vez que seu componente pai renderizar.
* 3. Toda vez que algumas das suas propriedades mudarem.
*/

/** 
 * Algoritmo de reconciliação:
 * 1. Criar a nova versão do html do componente.
 * 2. Compara com a versão anterior do html. (diff)
 * 3. Aplicar as operações JS para alterar somento o necessário no html.
 */

const Status = () => {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo progresso!'
  ])


  // insere nova resposta
  const createNewAnswer = (e: FormEvent) => {
    e.preventDefault()
    newAnswer === '' ? setAnswers([...answers]) : setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  // faz o submit com ctrl + enter (ou cmd + enter)
  const handleHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <div>
      <main className='status'>
        <Header title='Tweet' />
        <Tweet content="Descobri que 2+2 é 4!" />
        <Separator />
        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
          <label htmlFor='tweet'>
            <img src='https://github.com/guicostads.png' alt='Guilherme Costa' />
            <textarea value={newAnswer} onKeyDown={handleHotKeySubmit} id="tweet" placeholder="Tweet your answer" onChange={(e) => setNewAnswer(e.target.value)} />
          </label>
          <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span></button>
        </form>
      </main>
      {answers.map((answer) => {
        return (
          <Tweet key={answer} content={answer} />
        )
      })
      }
    </div>
  )
}

export default Status