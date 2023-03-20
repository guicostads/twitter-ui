import { Sparkle } from 'phosphor-react'
import './Header.css'


interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    return (
        <div>
            <div className='timeline-header'>
                {props.title}
                {/* renderizção condicional: */}
                {props.title === "Home" && <Sparkle />}
            </div>
        </div>
    )
}

export default Header