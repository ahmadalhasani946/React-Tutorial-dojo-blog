const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, ninja" , e);
    }

    function handleClickAgain(name, e) {
        console.log(`hello ${name}` , e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click ME</button>
            <button onClick={(e) => handleClickAgain("Ahmad", e)}>Click ME Again</button>
        </div>
     );
}
 
export default Home;