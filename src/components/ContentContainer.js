import '../style/main.css';
function ContentContainer(props) {
    const title = props.title;

    return (
        <div class='content-container'>
            <div class='content-container-title'>{title}</div>
            <hr class='small'/>
            <div class='content-container-body'></div>
        </div>
    )
}

export default ContentContainer;