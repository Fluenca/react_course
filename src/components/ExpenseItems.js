import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='card-item'>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
