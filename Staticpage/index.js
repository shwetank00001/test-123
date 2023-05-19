

const page=(
    <div>
        <img src="./react-logo.png" width="100px" />
        <h1>Fun Facts about React  </h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was created by Jordan Walke</li>
            <li>Has over 100k stars on github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of app, including mobile apps</li>
        </ul>
    </div>

)

ReactDOM.render(page,document.getElementById("root"))



function Header(){
    return(
        <header>
            <nav className="nav" >
                <img src="./react-logo.png" />
                <ul className="nav-ul">
                    <li >Pricing </li>
                    <li > About </li>
                    <li > Contact </li>
                </ul>
            </nav>
        </header>
    )
}





function Maincontent(){
    return(
        <div>
            <h1>Daily todo</h1>
                <ol>
                    <li>MERN stack dev</li>
                    <li>Practising reactjs</li>
                    <li>ANd going to gym</li>
                </ol>
        </div>
    )
}


function Page(){
    return(
        <div>
            <Header />  
            <Maincontent />
            <Footer />
        </div>
            
    )
}


function Footer(){
    return(
    <footer>
        "2023 Development by Shwetank. All right reserved   "
    </footer>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root2"))