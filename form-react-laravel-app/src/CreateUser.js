import Forms from "./Components/Forms/Forms";

export default function CreateUser() {
   return (
     <Forms endPoint="user/create" navigate="dashboard/users" buttonStyle ={true} button = "Create" />
   );
}