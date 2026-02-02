// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// // Import Bootstrap CSS
// import './layout';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './login';

// import React from 'react';

// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <a className="navbar-brand" href="#home">
//             My React Bootstrap Page
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#features">
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero section */}
//       <header id="home" className="bg-light py-5">
//         <div className="container text-center">
//           <h1 className="display-4">Welcome to React + Bootstrap</h1>
//           <p className="lead">
//             This is a simple webpage built using React components and Bootstrap 5 classes.
//           </p>
//           <a href="#features" className="btn btn-primary btn-lg">
//             View Features
//           </a>
//         </div>
//       </header>

//       {/* Features section */}
//       <section id="features" className="py-5">
//         <div className="container">
//           <h2 className="mb-4 text-center">Features</h2>
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Fast Development</h5>
//                   <p className="card-text">
//                     Use React components with Bootstrap classes to quickly build responsive UIs.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Responsive Layout</h5>
//                   <p className="card-text">
//                     Bootstrap grid system ensures your page looks good on all devices.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Reusable Components</h5>
//                   <p className="card-text">
//                     Split your UI into small React components and reuse them across the app.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact section */}
//       <section id="contact" className="bg-dark text-white py-5">
//         <div className="container">
//           <h2 className="mb-4 text-center">Contact</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input type="text" className="form-control" placeholder="Your name" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input type="email" className="form-control" placeholder="you@example.com" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Message</label>
//                   <textarea className="form-control" rows="3" placeholder="Your message" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-secondary text-white text-center py-3">
//         <div className="container">
//           <small>© {new Date().getFullYear()} My React Bootstrap Page</small>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;