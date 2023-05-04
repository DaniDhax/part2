import Course from './components/Course'

const App = ({ courses }) => {
    return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses[0]} />
      <Course courses={courses[1]} />
    </div>
    )
  }
  
  export default App