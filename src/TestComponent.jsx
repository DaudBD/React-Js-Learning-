
// export const TestComponent= () => {   // Named Export 
//     return <h1> Hello React </h1>;
// };


// const TestComponent= () => {
//     return <h1> Hello React </h1>;
// };
// export default TestComponent;

const name = "Arif";


export default function TestComponent() {
  return (
    <>    
    <div>
      <h1>TestComponent</h1>
      <p>My Name {name}</p>
      <span>I am from Bangldesh. I am Leraning </span>
    </div>
    <div>
        <h1> React Foundation </h1>
    </div>
    </>
  );
}