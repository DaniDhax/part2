const Parts = ({ courses }) => {
    return (
        <div>
            {courses.parts.map(title => <p key={title.id}>{title.name} {title.exercises}</p>)}
        </div>
    )
}

export default Parts