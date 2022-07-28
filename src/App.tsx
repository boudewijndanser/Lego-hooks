import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { UserProvider } from './context/userContext'
import ResponsiveAppBar from './components/mainNav'
import FormDialog from './components/loginForm'
import { SetsOverview } from './components/setsOverview'


function App() {

  return (
    <div>
      <header >
      <UserProvider>
        <ResponsiveAppBar/>
        <FormDialog />
        {/* <SetsOverview /> */}
      </UserProvider>
      </header>
    </div>
  );
}

export default App
