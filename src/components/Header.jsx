

function Header(props){
    return(
        <div className="text-3xl text-center text-white font-bold p-2 mb-4 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 overflow-hidden">
            <h1 className="header-animation">
                {props.title} 
            </h1>
        </div>
    )
}
export default Header;