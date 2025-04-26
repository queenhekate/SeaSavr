import { useEffect, useState } from 'react';
import PollutionForm from './components/PollutionForm';
import PollutionMap from './components/PollutionMap';

function App() {
  return (
    <div>
      <PollutionForm />
      <PollutionMap />
    </div>
  );
}

export default App;
