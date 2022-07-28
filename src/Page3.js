import Navigation from "./components/navigation";
import CardExample from "./components/CardExample";

function Page3() {
    return (
        <div className="App">

            <Navigation/>

            <header className="App-header">
                <p>
                    Korteksempel
                </p>
                <CardExample/>
            </header>
        </div>
    );
}

export default Page3;