import TaskProvider from './src/contexts/TaskContext';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

