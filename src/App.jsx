import DevtoolsGuard from './security/DevtoolsGuard.jsx';
import AntiCopy from './security/AntiCopy.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  const isProd = import.meta.env.PROD;

  return (
    <>
      {isProd && <DevtoolsGuard />}
      {isProd && <AntiCopy />}
      <Home />
    </>
  );
}
