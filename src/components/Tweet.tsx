import './Tweet.css'
import {ChatCircle, ArrowsClockwise, Heart} from 'phosphor-react'
import { Link } from 'react-router-dom'


interface TweetProps  {
    content: string
}

const Tweet = (props: TweetProps) => {

    return (
        <Link to="/status" className="tweet">
            <img src='https://github.com/guicostads.png' alt='Guilherme Costa' />
            <div className='tweet-content'>
                <div className='tweet-content-header'>
                    <strong>Guilherme Costa</strong>
                    <span>@guicostads</span>
                </div>
                <p>{props.content}</p>
            </div>
            <div className="tweet-content-footer">
                <button type='button'>
                    <ChatCircle />
                    20
                </button>
                <button type='button'>
                    <ArrowsClockwise />
                    20
                </button>
                <button type='button'>
                    <Heart />
                    20
                </button>
            </div>
        </Link>
    )
}

export default Tweet