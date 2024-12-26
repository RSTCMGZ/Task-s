
import Header from "./components/header/header"
import TaskAddtionalInfo from "./tasks/task1-additional-info"

function App() {

  return (
    
    <div className="container py-3">
      <Header/>
      
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-body-emphasis">
            ReactJS Dersleri
          </h1>
          <p class="fs-5 text-body-secondary">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
    <TaskAddtionalInfo/>
    </div>
  )
}

export default App
