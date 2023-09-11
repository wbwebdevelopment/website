import ReactDOM from "react-dom/client"
import 'react-multi-carousel/lib/styles.css';
import App from "./App"
import "./style.css"
import LeaveReview from "./LeaveReview";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter([{
    path: "/",
    element: <App />
},
{
    path: "/leavereview",
    element: <LeaveReview />
}])

root.render(
    <RouterProvider router={router} />
)