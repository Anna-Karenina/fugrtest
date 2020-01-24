import React from 'react';
import { default as Navibar } from './components/Navbar';
import PageWrapper  from './components/PageWrapper';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('dark')
  return (
    <div className="App">
      <Navibar theme={theme} setTheme = {setTheme}/>
      <PageWrapper theme={theme} />
    </div>
  );
}

export default App;
