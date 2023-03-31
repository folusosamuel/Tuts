const Home = () => {

    const handleClick = () => {
        console.log("hello, ninjas");
    }

const handleClickAgain = (name) => {
    console.log("Hello " + name);
}

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick = {() => handleClickAgain('mario')}>Click me again</button>
        </div>
    );
}
 
export default Home;