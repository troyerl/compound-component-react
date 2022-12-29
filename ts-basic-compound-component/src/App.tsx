import './Global.css';
import Card from './Card';

function App() {

  return (
    <div className="App">
      <Card>
        <Card.Header>
          <h4>Header</h4>
        </Card.Header>
        <Card.Body>
          <p>Body</p>
        </Card.Body>
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default App
