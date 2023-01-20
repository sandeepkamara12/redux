import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const AC = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      Bank Amount Is {account}
      <button onClick={() => AC.depositMoney(100)}>deposit</button>
      <button onClick={() => AC.withdrawMoney(100)}>withdraw</button>
    </div>
  );
}

export default App;
