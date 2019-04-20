import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <h1>{header}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)
    const [votes, countVotes] = useState({
        0:0,1:0,2:0,3:0,4:0,5:0
    })
    const [max, mostVotes] = useState(0)

  const drawSelected = () => {
    const newSelected = Math.floor(Math.random() * 6)
    setSelected(newSelected)
  }

  const voteAnecdote = () => {
    const copyVotes = { ...votes }
    copyVotes[selected] += 1
    countVotes(copyVotes)
    mostVotes(Object.values(copyVotes).indexOf(Math.max(...Object.values(copyVotes))))
  }

  return (
      <div>
        <Header header={headers[0]}/>
        <p>{anecdotes[selected]}</p>
        <p>Anectode has {votes[selected]} votes</p>
        <Button handleClick={() => voteAnecdote({selected})} text='Vote'/>
        <Button handleClick={() => drawSelected()} text='Next anecdote'/>
        <Header header={headers[1]}/>
        <p>{anecdotes[max]}</p>
        <p>has {votes[max]} votes</p>
     </div>
  )
}

const headers = ["Anecdote of the day","Anecdote with most votes"]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
