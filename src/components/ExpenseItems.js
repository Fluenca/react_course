import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Test"
  const expenseAmount = "300$";

  return (
    <div className="expense-card">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-description">
        <h2>{expenseTitle}</h2>
        <div className="expense-price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
