import AddTransactionForm from "./components/AddTransactionForm";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionsList from "./components/TransactionsList";
import GlobalContextProvider from "./context/GlobalContext";


function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header/>
        <Balance/>
        <IncomeExpense/>
        <TransactionsList/>
        <AddTransactionForm/>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
