

function Maincontent(){
    return(
        <h2>Im learning react -- Root 2 componet</h2>
    )
}


function TestCase(){
    return(
        <h2>This is a test case</h2>
    )
}

ReactDOM.render(<h2>Shwetank</h2>, document.getElementById("root"))
ReactDOM.render(<ul>
                    <li>Mongo</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Nodejs</li>
                </ul>, document.getElementById("root1"))


ReactDOM.render(
    <div>
        <Maincontent/>
        <TestCase/>
    </div>,document.getElementById("root2")
)



const page = ( 
        <div>
            <h2>Trying jsx by defining a var</h2>
            <p>Using two siblings inside a wrap</p>
        </div>
)

ReactDOM.render(page,document.getElementById("root3"))


const website = (
    <nav>
        <h1>Shwetanks Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(website,document.getElementById("root4"))



ReactDOM.render(<h4> This is warmup</h4>, document.getElementById("root8"))