//  import {TestComponent} from './TestComponent'; // named Export
//  import TestComponent from './TestComponent'; // Default Export
// import Card from "./Components/Card";
import "./Components/style.css";
import { useState } from "react";

const App = () => {
  let [FormObj, setObjForm] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const inputOnChange = (property, value) => {
    setObjForm((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(FormObj);
  };

  return (
    <div className="container">
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            inputOnChange("fName", e.target.value);
          }}
          value={FormObj.fName}
          placeholder="First Name"
        />
        <br />
        <input
          onChange={(e) => {
            inputOnChange("lName", e.target.value);
          }}
          value={FormObj.lName}
          placeholder="Last Name"
        />
        <br />
        <select
          onChange={(e) => {
            inputOnChange("city", e.target.value);
          }}
          value={FormObj.city}
        >
          <option value="">Choose City</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Dhaka">Dhaka</option>
        </select>
        <br />
        <input
          onChange={() => {
            inputOnChange("gender", "Male");
          }}
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => {
            inputOnChange("gender", "Female");
          }}
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;















// const App = () => {
//   const members = [
//     { name: "Arif", age: 30 },
//     { name: "Adi", age: 10 },
//     { name: "Jerin", age: 50 },
//     { name: "Daud", age: 40 },
//   ];

//   return (
//     <div>
//       {members
//         .filter((member) => member.age > 18).sort((a,b) => a.age -b.age)
//         .map((member) => (
//           <Card name={member.name} age={member.age} />
//         ))}
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//         <Card name="Arif" age ={37}/>
//        <Card name="Adiyan" age ={4}/>
//           <Card name="Adi" age ={44}/>

//               <Card name="Daud" age ={54}/>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//       <Card firstName ="Arif" lastName="Islam" age ={31}>

//         <h1>Welcome To React</h1> </Card>
//     </div>
//   );
// };

// export default App;

// export default function TestComponent() {
//   return
//   <h1>TestComponent</h1>
// }

// import React, { useState } from 'react';
// import "./app.css";
// import card from "./Component/card.jsx";
// const App = () => {

// const [name ,setName] = useState();
// const [set,setAge] = useState();
// const [members,setMembers] = useState([
//   {name:"Mir",age=24}
//   {name : "mizan", age :30}
//   {name : "aizan", age :20}
//   {name : "rizan", age :30}
// }]);

// const handleSubmit = (e) => {
//   e.preventDefault();
// }
// setMembers({name ,age})

//   return (
//     <div>
//       <form>

//       </form>
//     </div>
//   );
// };

// export default App;

// import  { useRef } from "react";

// const App = () => {
//   const firstName = useRef();
//   const lastName = useRef();

//   const change = () => {
//     let fName = firstName.current.value;
//     let lName = lastName.current.value;

//     alert(`My Name Is ${fName} ${lName}`);
//   };

//   return (
//     <div>
//       <input ref={firstName} placeholder="firstName" />
//       <br />

//       <input ref={lastName} placeholder="lastName" />
//       <br />

//       <button onClick={change}>Click</button>
//     </div>
//   );
// };

// export default App;

// import  { useRef } from 'react';

// const App = () => {

// let myHeading = useRef ();

// const change = () => {
//   // myHeading.current.innerText =" Hello Use Ref";
//   // myHeading.current.innerHTML ="<ul><li> A</li><li>B</li></ul>";
//    myHeading.innerHTML ="<ul><li> A</li><li>B</li></ul>";

// }
//   return (
//     <div>

//            <h1 ref= {(h1) => myHeading=h1}></h1>
//       {/* <h1 ref= {myHeading}></h1> */}
// <button onClick ={change}> CLICK </button>
//     </div>
//   );
// };

// export default App;

// const App = () => {

// const event = (e) => {
//   e.preventDefault();

//   alert("Form Submitted")
// }

//   return (
//     <div>
//       <form onSubmit={event}>
//  <input placeholder ="name"/>

//  <button type="submit">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//       <Hero
//         title="learn React"
//         des="In Brief describe React"
//       />
//     </div>
//   );
// };

// export default App;

// const App = () => {

//   let status = false
//   return (
//     <div>
//     {(()=> {
//      if (status === true){
//       return <button>LogOut Button </button>
//      } else {
//       return <button>LogIn Button</button>
//      }

//     })()}
//     </div>
//   );
// };

// export default App;

{
  /* 
 const isLoggedIn = true
const App = () => {
  return (
    <div>

      <h1> Login Button staus </h1>
      {
       isLoggedIn && <button>Login Button </button>

      }
    </div>
  );
};

export default App;



  
  
  const App = () => {
    const status = true
    return (
      <div>
         {status ? <button>Login</button> : <button>Logout</button>}
      </div>
    );
  };
  
  export default App;
  
  
  
  
  
  
  
  
  
  {/* 
const App = () => {
  const status = true;

  return (
    <div>
      {(() => {
        switch (status) {
          case true:
            return <button>Login</button>;

          case false:
            return <button>Logout</button>;

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default App;



 This Invoked FUnction of React JS 
  const App = () => {

    const city = ["Dhaka","Delhi" ,"Rajshahi","USA"]
    return (
      <div>
        <ul>

{
 city.map((item,i) => {
return <li key ={i.toString()}>
{item}
</li>
 })}
        </ul>
      </div>
    );
  };
  
  export default App;























  
  
  
  
  

    
    const App = () => {
  let marks = 90;
 This is a comment 
  return (
    <div>
      {(() => {
        if (marks > 80 && marks <= 100) {
          return <h1>A+</h1>;
        } else if (marks > 70 && marks <= 80) {
          return <h1>A</h1>;
        } else if (marks > 60 && marks <= 70) {
          return <h1>A-</h1>;
        } else if (marks > 50 && marks <= 60) {
          return <h1>B</h1>;
        } else if (marks > 40 && marks <= 50) {
          return <h1>C</h1>;
        } else {
          return <h1>F</h1>;
        }
      })()}
    </div>
  );
};

export default App;*/
}
