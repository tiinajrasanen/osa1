import React from 'react'
import ReactDOM from 'react-dom'

//Header
const Header = ({name}) => <h1>{name}</h1>

//Parts
const Parts = ({parts}) => parts.map((part) => <p>{part.name} {part.exercises}</p>)

//Content
const Content = ({course}) => <Parts parts={course.parts}/> 

//Total
const Total = ({course}) => <p>yhteensä {course.parts.reduce((sum, i) => (sum += i.exercises),0)} tehtävää</p>

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [ 
            {name: 'Reactin perusteet', exercises: 10},
            {name: 'Tiedonvälitys propseilla', exercises: 7},
            {name: 'Komponenttien tila', exercises: 14}
        ]
    }

    return (
        <div>
            <Header name={course.name}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))