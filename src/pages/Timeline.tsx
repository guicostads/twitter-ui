import { FormEvent, KeyboardEvent, useState } from "react"
import Header from "../components/Header"
import Tweet from "../components/Tweet"
import './Timeline.css'
import Separator from "../components/Separator"

const tweets = [
  'Meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]



const Timeline = () => {
  // Estados: 

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  // função que cria um novo tweet no submit:
  const createNewTweet = (e: FormEvent) => {
    e.preventDefault()
    newTweet === '' ? setTweets([...tweets]) : setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  const handleHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <div>
      <main className='timeline'>
        <Header title='Home' />

        <form onSubmit={createNewTweet} className='new-tweet-form'>
          <label htmlFor='tweet'>
            <img src='https://github.com/guicostads.png' alt='Guilherme Costa' />
            <textarea value={newTweet} onKeyDown={handleHotKeySubmit} id="tweet" placeholder="Whats's happening?" onChange={(e) => setNewTweet(e.target.value)} />
          </label>
          <button type='submit'>Tweet</button>
        </form>
        <Separator />
        {tweets.map((tweet) => {
          return (
            <Tweet key={tweet} content={tweet} />
          )
        })
        }
      </main>
    </div>
  )
}

export default Timeline