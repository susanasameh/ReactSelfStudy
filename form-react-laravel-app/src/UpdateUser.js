//[2]-------------------import--------------------
//use react hooks(useState& useEffect)
import { useEffect, useState } from "react";
//use Axios library for http requests

import Forms from "./Components/Forms/Forms";

//[1]----------------UpdatedUser function--------------------------------
export default function UpdateUser() {
    //[3]-------------useState--------------------------------
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
  //[4]get the id of the user from the url
  //using [0] because we need the last part of the url as a number not array
  //(URL) هذه السطر يستخرج  معرف المستخدم  من عنوان الرابط
  // عن طريق تقسيم الرابط إلى أجزاء واستخدام الجزء الأخير.هذا المعرف يُستخدم لجلب وتحديث بيانات المستخدم المحدد.
  const id = window.location.pathname.split("/").splice(-1)[0];

  //[5]-------------useEffect--------------------------------
  //useEffect to get data from the database and fetch it in the form to update the user
  useEffect(() => {
    //fetch data from the database using Axios library
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //fetch date in form
        //using setName because we need the name of the user we save it in the above useState
        //when we use console.log(data) we get an array with one object so we use [0] as index
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, [id]);

  //[6]-------------handlle submite function--------------------------------------------------------
  //[7]-------------return--------------------------------
  return (
    <>
      <h1>Update User</h1>
      {/* add props names to change properties of the component */}
      <Forms
        button="Update"
        name={name}
        email={email}
        endPoint={`user/update/${id}`}
        navigate="dashboard/users"
        hasLocalStorage={false}
        buttonStyle = {true}
      />
    </>
  );
}
