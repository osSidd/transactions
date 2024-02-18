import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TransactionContextProvider from './context/transactionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionContextProvider>
      <App />
    </TransactionContextProvider>
  </React.StrictMode>,
)
