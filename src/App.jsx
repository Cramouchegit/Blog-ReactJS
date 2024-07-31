// Pengenalan Project React
// Pengenalan dasar component dan JSX
// Props Pada Child Component

// import Article from "./components/Article";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <div>
//         <Article
//           name="Mabuchi"
//           titles={[
//             "Tutorial Belajar ReactJS",
//             "Belajar Angular",
//             "Belajar NextJS",
//           ]}
//         />
//       </div>
//       <br />
//       <div>
//         <Article
//           name="Guntur"
//           titles={[
//             "Tutorial Belajar NestJS",
//             "Belajar VueJS",
//             "Belajar NextJS",
//           ]}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

// Membuat Blog sederhana dengan Component dan Context
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { GlobalContext } from "./context";
import "./App.css";

function App() {
  const user = {
    username: "Guntur",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
