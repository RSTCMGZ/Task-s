import Table from './compotents/Table'
import Search from './compotents/Search'
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <>
    <Container fluid='md' >
    <div className='mt-3 mb-4'>
      <h1>Assigned Agents</h1>
    </div>
    <div className='mt-3 mb-3'>
    <Search/>
    </div>
        <Table/>
    </Container>
    </>
  )
}

export default App
