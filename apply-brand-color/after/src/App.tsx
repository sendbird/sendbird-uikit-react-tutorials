import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function App() {
  const colorSet = {
    '--sendbird-light-primary-500': '#066858',
    '--sendbird-light-primary-400': '#027d69',
    '--sendbird-light-primary-300': '#259c72',
    '--sendbird-light-primary-200': '#69c085',
    '--sendbird-light-primary-100': '#a8e2ab',
  }

  return (
    // The chat interface can expand up to the dimensions of your parent component.
    // To achieve a full-screen mode, apply the following CSS rules to the parent element.
    <div style={{ width:'100vw', height:'100vh' }}>
      <SendbirdApp
        // You can find your Sendbird application ID on the Sendbird dashboard.
        appId={'YOUR_APP_ID'} //TODO : Replace with your own Sendbird application ID
        // Specify the user ID you've created on the dashboard.
        // Or you can create a user by specifying a unique userId.
        userId={'USER_ID'} //TODO: Replace with your own user ID
        colorSet={colorSet}
      />
    </div>
  )
}

export default App;