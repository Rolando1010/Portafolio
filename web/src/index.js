import { render } from 'react-dom';
import Routes from './routes';

const App = () =>
    <Routes/>    

render(<App/>, document.getElementById("root"));