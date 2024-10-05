import Part from './Part'
import Total from './Total'
const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id}/>)}
        <Total parts={parts} />
      </div>
    )
}

export default Content