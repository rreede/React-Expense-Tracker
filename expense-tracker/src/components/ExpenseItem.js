import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className="flex-auto rounded-lg border-gray-400 border-2 shadow-md bg-gray-200 p-5 m-5 text-gray-800">
      <div className="inline-block text-3xl">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="inline-block">
        <h2 className=" text-xl">{props.title}</h2>
        <div className=" text-4xl ml-6">€ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
