// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// // import { BrowserRouter as Router } from "react-router-dom";
// import { createBrowserRouter,RouterProvider,useLocation } from "react-router-dom";
// import About from "./pages/About.jsx";
// import Carrer from "./pages/Carrer.jsx";
// import Events from "./componets/Events.jsx";
// import Gallery from "./componets/Gallery.jsx"
// import Blog from "./componets/Blog.jsx"
// import Aboutus from "./pages/Aboutus.jsx"
// import Brochure from "./pages/Brochure.jsx"
// import Labsetup from "./pages/Labsetup.jsx"
// import Media from "./pages/Media.jsx";
// // import Error from "./pages/Error.jsx"



// const location = useLocation();
  
//   useEffect(() => {
//     // Scroll to the top on route change
//     document.querySelector('html').style.scrollBehavior = 'auto';
//     window.scroll({ top: 0 });
//     document.querySelector('html').style.scrollBehavior = '';

//     // Update document title based on route
//     switch (location.pathname) {
//       case '/login':
//         document.title = 'Resdeck | Login';
//         break;
//       case '/signup':
//         document.title = 'Resdeck | SignUp';
//         break;
//       case '/pin-login':
//         document.title = 'Resdeck | Pin-Login';
//         break;
//       case '/dashboard':
//         document.title = 'Resdeck | Dashboard';
//         break;
//       case '/resetpassword':
//         document.title = 'Resdeck | Reset Password';
//         break;
//       case '/order':
//         document.title = 'Resdeck | Order';
//         break;
//       case '/menu':
//         document.title = 'Resdeck | Menu';
//         break;
//       case '/report':
//         document.title = 'Resdeck | Report';
//         break;
//       default:
//         document.title = 'Resdeck';
//         break;
//     }
//   }, [location.pathname]);

// const router = createBrowserRouter([
//   {path: "/",element: <App />,},
//   {path: "/media",element: <Media />},
//   {path: "/about",element: <About />},
//   {path: "/career",element: <Carrer />},
//   {path: "/events",element: <Events />},
//   {path: "/gallery",element: <Gallery />},
//   {path: "/blog",element: <Blog />},
//   {path: "/aboutus",element: <Aboutus />},
//   {path: "/brochure",element: <Brochure />},
//   {path: "/labsetup",element: <Labsetup />},
//   // { path: "*", element: <Error /> }, 
// ]);

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <Router>
// //       <App />
// //     </Router>
// //   </React.StrictMode>
// // );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Carrer from "./pages/Carrer.jsx";
import Events from "./componets/Events.jsx";
import Gallery from "./componets/Gallery.jsx";
import Blog from "./componets/Blog.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Brochure from "./pages/Brochure.jsx";
import Labsetup from "./pages/Labsetup.jsx";
import Media from "./pages/Media.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/media", element: <Media /> },
  { path: "/about", element: <About /> },
  { path: "/career", element: <Carrer /> },
  { path: "/events", element: <Events /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/blog", element: <Blog /> },
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/brochure", element: <Brochure /> },
  { path: "/labsetup", element: <Labsetup /> },
  // { path: "*", element: <Error /> }, // Handle undefined routes
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       {/* <ScrollToTopAndTitle /> Component for scroll and title management */}
//     </RouterProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);
