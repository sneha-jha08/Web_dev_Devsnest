// import { useState } from "react";

// const Form = (event) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState("India");
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const handleSubmit = () => {
//     setShowData(true);
//     console.log(
//       `email: ${email} password: ${password} country: ${country} acceptedTerms: ${acceptedTerms}`
//     );
//   };
// const [showData,setShowData]=useState(false);
//   return (
//     <div className="Form">
//       <form>
//         <h1>Create Account</h1>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             name="email"
//             required
//             placeholder="abc@default.com"
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </label>
// <br/>

//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             name="password"
//             minLength="5"
//             placeholder=" Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           ></input>
//         </label>
// <br/>

//         <label>
//           Country:
//           <select
//             required
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option key="India">India</option>
//             <option key="USA">USA</option>
//             <option key="Canada">Canada</option>
//             <option key="Japan">Japan</option>
//           </select>
//         </label>
// <br/>
//         <label>
//           Terms&Conditions:
//           <input
//             required
//             value={acceptedTerms}
//             type="checkbox"
//             name="acceptedTerms"
//             onChange={(e) => setAcceptedTerms(e.target.value)}
//           ></input>
//         </label>
// <br/>
//         <button
//           onClick={(e) => {
//             handleSubmit(e);
//           }}
//         >
//           Submit
//         </button>
//         {/* <button type="reset">Reset</button> */}
//         {showData ? <h5>{`email:${email}`}</h5> : <span>Incomplete Form</span>}
//       </form>
//     </div>
//   );
// };
// export default Form;
