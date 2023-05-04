import Header from "./Header"
import Parts from "./Parts"

const Course = ({ courses }) => { 
    const totalExercises = courses.parts.reduce((sum, part) => sum + part.exercises, 0)
    
    return (
        <div>
            <Header header={courses.name} />
            <Parts courses={courses} />
            <p><strong>Total of {totalExercises} exercises</strong></p>
        </div>
    )
}

export default Course