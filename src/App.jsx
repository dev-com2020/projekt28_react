import "./App.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Feed from "./client/Feed.jsx";

function App() {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Facebook Clone</title>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="Facebook, React, Social Media" />
                </Helmet>
            </HelmetProvider>
            <Feed/>
            </>
    )

}
export default App;
