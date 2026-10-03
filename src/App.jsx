const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total number of units:{' '}
      {props.parts[0].units +
        props.parts[1].units +
        props.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>
        {props.studentName} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Industry Elective 1',
    parts: [
      {
        name: 'Applications Development and Emerging Technologies',
        units: 3
      },
      {
        name: 'Information Management 2',
        units: 3
      },
      {
        name: 'Data Analytics 1',
        units: 3
      }
    ]
  }

  const studentName = 'Jayross Versales'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <Footer
        studentName={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App