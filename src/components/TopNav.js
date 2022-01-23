import '../style/main.css';

function TopNav(props) {
    const {page_top, height} = props.page_top;
    return (
        <div class="TopNav-root TopNav" style={{height:height}}>
            <nobr>
                <Logo name="DEVLUV"/>
            </nobr>
            <Menu page_top={page_top}></Menu>
        </div>
    );
}

function Logo(props) {
    return(
        <a href="#page-top" class="TopNav container"> 
            <div class="inner-text" id="main-logo">{props.name}</div>
        </a>
    );
}

function Menu(props) {
    var page_top = props.page_top;
    return (
        <div class="TopNav container container-right">
            <lu class="menu-text row-table">
                <li class="container"><a href={page_top} class="container"><span class="menu-activated">Home</span></a></li>
                <li class="container"><a href={page_top} class="container"><span class="menu-default">About</span></a></li>
                <li class="container"><a href={page_top} class="container"><span class="menu-default">Service</span></a></li>
                <li class="container"><a href={page_top} class="container"><span class="menu-default">Contact</span></a></li>
            </lu>
        </div>
    )

}


export default TopNav;
