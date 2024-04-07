import React, {useState} from 'react';
import './App.css';

const orderDetails = {
  orderNumber: 'Food Delivery Order #12345',
  items: ['Pizza', 'Coke'],
  status: 'In transit',
  deliveryPersonId: 'YOUR_DELIVERY_PERSON_ID', // TODO Replace 'YOUR_DELIVERY_PERSON_ID' with the actual delivery person's user ID
};

type OrderStatusProps = { orderDetails: typeof orderDetails };
const OrderStatus = ({orderDetails, children}: React.PropsWithChildren<OrderStatusProps>) => {
  return (
    <div className="order-container">
      <div className="order-body">
        <div className="order-number">{orderDetails.orderNumber}</div>
        <div className="order-details">
          <p>Details:</p>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="order-status">Status: {orderDetails.status}</div>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [userId, setUserId] = useState('');
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId.trim()) setShowLogin(false);
  };

  const renderLoginForm = () => {
    return (
      <form className={'login-form'} onSubmit={handleLogin}>
        <input type="text" placeholder="Enter your user ID" value={userId}
               onChange={(e) => setUserId(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    );
  };

  const renderApp = () => {
    return (
      <div className="app-container">
        <OrderStatus orderDetails={orderDetails}></OrderStatus>
      </div>
    );
  };

  return <div className="App">{showLogin ? renderLoginForm() : renderApp()}</div>;
};

export default App;