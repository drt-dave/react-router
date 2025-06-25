import { AuthLayout } from "./auth/layout/AuthLayout";
import { AppRouter } from "./AppRouter";

function App() {

  return (
    <>
	  <AppRouter/>
	   <AuthLayout/> 
	  {/* <ChatLayout> */}
		{/* <ChatPage/> */}
	  {/* </ChatLayout> */}
    </>
  )
}

export default App
