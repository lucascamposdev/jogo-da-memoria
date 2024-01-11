import UserProvider from "./context/UserContext"
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
    <UserProvider>
      <MainPage/>
    </UserProvider>
    </>
  )
}

export default App
