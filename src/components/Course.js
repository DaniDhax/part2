import Header from "./Header"

const Course = ({ courses }) => { 
    return (
        <div>
            <Header header={courses.name} />
            {courses.parts.map(title => <p>{title.name} {title.exercises}</p>)}
        </div>
    )
}

export default Course