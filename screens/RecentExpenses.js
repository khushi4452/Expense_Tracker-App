import { Text } from 'react-native';
import ExpensesOutput from '../components/Expensesoutput/ExpensesOutput';

function RecentExpense()  {
    return <ExpensesOutput expenseperiod="Last 7 days"/>;
}
export default RecentExpense ;