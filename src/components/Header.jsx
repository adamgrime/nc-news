import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className='main-head'>
            <Link to='/'>
            <h1 id='headline'>NC NEWS</h1>
            </Link>
            <h3 id='tagline'>"The home of all the bad news you've been trying to avoid."</h3>
        </header>

    )
}