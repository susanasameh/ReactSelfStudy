import React from 'react'

//when we use one of the class we have to export it as a default class and then import it from the file  a default class


// class ClassComp extends React.Component {
//     render() {
//         return <p>This is a Class Components</p>;
//         }
// }

// export default ClassComp;

//we can write more than one calss in one file and then export them
//but here we need to add export before the class components


export class ClassComp extends React.Component {
  render() {
    return <p>This is a Class Components</p>;
  }
}


 export class ClassComp2 extends React.Component{
    render() {
        return <p>This is a Class Components2</p>;
    }
}


