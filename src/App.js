import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWork from "./components/HowItWork";
import Download from "./components/Download";
import Blog from "./components/Blog";
import SupportHeader from "./components/supportComponents/SupportHeader";
import SupportHome from "./components/supportComponents/SupportHome";
import SupportFooter from "./components/supportComponents/SupportFooter";
import SupportCommunity from "./components/supportComponents/SupportCommunity";
import SupportRequest from "./components/supportComponents/SupportRequest";
import SignInPage from "./components/supportComponents/SignInPage";
import SingUpPage from "./components/supportComponents/SingUpPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						} />
					<Route exact path="/howitwork"
						element={
							<>
								<Header />
								<HowItWork />
								<Footer />
							</>
						} />
					<Route exact path="/download"
						element={
							<>
								<Header />
								<Download />
								<Footer />
							</>
						} />
					<Route exact path="/blog"
						element={
							<>
								<Header />
								<Blog />
								<Footer />
							</>
						} />
					<Route exact path="/support"
						element={
							<>
								<SupportHeader />
								<SupportHome />
								<SupportFooter />
							</>
						} />
					<Route exact path="/support-community"
						element={
							<>
								<SupportHeader />
								<SupportCommunity />
								<SupportFooter />
							</>
						} />
					<Route exact path="/support-request"
						element={
							<>
								<SupportHeader />
								<SupportRequest />
								<SupportFooter />
							</>
						} />
					<Route exact path="/sign-in"
						element={
							<>
								<SignInPage />
							</>
						} />
					<Route exact path="/sign-up"
						element={
							<>
								<SingUpPage />
							</>
						} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
