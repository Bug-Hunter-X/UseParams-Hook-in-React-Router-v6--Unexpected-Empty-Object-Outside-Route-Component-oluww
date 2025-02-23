// Correct Usage of useParams hook within a Route component.
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log('Params:', params); // Params will now contain route parameters
  return (
    <div>
      <h1>My Component</h1>
      <p>ID: {params.id}</p> 
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>} />
    </Routes>
  );
}
export default App; 