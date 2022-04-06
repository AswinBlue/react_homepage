import '../style/main.css';
import { Link } from 'react-router-dom';

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
        <Link to="#page-top" class="TopNav container"> 
            <div class="inner-text" id="main-logo">{props.name}</div>
        </Link>
    );
}

function Menu(props) {
    var page_top = props.page_top;
    return (
        <div class="TopNav container container-right">
            <lu class="menu-text row-table">
                <li class="container"><Link to={page_top} class="container"><span class="menu-activated">Home</span></Link></li>
                <li class="container"><Link to={page_top} class="container"><span class="menu-default">About</span></Link></li>
                <li class="container"><Link to={page_top} class="container"><span class="menu-default">Service</span></Link></li>
                <li class="container"><Link to={page_top} class="container"><span class="menu-default">Contact</span></Link></li>
            </lu>
        </div>
    )

}


export default TopNav;
