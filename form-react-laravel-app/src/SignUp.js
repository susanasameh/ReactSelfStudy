
import Header from './Components/Header';
import Forms from './Components/Forms/Forms';


export default function SignUp() {
  
  return (
    <>
      <Header />
      <Forms
        button="Sign Up"
        endPoint="register"
        navigate="login"
        hasLocalStorage={true}
        registerStyle={true}
        formStyle={true}
       
      />
    </>
  );
}