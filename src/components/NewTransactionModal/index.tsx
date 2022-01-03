import Modal from 'react-modal';
import  { Container, RadioBox, TransactionTypeContainer }  from './styles'
import { FormEvent, useState } from 'react';
import { useTransaction } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose:() =>void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const {creatTransaction} = useTransaction()

    const [tittle, setTittle] = useState('')
    const [amount, setAmount] = useState(0)    
    const [category, setCategory] = useState('')   
    const [type, setType] = useState('deposit')
    

    async function handleCreatNewTransaction(event: FormEvent) {
        event.preventDefault()

       await creatTransaction({
        tittle,
        amount,
        category,
        type,
       }) 

       setTittle('')
       setAmount(0)
       setCategory('')
       setType('deposit')
       onRequestClose()
    }

    return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
        <Container onSubmit={handleCreatNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
            placeholder="Título" 
            value={tittle}  
            onChange={event => setTittle(event.target.value)}
        />

        <input 
            placeholder="Valor"
            type='number'   
            value={amount}  
            onChange={event => setAmount(Number(event.target.value))} 
        />
     
        <TransactionTypeContainer>
            <RadioBox
            type="button" 
            onClick={()=>{ setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor={'green'}
            >
                <img src={incomeImg} alt="Entrada"/>
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
            type="button" 
            onClick={()=>{ setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor={'red'}
            >
                <img src={outcomeImg} alt="Saída"/>
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input 
            placeholder="Categoria"   
            value={category}  
            onChange={event => setCategory(event.target.value)} 
        />


        <button type="submit">
            Cadastrar
        </button>

        <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"    
        >
            <img src={closeImg} alt="Fechar modal"/>
        </button>
        </Container>
    </Modal>
);}