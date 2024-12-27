import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
    return (
        <>
            <Header/>
            <Banner image='home'/>
            <Container>
                <h1>teste</h1>
                <h2>aff magia</h2>
                <h2>aff maria</h2>
            </Container>

            <Footer/>
        </>
    );
}

export default App;
