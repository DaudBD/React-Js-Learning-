import "./Card.css"


export default function Card ({name,age}) {

    return (
        <>
{age > 18 ?
 <div className="Card">
<p>First Name : {name}</p>
<p>Age : {age}</p>
</div> :<div className="Card">You are Too Young</div>}

</>
    );}













// export default function Card ({name,age}) {

//     return (
//         <>
// {age > 18 &&
//  <div className="Card">
// <p>First Name : {name}</p>
// <p>Age : {age}</p>
// </div>}

// { age < 18 &&
//  <div className="Card">
// You are a Too Young 
// </div>}
// </>
//     );}








// export default function Card ({name,age}) {
// if ( age < 18) {
//   return <div className="Card">You are Too Young</div>;
// };

//     return (

//  <div className="Card">
// <p>First Name : {name}</p>
// <p>Age : {age}</p>
// </div>
//     );
// }








// export default function  Card(props) {
// console.log(props);

//     return (  
//         <div>
//             {props.children}
//    <p>First Name :{props.firstName}</p>
//    <p>Last Name :{props.lastName}</p>
//    <p>Age :{props.age}</p>

//         </div>
 
// );

// }

// export default function Card ({children,firstName,lasttName,age}) {

//     return (
// <div>
//     {children}
// <p>First Name : {firstName}</p>
// <p>Last Name : {lasttName}</p>
// <p>Age : {age}</p>
// </div>
//     );
// }