import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Header
const Header = ({header}) => <h1>{header}</h1>

//Rows
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

//Statistic counting
const Total = ({feedback}) => Object.values(feedback).reduce((sum,i) => sum += i);
const Avarage = ({feedback}) => ((feedback.good * 1) + (feedback.neutral * 0)+ (feedback.bad * -1))/Object.values(feedback).reduce((sum,i) => sum += i)
const Goods = ({feedback}) => feedback.good/Object.values(feedback).reduce((sum,i) => sum += i)*100

//Statistic
const Statistic = ({feedback}) => {
    console.log(feedback)
    
    if (Object.values(feedback).reduce((sum,i) => sum += i) === 0) {
        return (
            <div>Yhtään palautetta ei ole annettu.</div>
        )
    }
    
    return (
        <table>
            <tbody>
                <tr>
                    <td>Hyvä</td><td>{feedback.good}</td>
                </tr>
                <tr>
                    <td>Neutraali</td><td>{feedback.neutral}</td>
                </tr>
                <tr>
                    <td>Huono</td><td>{feedback.bad}</td>
                </tr>
                <tr>
                    <td>Yhteensä</td><td><Total feedback={feedback}/></td>
                </tr>
                <tr>
                    <td>Keskiarvo</td><td><Avarage feedback={feedback}/></td>
                </tr>
                <tr>
                    <td>Hyviä</td><td><Goods feedback={feedback}/> %</td>
                </tr>
            </tbody>
        </table>
    )
  }

const App = () => {
    const [feedback, handleFeedback] = useState({
        good: 0, neutral: 0, bad: 0
    })

  const setGood = () => handleFeedback({ ...feedback, good: feedback.good + 1 })
  const setNeutral = () => handleFeedback({ ...feedback, neutral: feedback.neutral + 1 })
  const setBad = () => handleFeedback({ ...feedback, bad: feedback.bad + 1 })

  return (
    <div>
        <Header header={headers[0]}/>
        <Button handleClick={() => setGood()} text='Hyvä'/>
        <Button handleClick={() => setNeutral()} text='Neutraali'/>
        <Button handleClick={() => setBad()} text='Huono'/>
        <Header header={headers[1]}/>
        <Statistic feedback={feedback}/>
    </div>
  )
}

const headers = ["Anna palautetta","Statistiikka"]

ReactDOM.render(<App />, 
  document.getElementById('root')
)
