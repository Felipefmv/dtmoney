import Modal from "react-modal"; 
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from 'react'
import { TransactionsProvider } from "./hooks/useTransactions";


import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =useState(false);
  

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
      
    </TransactionsProvider>
  );
}


