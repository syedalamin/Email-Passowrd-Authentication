// import React from 'react';

// const RegisterBS = () => {
//     const handleRegister = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const password = form.password.value;
//         console.log(name, password)
//     }
//     return (
//         <div>
//             <form onSubmit={handleRegister}>
//                 <div className="mb-3">
//                     <label for="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterBS;