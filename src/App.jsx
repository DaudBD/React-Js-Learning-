
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



  {/* 
  
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

export default App;*/}