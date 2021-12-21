import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-card'>
      <div>24.12.2021</div>
      <div className='expense-description'>
        <h2>Birthday presents</h2>
        <div className='expense-price'>300$</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
