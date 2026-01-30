import ListGroup from './components/ListGroup';

function App() {
  let items = ["list item 1", "list item 2"];
  return <div><ListGroup items={items} heading="To Do" /></div>
}

export default App;