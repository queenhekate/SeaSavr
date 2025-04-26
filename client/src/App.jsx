import { useEffect, useState } from 'react';
import PollutionForm from './components/PollutionForm';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-800">SeaSavr 🌊</h1>
      <PollutionForm />
    </div>
  );
}

export default App;
