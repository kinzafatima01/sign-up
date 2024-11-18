import{  createUserWithEmailAndPassword, signInWithEmailAndPassword,  }
from "./firebase.js"

// let signup = async () =>{
//  let name = document.getElementById("name").value
//  let email = document.getElementById("email").value
// //  let cPassword = document.getElementById("password").value;
//  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


//  let name = document.getElementById("name").value;
//  let email = document.getElementById("email").value;
//  let userData = { name,  email, password };
//  console.log(userData);



//  if (emailRegex.test(email) && passwordRegex.test(password)){
//     console.log("test");
//     createUserWithEmailAndPassword(auth, email, password)
//       .then (async (userCredential) => {
//         const user = userCredential.user;
//         // console.log(user);

//         alert("Account created successfully");





//         try {
//             await setDoc(doc(db,"users",user.uid), {
//               ...userData,
//               uId: user.uid
//             });
//                 console.log("Document written with ID: ", user.uid);
//               } catch (e) {
//                 console.error("Error adding document: ", e);
//               }
//           });
//           console.log("Document written with ID:", docRef.id);
//           alert("signup Successful");
//           window.location.href = "signin.html"

//         }catch (error){
//             console.log(error.message);
//             alert(error.code);
//         }
        
      
// }

// let signUp = () => {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("pass").value;
//   let cPassword = document.getElementById("confirm_pass").value;
//   let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//   let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

//   let name = document.getElementById("name").value;
//   let number = document.getElementById("number").value;
//   let userData = { name, number, email, password };
//   console.log(userData);

//   if (emailRegex.test(email) && passwordRegex.test(password)) {
//     console.log("test");
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;
//         // console.log(user);
//         alert("Account created successfully");
//         // window.location.href = "./class27/index.html"
//         // ________________________________Add Doc
//           try {
//             const docRef = await addDoc(collection(db, "users"), {
//               ...userData,
//               uId: user.uid,
//             });
//             console.log("Document written with ID: ", docRef.id);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//         // ____________________________________Set Doc
//         try {
//           await setDoc(doc(db, "users", user.uid), {
//             ...userData,
//             uId: user.uid,
//           });
//           console.log("Document written with ID: ", user.uid);
//         } catch (e) {
//           console.error("Error adding document: ", e);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert(error.code);
//       });
//   } else {
//     alert("Invalid email or Password");
//   }
//   if (password !== cPassword) {
//     alert("Passwords should be identical");
//   }
// };
// // if (window.location.pathname == "/loginSignup/index.html") {
//   let signUp_btn = document.getElementById("signUp_btn");
//   signUp_btn.addEventListener("click", signUp);
// // }
// let logIn = () => {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("pass").value;
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       alert("Login Successful");
//       window.location.href = "./class27/index.html";
//     })
//     .catch((error) => {
//       alert(error.code);
//     });
// };
// if (window.location.pathname == "/loginSignup/login.html") {
//   let login_btn = document.getElementById("login_btn");
//   login_btn.addEventListener("click", logIn);
// }
// let googleSignup = () => {
//   signInWithPopup(auth, provider)
//     .then(async(result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       console.log(user);
//       // window.location.href = "./class27/index.html";
//       try {
//         await setDoc(doc(db, "users", user.uid), {
//           uid:user.uid,
//           name : user.displayName,
//           email : user.email,
//           image : user.photoURL,
//           number : user.phoneNumber
  
//         });
//           console.log("Document written with ID: ", user.uid);
//         } catch (e) {
//           console.error("Error adding document: ", e);
//         }
  

//     })
//     .catch((error) => {
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(email, credential);
//     });
// };
// if (window.location.pathname == "/loginSignup/index.html") {
//   let googleBtn = document.getElementById("googleBtn");
//   googleBtn.addEventListener("click", googleSignup);
// }
// document.getElementById("logOut").addEventListener("click",()=>{
//     signOut(auth).then(() => {
//         alert("Log out successfull")
//         window.location.href = "../index.html"
//       }).catch((error) => {
//         console.log(error.code);

//       });
// })

// //Getting user data from firestore
// let getAllUsers = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => `, doc.data());
//   });
// };
// getAllUsers();
let getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => `, doc.data());
  });
};

if (window.location.pathname.includes("loginSignup/index.html")) {
  let googleBtn = document.getElementById("googleBtn");
  googleBtn.addEventListener("click", googleSignup);
}

let googleSignup = () => {
  signInWithPopup(auth, provider)  // Ensure 'provider' is defined
    .then(async(result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      try {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          number: user.phoneNumber
        });
        console.log("Document written with ID: ", user.uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(email, credential);
    });
};
document.getElementById("logOut").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Log out successful");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.log(error.message);
      alert("Error logging out: " + error.message);
    });
});