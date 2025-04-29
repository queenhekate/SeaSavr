import { useEffect, useState } from 'react';
import PollutionForm from './components/PollutionForm/PollutionForm';
import PollutionMap from './components/PollutionMap';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Main />
      <PollutionForm />
      <PollutionMap />
    </div>
  );
}

export default App;
