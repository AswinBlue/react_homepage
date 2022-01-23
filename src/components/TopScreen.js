import '../style/main.css';
import screen_img from '../resources/screen_img.webp'
import { useState, useEffect } from 'react'

function TopScreen(props) {
    // 이미지 이름을 props에서 받아와 사용하도록
    const {title, sub_title} = props.title;
    // scroll position
    const [scrollPos, setScrollPos] = useState(0);
    const scroll_handler = () => {
        const pos = window.pageYOffset;
        setScrollPos(pos);
    };
    useEffect(() => {
        window.addEventListener("scroll", scroll_handler);
        return () => {
            window.removeEventListener("scroll", scroll_handler);
        };
    });

    // INFO: React JSX에서 style 설정
    var _style = {
        'top': 0 //- scrollPos
    }
    var _style_img = {
        'background-image': "url(" + screen_img + ")",
        'top': -694 - scrollPos * 4/5
    };

    console.log(title, sub_title);
    return (
        <div class="top-screen" style={_style}>
        {/*<div class="top-screen" data-parallax="scroll" data-bleed="0" data-idele="parallax_home_opacity" data-opacity="0.5" data-filter="" data-backgroundcolor="#000000" data-image-src={screen_img} data-position="center center" data-background-position="center center" style={_style}> */}
            {/* INFO: React JSX에서 주석 */}
            <div class="top-screen-image" style={_style_img}/>
            <div class="top-screen-text">
                <div class="top-screen-text top-screen-title">
                    {title}
                </div>
                <div class="top-screen-text top-screen-sub">
                    {sub_title}
                </div>
            </div>
        </div>
    )
}

export default TopScreen;