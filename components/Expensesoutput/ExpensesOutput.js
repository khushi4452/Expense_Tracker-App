import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: "two chocolates",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e2',
    description: "two chocolates",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e3',
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e4',
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
];

function ExpensesOutput({ expenses = DUMMY_EXPENSES, expenseperiod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expenseperiod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;
