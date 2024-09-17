import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: "two chocolates",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e2',
    description: "five Biscuits",
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
  {
    id: 'e5',
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e6',
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e7',
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e8', // unique id
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e9', // unique id
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e10', // unique id
    description: "two dresses",
    amount: 55.90,
    date: new Date('2023-12-19'),
  },
];

function ExpensesOutput({ expenses = DUMMY_EXPENSES, expenseperiod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expenseperiod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary50,
  },
});
