import { Link } from 'react-router-dom'
import { getTopics } from '../api'
import { useEffect, useState } from 'react'

export default function Nav() {
    const [topic, setTopic] = useState([])
    
    useEffect(() => {
        getTopics().then(({ topics }) => {
            setTopic(topics)
        })
    }, [])


    return (
        <nav className='main-nav'>
            
            {topic.map((topic) => {
                return <ul className='nav_bar_topics'>
                    <li>
                        <Link to={`/${topic.slug}`} key={topic.slug} id="Nav_Link_Text">
                            <h5>{topic.slug}</h5>
                        </Link>
                    </li>
                </ul>
            })}
        </nav>
    )
}