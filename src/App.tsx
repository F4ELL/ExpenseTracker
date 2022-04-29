import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'
import { TableArea } from './components/TableArea'
import { categories } from './data/categories'
import { items } from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TItem } from './types/Item'

const App = () => {

  const [ list, setList ] = useState(items)
  const [ filteredLIst, setFilteredList ] = useState<TItem[]>([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ income, setIncome ] = useState(0)
  const [ expense, setExpense ] = useState(0)

  useEffect(() => {
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let IncomeCount = 0
    let expenseCount = 0

    for(let i in filteredLIst){
      if(categories[filteredLIst[i].category].expense){
        expenseCount += filteredLIst[i].value
      } else{
        IncomeCount += filteredLIst[i].value
      }
    }
    setIncome(IncomeCount)
    setExpense(expenseCount)

  }, [filteredLIst])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: TItem) => {
    const newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>  
        <InputArea onAdd={handleAddItem}/>      
        <TableArea list={filteredLIst}/>
      </C.Body>
    </C.Container>
  )
}

export default App