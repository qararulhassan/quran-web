
export const Logo = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <polygon points="236.3 339.8 15 248.8 15 271.8 186.6 360.2" fill="currentColor"></polygon>
            <path d="M256 396l51.9-26.8 17.5-9L497 271.8v-23l-221.3 91-19.7 8.1-51.9 21.3-18.2 7.5L15 447v45.5l36.5-15c2.2-.9 4.7-1 7.1-.4l26 7.1 44.3-22.8 31.1-16c0-.1.1-.1.1-.1l79.5-40.9L256 396zM272.3 404.4l79.6 41 31.1 16 44.4 22.9 26-7.1c2.3-.7 4.9-.5 7.1.4l36.5 14.9V447l-171-70.3L272.3 404.4zM337.5 230.6c1-.3 1.9-.6 2.8-.9.9-.3 1.8-.5 2.7-.8.9-.3 1.8-.5 2.6-.8.6-.2 1.1-.3 1.7-.5.5-.2 1.1-.3 1.6-.5.6-.2 1.1-.4 1.6-.5.3 0 .5-.1.8-.2.5-.1 1-.3 1.5-.4 1.4-.5 2.9-.9 4.2-1.2 1-.3 2-.6 2.9-.8.4-.1.8-.2 1.3-.3.5-.1.9-.2 1.3-.3 4.8-1.3 7.8-1.9 8.4-2 1-.2 1.9-.2 2.8 0 .4 0 .8.1 1.2.3.2 0 .4.1.6.2.4.2.8.4 1.1.6.4.2.7.5 1 .8.1.2.3.3.4.5.3.3.6.6.8 1 .5.7.8 1.5 1 2.4.8 4-1.8 8-5.9 8.8-.2 0-5.4 1.1-13.8 3.4-.7.2-1.4.4-2.2.6-1 .3-2 .6-3.1.9-.8.2-1.7.4-2.5.7-1.1.3-2.2.6-3.4 1-.9.2-1.8.5-2.7.8-.6.2-1.3.4-1.9.6-5.3 1.7-11.2 3.7-17.3 6-2.2.8-4.4 1.6-6.6 2.5-.7.3-1.4.6-2.2.9-1.5.6-3 1.3-4.5 1.9-3 1.3-6.1 2.7-9.2 4.1-1.5.7-3.1 1.4-4.6 2.2-1.6.8-3.2 1.5-4.7 2.3-1.6.8-3.2 1.6-4.7 2.4s-3.1 1.6-4.6 2.5c-1.5.8-3.1 1.7-4.6 2.6-3 1.8-6 3.6-9 5.6-2.3 1.4-4.5 2.9-6.6 4.5-.8.5-1.5 1.1-2.2 1.6v9.2l43.2-17 128-50.4v-18.7c-8.1 2.3-18.1 2.9-29.8 2-6.2-.5-12.5-.7-18.7-.6-.9.1-1.8.1-2.7.1-1.2.1-2.5.1-3.8.2-.7 0-1.5.1-2.3.1-1.6.1-3.1.3-4.7.4-.7 0-1.5.1-2.3.2-.2.1-.4.1-.6.1-1 .1-1.9.2-2.9.3-.9.1-1.7.2-2.6.3-4.7.7-9.5 1.5-14.2 2.5-6.6 1.4-12.8 2.9-18.5 4.6-1.2.3-2.3.7-3.4 1-1.3.4-2.6.8-3.8 1.2-.5.2-.9.3-1.4.5-1 .3-1.9.6-2.8.9s-1.8.7-2.7 1c-1.8.7-3.5 1.3-5.1 2-.8.3-1.6.6-2.4 1.2-.4.2-.8.3-1.2.5-2.3 1-4.4 1.9-6.4 2.9-.5.2-.9.4-1.3.6-.7.3-1.3.7-2 1-.8.3-1.5.7-2.2 1.1-.7.3-1.4.7-2.1 1.1-.7.3-1.3.6-1.9 1-18.2 10.3-26.2 20.5-29 24.7-.1.2-.2.3-.3.5-.1.1-.2.2-.2.3v7.2c24.2-16 51.3-27 72.2-33.9C336.2 231 336.9 230.8 337.5 230.6z" fill="currentColor"></path>
            <path d="M460.6,247.5V231l-201.8,79.5c-1.8,0.7-3.7,0.7-5.5,0L51.4,231v16.6L256,331.7L460.6,247.5z" fill="currentColor"></path>
            <path d="M77.6,206.5V225l128,50.4l43.2,17v-9.2c-0.8-0.6-1.5-1.1-2.2-1.6c-2.2-1.5-4.4-3-6.6-4.5c-2.9-1.9-5.9-3.8-9-5.6 c-1.5-0.9-3.1-1.8-4.6-2.6s-3-1.7-4.6-2.5s-3.1-1.6-4.7-2.4c-1.6-0.8-3.1-1.5-4.7-2.3c-1.5-0.7-3.1-1.5-4.6-2.2 c-3.1-1.5-6.2-2.8-9.2-4.1c-1.5-0.7-3-1.3-4.5-1.9c-0.7-0.3-1.5-0.6-2.2-0.9c-2.2-0.8-4.4-1.7-6.6-2.5c-6.2-2.3-12-4.3-17.3-6 c-0.7-0.2-1.3-0.4-1.9-0.6c-0.9-0.2-1.8-0.5-2.7-0.8c-1.1-0.3-2.3-0.7-3.4-1c-0.9-0.2-1.7-0.5-2.5-0.7c-1.1-0.3-2.1-0.6-3.1-0.9 c-0.8-0.2-1.5-0.4-2.2-0.6c-8.4-2.3-13.6-3.4-13.8-3.4c-4.1-0.8-6.7-4.7-5.9-8.8c0.2-0.9,0.5-1.7,1-2.4c0.3-0.3,0.5-0.7,0.8-1 c0.1-0.2,0.2-0.4,0.4-0.5c0.3-0.3,0.7-0.6,1-0.8c0.3-0.2,0.7-0.4,1.1-0.6c0.2-0.1,0.4-0.1,0.6-0.2c0.4-0.1,0.8-0.2,1.2-0.3 c0.9-0.2,1.8-0.2,2.8,0c0.6,0.2,3.6,0.8,8.4,2c0.5,0.1,0.9,0.2,1.3,0.3c0.4,0.1,0.8,0.2,1.3,0.3c0.9,0.3,1.9,0.5,2.9,0.8 c1.3,0.4,2.7,0.8,4.2,1.2c0.5,0.1,1,0.3,1.5,0.4c0.3,0,0.5,0.1,0.8,0.2c0.4,0.1,0.8,0.3,1.3,0.4c0.1,0,0.3,0.1,0.4,0.1 c0.4,0.1,0.9,0.2,1.4,0.4c0.5,0.1,1,0.2,1.5,0.4c0.9,0.2,1.9,0.5,2.8,0.8c0.8,0.3,1.7,0.5,2.5,0.8c1,0.4,2,0.7,3,1 c0.6,0.2,1.3,0.4,1.9,0.6c20.9,6.9,48,17.9,72.2,33.9v-7.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.5 c-2.8-4.1-10.9-14.4-29-24.7c-0.6-0.3-1.3-0.7-1.9-1c-0.7-0.3-1.4-0.7-2.1-1.1c-0.7-0.3-1.4-0.7-2.2-1.1c-0.6-0.3-1.3-0.7-2-1 c-0.5-0.2-0.9-0.4-1.3-0.6c-2.1-1-4.2-2-6.4-2.9c-0.4-0.2-0.8-0.3-1.2-0.5c-0.8-0.3-1.6-0.7-2.4-1c-1.6-0.7-3.3-1.4-5.1-2 c-0.9-0.4-1.8-0.7-2.7-1c-1-0.3-1.9-0.6-2.8-0.9c-0.5-0.2-0.9-0.3-1.4-0.5c-1.3-0.4-2.5-0.8-3.8-1.2c-1.1-0.3-2.3-0.7-3.4-1 c-5.7-1.6-11.9-3.2-18.5-4.6c-4.7-1-9.4-1.9-14.2-2.5c-0.8-0.1-1.7-0.2-2.6-0.3c-1-0.1-1.9-0.2-2.9-0.3c-0.2,0-0.3,0-0.5,0 c-0.8,0-1.6-0.1-2.4-0.2c-1.5-0.2-3.1-0.3-4.7-0.4c-0.8,0-1.6-0.1-2.4-0.1c-1.3-0.1-2.5-0.2-3.8-0.2c-1-0.1-1.9-0.1-2.8-0.1 c-6.2-0.1-12.5,0.1-18.7,0.6C95.5,209.3,85.6,208.6,77.6,206.5z" fill="currentColor"></path>
            <circle cx="293.6" cy="59.2" r="10" fill="currentColor"></circle>
            <circle cx="324.2" cy="59.2" r="10" fill="currentColor"></circle>
            <path d="M378.4 170.3c4.1 0 7.5-3.4 7.5-7.5v-86c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v86C370.9 167 374.2 170.3 378.4 170.3zM139.5 76.8v86c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-86c0-4.1-3.4-7.5-7.5-7.5S139.5 72.6 139.5 76.8zM191.3 175.1c5.6 3.1 12.9 4.5 20.5 4.5 13.5 0 28-4.5 35.9-12.5 3.9-4 6.9-9 8.8-14.8 9.2 5.6 19.6 8.6 30 8.6 26.9 0 52.8-16.5 52.5-45.5-.1-13.2-5.6-25.3-14.2-31.7-4.9-3.6-13.3-7.2-24.9-3.7-15.7 4.7-21.9 19.9-18.5 31.2 2.1 7.1 6.9 12.5 14 15.7 8.4 3.8 18.3 3.5 26.1 1.4-3.8 8.3-12.7 15.6-31.4 17.4-10.4 1-21.4-2.4-30.1-9.3-.3-.3-.6-.5-1-.6 0-8.2-1.6-16-3.2-23.6L253.1 99c-.8-4.1-4.8-6.7-8.8-5.9-4.1.8-6.7 4.8-5.9 8.8l2.7 13.3c1.6 7.7 3.2 15.7 2.8 23.2-.4 7.6-2.8 14-6.8 18.1-7.7 7.8-28.9 10.8-38.5 5.4-4.4-2.4-7.2-6.6-7.6-11.2-.4-4.3 1.4-8.3 5-11.2 3.2-2.6 3.7-7.3 1.1-10.5-2.6-3.2-7.3-3.7-10.5-1.1-7.5 6.1-11.3 14.9-10.4 24.2C176.8 161.7 182.6 170.3 191.3 175.1zM321.4 112.5c-5.2 2.5-13.7 3.5-19.9.7-3-1.4-4.9-3.4-5.7-6.2-1.6-5.5 3-11 8.4-12.6 1.8-.5 3.4-.8 4.9-.8 2.5 0 4.8.7 6.8 2.2 4.1 3 7 9.1 7.9 16C323 112 322.2 112.2 321.4 112.5zM126.8 55.1c1.2 2.8 4 4.5 6.9 4.5 1 0 2-.2 3-.6 12.8-5.5 26.6-12.7 27.2-13 3.2-1.6 4.7-5.3 3.8-8.7-1-3.4-4.2-5.7-7.8-5.4-10 .7-16-1.1-17.7-5.5-1.3-3.3 0-5.5.8-6.5 1.2-1.4 3.6-2.7 6.4-2 4 .9 8.1-1.6 9-5.6s-1.6-8.1-5.6-9c-7.8-1.8-15.9.8-21.1 6.8-5.2 6-6.5 14.1-3.5 21.8 1.4 3.7 4.1 7.7 8.8 10.7-2.1 1-4.2 1.9-6.3 2.8C126.9 46.9 125.1 51.3 126.8 55.1z" fill="currentColor"></path>
        </svg>
    );
}

export const Cog = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={svgStyle}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M26 16.22v-2.44l-2.72-.91a9 9 0 0 0-.92-2.22l1.28-2.56-1.73-1.73-2.56 1.28a9 9 0 0 0-2.22-.92L16.22 4h-2.44l-.91 2.72a9 9 0 0 0-2.22.92L8.09 6.36 6.36 8.09l1.28 2.56a9 9 0 0 0-.92 2.22L4 13.78v2.44l2.72.91a9 9 0 0 0 .92 2.22l-1.28 2.56 1.73 1.73 2.56-1.28a9 9 0 0 0 2.22.92l.91 2.72h2.44l.91-2.72a9 9 0 0 0 2.22-.92l2.56 1.28 1.73-1.73-1.28-2.56a9 9 0 0 0 .92-2.22Z"></path>
            <circle cx="15" cy="15" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}></circle>
        </svg>
    )
}

export const PowerOff = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={svgStyle}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 5v10M10 8.5a9 9 0 1 0 10 0"></path>
        </svg>
    )
}

export const Book = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0c-37.264 5.602-99.104 8.26-148.488-22.198" transform="translate(431.97 386.62)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c-37.264 5.602-99.104 8.26-148.488-22.198" transform="translate(431.97 324.47)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c-37.264 5.602-99.104 8.26-148.488-22.198" transform="translate(431.97 262.32)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c-37.264 5.602-99.104 8.26-148.488-22.198" transform="translate(431.97 200.17)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c37.264 5.602 99.104 8.26 148.489-22.198" transform="translate(80.03 386.62)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c37.264 5.602 99.104 8.26 148.489-22.198" transform="translate(80.03 324.47)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c37.264 5.602 99.104 8.26 148.489-22.198" transform="translate(80.03 262.32)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c37.264 5.602 99.104 8.26 148.489-22.198" transform="translate(80.03 200.17)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v179.813c0 5.284-3.625 9.882-8.769 11.092-30.702 7.218-134.926 25.665-198.386-37.795-63.461 63.46-167.685 45.013-198.387 37.795-5.144-1.21-8.769-5.808-8.769-11.092v-52.745" transform="translate(463.155 247.505)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-195.745c0-7.268 6.704-12.669 13.809-11.141 33.394 7.182 120.223 19.601 180.719-27.748 7.395-5.788 17.859-5.788 25.254 0 60.497 47.349 147.325 34.93 180.719 27.748 7.106-1.528 13.81 3.873 13.81 11.141v68.682" transform="translate(48.845 339.64)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v299.949" transform="translate(256 100.666)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0c-14.991-2.186-26.837-4.805-33.938-6.558a9.74 9.74 0 0 1-7.407-9.463v-305.015c0-6.263 5.815-10.907 11.918-9.503 33.605 7.732 131.506 24.445 205.86-21.434a29.924 29.924 0 0 1 15.714-4.444h30.017a29.926 29.926 0 0 1 15.714 4.444c74.353 45.879 172.255 29.166 205.859 21.434 6.103-1.404 11.918 3.24 11.918 9.503v305.015a9.74 9.74 0 0 1-7.407 9.463C441.147-4.805 429.301-2.186 414.311 0" transform="translate(48.845 421.868)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Heart = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0s28.8 105 120 105c71.04 0 121-60.198 121-131.515C241-125.146 142.335-190.457 0-315-142.335-190.457-241-125.146-241-26.515-241 44.802-191.04 105-120 105-28.8 105 0 0 0 0Z" transform="translate(256.125 361)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const HeartFill = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0s28.8 105 120 105c71.04 0 121-60.198 121-131.515C241-125.146 142.335-190.457 0-315-142.335-190.457-241-125.146-241-26.515-241 44.802-191.04 105-120 105-28.8 105 0 0 0 0Z" transform="translate(256.125 361)" fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Search = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.142 512.142" className={svgStyle}>
            <g>
                <circle cx="292.142" cy="220" r="200" fill="none" stroke="currentColor" strokeWidth={strokeWidth}></circle>
                <path d="m14.142 498 136.579-136.579" fill="none" stroke="currentColor" strokeWidth={strokeWidth}></path>
            </g>
        </svg>
    )
}

export const Headphone = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0c-24.853 0-45 20.147-45 45v150c0 24.853 20.147 45 45 45s45-20.147 45-45V45C45 20.147 24.853 0 0 0Z" transform="translate(392 46)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0c-24.853 0-45 20.147-45 45v150c0 24.853 20.147 45 45 45s45-20.147 45-45V45C45 20.147 24.853 0 0 0Z" transform="translate(120 46)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0c-33.137 0-60 26.863-60 60s26.863 60 60 60z" transform="translate(75 106)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0v120c33.137 0 60-26.863 60-60S33.137 0 0 0Z" transform="translate(437 106)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0v60c0 132.548 108.452 240 241 240S482 192.548 482 60V0" transform="translate(15 166)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Bell = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0v-40" transform="translate(256 456)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-40c0-22.091-17.909-40-40-40s-40 17.909-40 40V0" transform="translate(296 136)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v0c22.091 0 40 17.909 40 40v120c0 66.274 53.726 120 120 120s120-53.726 120-120V40c0-22.091 17.909-40 40-40M0 0h320" transform="translate(96 136)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Donate = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M275.887 76.908c-.096-.078-.084-.071-.217-.175-1.692-1.329-13.124-9.655-28.548-5.009-16.019 4.826-19.997 26.744-9.111 35.282 6.251 4.903 15.656 8.933 28.331 13.414 28.369 10.028 17.882 50.036-10.975 50.228-11.262.075-16.527-.64-26.419-7.111M256 50.163v20.082M256 170.653v20.082" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="256" cy="120.449" r="110.449" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></circle>
                <path d="M348.576 180.694h133.342v100.408H30.082V180.694h133.342M421.674 502H90.326c-16.636 0-30.122-13.486-30.122-30.122V281.102h391.592v190.776c0 16.636-13.486 30.122-30.122 30.122zM120.449 230.898h271.102" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M110.408 331.306h291.184v120.49H110.408z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const Store = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0v-201.513c0-22.091-18.075-40.167-40.166-40.167H-361.5c-22.092 0-40.166 18.076-40.166 40.167V-.68" transform="translate(456.834 272.746)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M215.834 31.066h-80.333v120.5h80.333zM376.501 192.413h-80.333V111.4h80.333z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-48.199C0-74.82 21.58-96.4 48.199-96.4 74.82-96.4 96.4-74.82 96.4-48.199V0" transform="translate(111.4 368.467)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-48.199C0-74.82 21.58-96.4 48.199-96.4s48.199 21.58 48.199 48.201V0" transform="translate(207.8 368.467)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-48.199C0-74.82 21.58-96.4 48.201-96.4 74.82-96.4 96.4-74.82 96.4-48.199V0" transform="translate(304.2 368.467)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-48.199C0-74.82 21.58-96.4 48.199-96.4 74.82-96.4 96.4-74.82 96.4-48.199V0L75.301 73.844c-6.071 21.244-29.11 38.623-51.201 38.623h-337.399c-22.092 0-45.131-17.379-51.201-38.623L-385.6 0v-48.199c0-26.621 21.58-48.201 48.2-48.201 26.621 0 48.201 21.58 48.201 48.201V0" transform="translate(400.6 368.467)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0h472.359" transform="translate(19.82 368.467)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Grid = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(0 439.426)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(195.426 439.426)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(395.426 439.426)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.573 57.574 57.573 31.797 0 57.573-25.776 57.573-57.573S89.371-57.574 57.574-57.574 0-31.797 0 0" transform="translate(0 256)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.573 57.574 57.573 31.797 0 57.573-25.776 57.573-57.573S89.371-57.574 57.574-57.574 0-31.797 0 0" transform="translate(195.426 256)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.573 57.574 57.573 31.797 0 57.573-25.776 57.573-57.573S89.371-57.574 57.574-57.574 0-31.797 0 0" transform="translate(395.426 256)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(0 72.573)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(195.426 72.573)" fill="currentColor"></path>
                <path d="M0 0c0 31.797 25.777 57.574 57.574 57.574 31.797 0 57.573-25.777 57.573-57.574 0-31.797-25.776-57.573-57.573-57.573S0-31.797 0 0" transform="translate(395.426 72.573)" fill="currentColor"></path>
            </g>
        </svg>
    )
}

export const List = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M492 236H20v-80h472v80zm0 80H20v120h472V316zM0 76h512" fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth}></path>
            </g>
        </svg>
    )
}

export const List2 = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M0 0c0 17.738-14.38 32.117-32.117 32.117H-321.35c-17.737 0-32.117-14.379-32.117-32.117v-.032c0-17.738 14.38-32.117 32.117-32.117h289.233C-14.38-32.149 0-17.77 0-.032Z" transform="translate(497 256.016)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0 0c0 17.737-14.38 32.117-32.117 32.117H-321.35c-17.737 0-32.117-14.38-32.117-32.117v-.032c0-17.738 14.38-32.117 32.117-32.117h289.233C-14.38-32.149 0-17.77 0-.032Z" transform="translate(497 400.616)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0 0c0 17.738-14.38 32.117-32.117 32.117H-321.35c-17.737 0-32.117-14.379-32.117-32.117v-.032c0-17.738 14.38-32.117 32.117-32.117h289.233C-14.38-32.149 0-17.77 0-.032Z" transform="translate(497 111.416)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0 0c17.737 0 32.133-14.396 32.133-32.133 0-17.738-14.396-32.134-32.133-32.134-17.738 0-32.134 14.396-32.134 32.134C-32.134-14.396-17.738 0 0 0Z" transform="translate(47.134 432.733)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0 0c17.737 0 32.133-14.396 32.133-32.133 0-17.738-14.396-32.134-32.133-32.134-17.738 0-32.134 14.396-32.134 32.134C-32.134-14.396-17.738 0 0 0Z" transform="translate(47.134 288.133)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0 0c17.737 0 32.133-14.396 32.133-32.133 0-17.738-14.396-32.134-32.133-32.134-17.738 0-32.134 14.396-32.134 32.134C-32.134-14.396-17.738 0 0 0Z" transform="translate(47.134 143.533)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const Up = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={svgStyle}>
            <g>
                <path fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} d="M19.707 10.293a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z"></path>
            </g>
        </svg>
    )
}

export const Down = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={svgStyle}>
            <g>
                <path fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} d="M13 4a1 1 0 1 0-2 0v13.586l-5.293-5.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414L13 17.586z"></path>
            </g>
        </svg>
    )
}

export const Right = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={svgStyle}>
            <g>
                <path fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} d="M13.707 19.707a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414z"></path>
            </g>
        </svg>
    )
}

export const Share = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g>
                <path d="M0 0c0-41.421-33.579-75-75-75s-75 33.579-75 75 33.579 75 75 75S0 41.421 0 0Z" transform="translate(466 422)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0c0-49.706-40.294-90-90-90s-90 40.294-90 90 40.294 90 90 90S0 49.706 0 0Z" transform="translate(226 256)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="M0 0c0-41.421-33.579-75-75-75s-75 33.579-75 75 33.579 75 75 75S0 41.421 0 0Z" transform="translate(466 90)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="m0 0-118.622-73.491" transform="translate(331.428 376.428)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
                <path d="m0 0 118.622-73.491" transform="translate(212.806 209.063)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Forward = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M289.132 254.178v106.186L497 192.598 289.132 21.204v107.914h0C137.733 129.119 15 251.733 15 402.985v87.81h0c15.033-133.954 127.917-235.542 262.838-236.534l11.294-.083z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const Previous = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 244" className={svgStyle} fill="none">
            <path d="M292.819 228.372C292.819 240.101 279.962 247.293 269.968 241.153L96.7994 134.782C87.2675 128.927 87.2675 115.075 96.7994 109.22L269.968 2.84814C279.962 -3.29184 292.819 3.89913 292.819 15.6291V228.372Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 173.857V224C1 232.26 10.1785 243 21.5 243C32.8215 243 42 232.26 42 224V19C42 10.7414 32.8215 1 21.5 1C10.1785 1 1 10.7414 1 19V174.338" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Forward2 = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 244" className={svgStyle} fill="none">
            <path d="M0.999966 15.629C0.999965 3.90001 13.8569 -3.29197 23.8509 2.84801L197.019 109.22C206.551 115.075 206.551 128.927 197.019 134.782L23.8509 241.153C13.8569 247.293 0.999986 240.102 0.999985 228.372L0.999966 15.629Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M292.819 70.1448L292.819 20.0014C292.819 11.7418 283.64 1.0014 272.319 1.00141C260.997 1.00141 251.819 11.7418 251.819 20.0014L251.819 225.001C251.819 233.26 260.997 243.001 272.319 243.001C283.64 243.001 292.819 233.26 292.819 225.001L292.819 69.6629" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const Play = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M256 11C120.69 11 11 120.69 11 256v0c0 135.31 109.69 245 245 245s245-109.69 245-245v0c0-135.31-109.69-245-245-245z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="m196.826 350.47 150.463-93.007-150.463-93.857z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const PlayFill = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm88.48 269.57-128 80a16.008 16.008 0 0 1-16.238.422A15.994 15.994 0 0 1 192 336V176c0-5.82 3.156-11.172 8.242-13.992a15.957 15.957 0 0 1 16.238.422l128 80c4.676 2.93 7.52 8.055 7.52 13.57s-2.844 10.641-7.52 13.57z" fill="currentColor"></path>
            </g>
        </svg>
    )
}

export const Pause = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M0 0c0 135.862-110.138 246-246 246S-492 135.862-492 0s110.138-246 246-246S0-135.862 0 0z" transform="translate(502 256)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v0c-13.255 0-24 10.745-24 24v111.677c0 13.255 10.745 24 24 24v0c13.255 0 24-10.745 24-24V24C24 10.745 13.255 0 0 0Z" transform="translate(200 176.162)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v0c-13.255 0-24 10.745-24 24v111.677c0 13.255 10.745 24 24 24v0c13.255 0 24-10.745 24-24V24C24 10.745 13.255 0 0 0Z" transform="translate(312 176.162)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const PauseFill = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6" className={svgStyle}>
            <g>
                <path d="M204.8 0C91.648 0 0 91.648 0 204.8s91.648 204.8 204.8 204.8 204.8-91.648 204.8-204.8S317.952 0 204.8 0zm-22.528 256c0 12.8-10.24 22.528-22.528 22.528-12.8 0-22.528-10.24-22.528-22.528V153.6c-.512-12.288 9.728-22.528 22.016-22.528 12.8 0 23.04 10.24 23.04 22.528V256zm90.624 0c0 12.8-10.24 22.528-22.528 22.528-12.8 0-22.528-10.24-22.528-22.528V153.6c-.512-12.288 9.728-22.528 22.016-22.528 12.8 0 23.04 10.24 23.04 22.528V256z" fill="currentColor"></path>
            </g>
        </svg>
    )
}

export const Loop = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M456 91.992H96c-22.091 0-40 18.131-40 40.496v186.281" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M56 420.008h360c22.091 0 40-18.131 40-40.496V193.231" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="m376 11 80 80.992-80 80.992" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="m136 339.017-80 80.991L136 501" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const Copy = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="m162.313 102.153 280-80a40.042 40.042 0 0 1 11.011-1.535c22.091 0 40 17.909 40 40 0 3.819-.535 7.513-1.535 11.011l-80 280c-4.782 16.737-20.193 28.989-38.465 28.989-15.872 0-29.584-9.244-36.047-22.641l-49.881-103.396a60.242 60.242 0 0 0-28.033-28.033l-103.396-49.882c-13.398-6.463-22.641-20.176-22.641-36.047-.002-18.273 12.25-33.683 28.987-38.466zM183.575 479.712l-4.58-4.581c23.431 23.431 61.421 23.431 84.853 0s23.432-61.421 0-84.853l-56.569-56.569c-18.473-18.473-45.994-22.382-68.297-11.728" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="m117.846 244.276 4.58 4.58c-23.431-23.431-61.421-23.431-84.853 0s-23.432 61.421 0 84.853l56.569 56.569c18.473 18.473 45.994 22.382 68.297 11.728" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export const Mecca = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.667 682.667" className={svgStyle}>
            <g>
                <path d="m0 0-248.5 42.427v412.146L0 497Z" transform="matrix(1.33333 0 0 -1.33333 341.333 672.667)" fill="#595959"></path>
                <path d="m0 0 248.5-42.427V60.61L0 82.833Z" transform="matrix(1.33333 0 0 -1.33333 10 616.098)" fill="#bebebe"></path>
                <path d="M0 0v-44.447L248.5-6.061v44.447Z" transform="matrix(1.33333 0 0 -1.33333 10 115.057)" fill="#fcee56"></path>
                <path d="m0 0 248.5 42.427v412.146L0 497Z" transform="matrix(1.33333 0 0 -1.33333 341.333 672.667)" fill="#434343"></path>
                <path d="m0 0 111.118 9.938v186.138L0 211.047Z" transform="matrix(1.33333 0 0 -1.33333 387.656 531.142)" fill="#fbd307"></path>
                <path d="m0 0-248.5-42.427V60.61L0 82.833Z" transform="matrix(1.33333 0 0 -1.33333 672.667 616.098)" fill="#9b9b9b"></path>
                <path d="M0 0v-44.447L-248.5-6.061v44.447Z" transform="matrix(1.33333 0 0 -1.33333 672.667 115.057)" fill="#fbd307"></path>
                <path d="M0 0v-30.305L-248.5 8.081v30.305z" transform="matrix(1.33333 0 0 -1.33333 672.667 209.339)" fill="#fbd307"></path>
                <path d="M0 0v-30.305L248.5 8.081v30.305z" transform="matrix(1.33333 0 0 -1.33333 10 209.339)" fill="#fcee56"></path>
                <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                    <path d="m0 0 248.5 38.386" transform="translate(7.5 381.26)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0-248.5-38.386" transform="translate(256 464.093)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                </g>
                <path d="M0 0v66.862l-111.118 14.972v-211.047" transform="matrix(1.33333 0 0 -1.33333 535.814 358.857)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v84.16" transform="matrix(1.33333 0 0 -1.33333 535.814 517.892)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="m0 0 248.5 38.386" transform="translate(7.5 324.69)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0-248.5-38.386" transform="translate(256 393.382)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0-248.5 38.386" transform="translate(504.5 381.26)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0 248.5-38.386" transform="translate(256 464.093)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0-248.5 38.386" transform="translate(504.5 324.69)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0 248.5-38.386" transform="translate(256 393.382)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="M0 0v219.216l248.5 42.427v-497L0-192.93v157.814" transform="translate(7.5 242.857)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0 248.5 42.427v157.814" transform="translate(256 7.5)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="M0 0v219.216l-248.5 42.427" transform="translate(504.5 242.857)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0 248.5 22.224" transform="translate(256 110.537)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0 248.5 33.335" transform="translate(256 58.008)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                </g>
                <path d="M0 0v-41.417" transform="matrix(1.33333 0 0 -1.33333 625.526 511.04)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-45.457" transform="matrix(1.33333 0 0 -1.33333 539.325 517.775)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-42.427" transform="matrix(1.33333 0 0 -1.33333 585.12 574.344)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0v-44.447" transform="translate(374.19 73.16)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="M0 0v-47.478" transform="translate(306.508 64.07)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                </g>
                <path d="M0 0v-46.468" transform="matrix(1.33333 0 0 -1.33333 453.125 527.203)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="m0 0-248.5 22.224" transform="translate(256 110.537)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="m0 0-248.5 33.335" transform="translate(256 58.008)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                </g>
                <path d="M0 0v-41.417" transform="matrix(1.33333 0 0 -1.33333 57.14 511.04)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-45.457" transform="matrix(1.33333 0 0 -1.33333 143.341 517.775)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <path d="M0 0v-42.427" transform="matrix(1.33333 0 0 -1.33333 97.547 574.344)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0v-44.447" transform="translate(137.811 73.16)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                    <path d="M0 0v-47.478" transform="translate(205.492 64.07)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
                </g>
                <path d="M0 0v-46.468" transform="matrix(1.33333 0 0 -1.33333 229.542 527.203)" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"></path>
            </g>
        </svg>
    )
}

export const Madina = (props) => {
    const svgStyle = props.svgStyle;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={svgStyle}>
            <g>
                <path d="M58.44 63.02h-2.29v-3.76a.49.49 0 0 0-.24-.42l-1.31-.8v-3.71a.5.5 0 0 0-.14-.35l-.88-.9-.03-3.05c.03-10.79-9.3-15.89-13.29-18.07-.64-.35-1.31-.71-1.44-.85-.11-.13-.23-.33-.36-.56-.25-.44-.57-.97-1.12-1.44v-4.39a.49.49 0 0 0-.98 0v4.38c-.54.48-.87 1.01-1.12 1.45-.13.23-.25.43-.36.56-.13.14-.8.5-1.44.85-3.98 2.18-13.32 7.28-13.29 18.07l-.03 3.05-.88.9a.5.5 0 0 0-.14.35v3.71l-.57.36V44.88l1.33-2.19c0-.01 0-.02.01-.03.03-.07.06-.14.06-.23v-3.59a.49.49 0 0 0-.98 0v.05h-1.56V28.86l1.06-1.65c.03-.05.06-.1.07-.16v-.07c0-.01.01-.02.01-.03V25c0-.24-.16-.44-.39-.48-.41-.1-.83-.17-1.24-.24v-6.96l.91-1.41v-.01c.03-.04.05-.1.07-.16v-.07c0-.01.01-.02.01-.03v-1.69c0-.23-.16-.43-.39-.48-.47-.11-.93-.19-1.4-.26V9.53c0-.77-.31-1.51-.86-2.08-.13-.13-.27-.23-.41-.33v-.98c0-.74-.5-1.37-1.17-1.58V.49a.49.49 0 0 0-.49-.49c-.28 0-.5.22-.5.49v4.07c-.68.22-1.17.84-1.17 1.58v.98a2.93 2.93 0 0 0-1.27 2.41v3.69c-.47.06-.94.14-1.4.25-.23.05-.39.25-.39.48v1.69c0 .01.01.02.01.03v.07c.01.05.04.09.06.14.01.01 0 .02.01.03l.91 1.41v6.96c-.41.07-.83.14-1.24.24-.23.04-.39.24-.39.48v1.95c0 .01.01.02.01.03v.07c.01.05.04.09.06.13 0 .01 0 .02.01.03l1.06 1.65v10.03H7.38v-.05a.49.49 0 0 0-.98 0v3.59c0 .09.03.16.06.23.01.01.01.02.01.03l1.33 2.19v18.14H5.56c-.28 0-.5.22-.5.49s.22.49.5.49h52.88c.28 0 .5-.22.5-.49s-.22-.49-.5-.49zM36.09 31.05c.2-.35.42-.73.76-1.07.34.34.56.72.76 1.07.04.06.07.12.11.18-.57.08-1.15.08-1.73-.02.03-.05.07-.11.1-.16zM21.14 50.03c-.03-10.2 8.94-15.11 12.77-17.2.64-.35 1.05-.58 1.33-.77.56.14 1.11.22 1.65.22s1.06-.08 1.58-.21c.29.19.69.42 1.32.76 3.83 2.09 12.8 7 12.78 17.21l.02 2.75H21.11l.03-2.76zm-1.06 4.5.74-.76h32.06l.74.76v3.29h-3.73v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.69v-3.29zm28.83 1.68v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93zm-5.84 0v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93zm-5.85 0v1.61h-1.78v-1.61c0-.51.4-.93.89-.93s.89.42.89.93zm-5.84 0v1.61H29.6v-1.61c0-.51.4-.93.89-.93s.89.42.89.93zm-5.83 0v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93zM12.48 6.14c0-.37.31-.67.69-.67.37 0 .67.3.67.67v.54c-.22-.05-.44-.08-.67-.08-.24 0-.47.03-.69.09v-.55zm-1.27 3.39a1.961 1.961 0 0 1 3.33-1.39c.37.38.57.87.57 1.39v3.56c-1.3-.12-2.6-.12-3.9 0V9.53zm-1.78 4.82c2.48-.5 4.99-.5 7.47 0v.69a20.39 20.39 0 0 0-7.47 0v-.69zm.74 2.29L9.75 16c2.27-.41 4.56-.41 6.83 0l-.42.64c-1.99-.25-4-.25-5.99 0zm5.74.98v6.52c-1.83-.22-3.66-.22-5.49 0v-6.52c1.82-.22 3.67-.22 5.49 0zm-7.13 8.73v-.95c2.91-.59 5.86-.59 8.77 0v.95a23.1 23.1 0 0 0-8.77 0zm.9 1.83-.58-.89c2.7-.5 5.43-.5 8.13 0l-.58.89c-2.31-.29-4.65-.29-6.97 0zm6.72.98v9.73H9.93v-9.73c2.15-.27 4.32-.27 6.47 0zM7.38 39.88h11.57v2.06H7.38v-2.06zm10.17 23.14H8.78v-2.51l1.14-.68 1.37.82c.16.1.35.1.51 0l1.37-.82 1.37.82c.16.1.35.1.51 0l1.37-.82 1.13.68v2.51zm0-3.66-.88-.53a.515.515 0 0 0-.51 0l-1.37.83-1.36-.83a.515.515 0 0 0-.51 0l-1.37.83-1.38-.83a.497.497 0 0 0-.5 0l-.89.53V57.5l1.14-.68 1.37.83c.16.09.35.09.51 0l1.37-.83 1.37.83c.16.09.35.09.51 0l1.37-.83 1.13.68v1.86zm0-3.01-.88-.52a.47.47 0 0 0-.51 0l-1.37.82-1.36-.82a.47.47 0 0 0-.51 0l-1.37.82-1.38-.82c-.15-.1-.35-.1-.5 0l-.89.53V54.5l1.14-.68 1.37.82c.16.09.35.09.51 0l1.37-.82 1.37.82c.16.09.35.09.51 0l1.37-.82 1.13.68v1.85zm0-3-.88-.53a.515.515 0 0 0-.51 0l-1.37.82-1.36-.82a.515.515 0 0 0-.51 0l-1.37.82-1.38-.82a.497.497 0 0 0-.5 0l-.89.53v-1.86l1.14-.68 1.37.82c.16.1.35.1.51 0l1.37-.82 1.37.82c.16.1.35.1.51 0l1.37-.82 1.13.68v1.86zm0-3.01-.88-.53a.515.515 0 0 0-.51 0l-1.37.83-1.36-.83a.515.515 0 0 0-.51 0l-1.37.83-1.38-.83a.497.497 0 0 0-.5 0l-.89.53v-1.86l1.14-.68 1.37.83c.16.09.35.09.51 0l1.37-.83 1.37.83c.16.09.35.09.51 0l1.37-.83 1.13.68v1.86zm0-3.01-.88-.52a.47.47 0 0 0-.51 0l-1.37.82-1.36-.82a.47.47 0 0 0-.51 0l-1.37.82-1.38-.82c-.15-.1-.35-.1-.5 0l-.89.53v-2.1h8.77v2.09zm-8.98-3.07-.81-1.34h10.81l-.81 1.34H8.57zm14.5 18.76h-1.81v-1.47c0-.58.41-1.05.91-1.05s.9.47.9 1.05v1.47zm5.9 0h-1.81v-1.47c0-.58.4-1.05.9-1.05s.91.47.91 1.05v1.47zm5.9 0h-1.82v-1.47c0-.58.41-1.05.91-1.05s.91.47.91 1.05v1.47zm5.9 0h-1.82v-1.47c0-.58.41-1.05.91-1.05s.91.47.91 1.05v1.47zm5.89 0h-1.81v-1.47c0-.58.41-1.05.91-1.05s.9.47.9 1.05v1.47zm5.9 0h-1.81v-1.47c0-.58.4-1.05.9-1.05s.91.47.91 1.05v1.47zm2.61 0h-1.62v-1.47c0-1.12-.85-2.04-1.9-2.04-1.04 0-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.89-2.04-1.05 0-1.89.92-1.89 2.04v1.47h-2.12v-1.47c0-1.12-.85-2.04-1.89-2.04s-1.89.92-1.89 2.04v1.47h-2.12v-1.47c0-1.12-.85-2.04-1.89-2.04s-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.9-2.04-1.04 0-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.89-2.04-1.05 0-1.9.92-1.9 2.04v1.47h-1.74v-3.46l1.2-.75h34.24l1.2.73v3.48z" fill="#000000"></path>
                <path fill="#d6d6d6" d="M17.55 60.51v2.51H8.78v-2.51l1.14-.68 1.37.82c.16.1.35.1.51 0l1.37-.82 1.37.82c.16.1.35.1.51 0l1.37-.82 1.13.68z"></path>
                <path fill="#bfbfbd" d="M17.55 57.5v1.86l-.88-.53a.515.515 0 0 0-.51 0l-1.37.83-1.36-.83a.515.515 0 0 0-.51 0l-1.37.83-1.38-.83a.497.497 0 0 0-.5 0l-.89.53V57.5l1.14-.68 1.37.83c.16.09.35.09.51 0l1.37-.83 1.37.83c.16.09.35.09.51 0l1.37-.83 1.13.68zm0-3v1.85l-.88-.52a.47.47 0 0 0-.51 0l-1.37.82-1.36-.82a.47.47 0 0 0-.51 0l-1.37.82-1.38-.82c-.15-.1-.35-.1-.5 0l-.89.53V54.5l1.14-.68 1.37.82c.16.09.35.09.51 0l1.37-.82 1.37.82c.16.09.35.09.51 0l1.37-.82 1.13.68zm0-3.01v1.86l-.88-.53a.515.515 0 0 0-.51 0l-1.37.82-1.36-.82a.515.515 0 0 0-.51 0l-1.37.82-1.38-.82a.497.497 0 0 0-.5 0l-.89.53v-1.86l1.14-.68 1.37.82c.16.1.35.1.51 0l1.37-.82 1.37.82c.16.1.35.1.51 0l1.37-.82 1.13.68zm0-3.01v1.86l-.88-.53a.515.515 0 0 0-.51 0l-1.37.83-1.36-.83a.515.515 0 0 0-.51 0l-1.37.83-1.38-.83a.497.497 0 0 0-.5 0l-.89.53v-1.86l1.14-.68 1.37.83c.16.09.35.09.51 0l1.37-.83 1.37.83c.16.09.35.09.51 0l1.37-.83 1.13.68z"></path>
                <path fill="#d6d6d6" d="M17.55 45.24v2.09l-.88-.52a.47.47 0 0 0-.51 0l-1.37.82-1.36-.82a.47.47 0 0 0-.51 0l-1.37.82-1.38-.82c-.15-.1-.35-.1-.5 0l-.89.53v-2.1h8.77zM15.11 9.53v3.56c-1.3-.12-2.6-.12-3.9 0V9.53a1.961 1.961 0 0 1 3.33-1.39c.37.38.57.87.57 1.39zm.8 8.09v6.52c-1.83-.22-3.66-.22-5.49 0v-6.52c1.82-.22 3.67-.22 5.49 0zm.49 11.54v9.73H9.93v-9.73c2.15-.27 4.32-.27 6.47 0z"></path>
                <path fill="#ebebeb" d="M15.11 9.53v3.56c-.24-.02-.49-.04-.73-.05V9.53c0-.52-.12-1.01-.35-1.39-.24-.36-.54-.56-.86-.56.51 0 1 .2 1.37.56.37.38.57.87.57 1.39z"></path>
                <path fill="#bfbfbd" d="M13.04 7.59c-.62.1-1.1.94-1.1 1.94v3.51c-.24.01-.49.03-.73.05V9.53c0-1.03.81-1.88 1.83-1.94zm-1.59 9.93v6.53c-.34.02-.69.05-1.03.09v-6.52c.34-.04.69-.07 1.03-.1z"></path>
                <path fill="#ebebeb" d="M15.91 17.62v6.52c-.34-.04-.69-.07-1.03-.1v-6.52c.34.03.69.06 1.03.1zm.49 11.54v9.73h-1.21v-9.85c.4.03.81.07 1.21.12z"></path>
                <path fill="#bfbfbd" d="M11.14 29.04v9.85H9.93v-9.73c.4-.05.81-.09 1.21-.12z"></path>
                <path fill="#b5b5b5" d="m18.57 42.92-.81 1.34H8.57l-.81-1.34z"></path>
                <path fill="#bfbfbd" d="M17.55 25.4v.95a23.1 23.1 0 0 0-8.77 0v-.95c2.91-.59 5.86-.59 8.77 0z"></path>
                <path fill="#b5b5b5" d="m17.23 27.29-.58.89c-2.31-.29-4.65-.29-6.97 0l-.58-.89c2.7-.5 5.43-.5 8.13 0zM16.58 16l-.42.64c-1.99-.25-4-.25-5.99 0L9.75 16c2.27-.41 4.56-.41 6.83 0z"></path>
                <path fill="#f4cf73" d="M13.84 6.14v.54c-.22-.05-.44-.08-.67-.08-.24 0-.47.03-.69.09v-.55c0-.37.31-.67.69-.67.37 0 .67.3.67.67z"></path>
                <path fill="#bfbfbd" d="M16.9 14.35v.69a20.39 20.39 0 0 0-7.47 0v-.69c2.48-.5 4.99-.5 7.47 0zM7.38 39.88h11.57v2.06H7.38z"></path>
                <path fill="#f4cf73" d="M37.72 31.23c-.57.08-1.15.08-1.73-.02.03-.05.07-.11.1-.16.2-.35.42-.73.76-1.07.34.34.56.72.76 1.07.04.06.07.12.11.18z"></path>
                <path fill="#328c6d" d="M52.56 61.55v1.47h-1.81v-1.47c0-.58.4-1.05.9-1.05s.91.47.91 1.05zm-5.9 0v1.47h-1.81v-1.47c0-.58.41-1.05.91-1.05s.9.47.9 1.05zm-5.89 0v1.47h-1.82v-1.47c0-.58.41-1.05.91-1.05s.91.47.91 1.05zm-5.9 0v1.47h-1.82v-1.47c0-.58.41-1.05.91-1.05s.91.47.91 1.05zm-5.9 0v1.47h-1.81v-1.47c0-.58.4-1.05.9-1.05s.91.47.91 1.05zm-5.9 0v1.47h-1.81v-1.47c0-.58.41-1.05.91-1.05s.9.47.9 1.05zm2.48-5.34v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93zm5.83 0v1.61H29.6v-1.61c0-.51.4-.93.89-.93s.89.42.89.93zm5.84 0v1.61h-1.78v-1.61c0-.51.4-.93.89-.93s.89.42.89.93zm5.85 0v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93zm5.84 0v1.61h-1.79v-1.61c0-.51.4-.93.89-.93s.9.42.9.93z"></path>
                <path fill="#47b28e" d="M55.17 59.54v3.48h-1.62v-1.47c0-1.12-.85-2.04-1.9-2.04-1.04 0-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.89-2.04-1.05 0-1.89.92-1.89 2.04v1.47h-2.12v-1.47c0-1.12-.85-2.04-1.89-2.04s-1.89.92-1.89 2.04v1.47h-2.12v-1.47c0-1.12-.85-2.04-1.89-2.04s-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.9-2.04-1.04 0-1.89.92-1.89 2.04v1.47h-2.11v-1.47c0-1.12-.85-2.04-1.89-2.04-1.05 0-1.9.92-1.9 2.04v1.47h-1.74v-3.46l1.2-.75h34.24l1.2.73zm-1.55-5.01v3.29h-3.73v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-1.03 0-1.88.86-1.88 1.91v1.61h-2.69v-3.29l.74-.76h32.06l.74.76zm-1.03-1.74H21.11l.03-2.76c-.03-10.2 8.94-15.11 12.77-17.2.64-.35 1.05-.58 1.33-.77.56.14 1.11.22 1.65.22s1.06-.08 1.58-.21c.29.19.69.42 1.32.76 3.83 2.09 12.8 7 12.78 17.21l.02 2.75z"></path>
                <path fill="#47b28e" d="M51.67 54.53v3.29h-1.78v-1.61c0-1.05-.84-1.91-1.88-1.91-.24 0-.47.05-.69.14-.69.28-1.19.97-1.19 1.77v1.61h-2.08v-1.61c0-1.05-.84-1.91-1.88-1.91-.11 0-.22.01-.33.03-.87.16-1.55.94-1.55 1.88v1.61h-2.08v-1.61a1.9 1.9 0 0 0-1.32-1.82.776.776 0 0 0-.18-.05.582.582 0 0 0-.19-.03c-.04-.01-.09-.01-.13-.01-.06 0-.11 0-.17.01-.98.05-1.77.89-1.77 1.9v1.61h-2.08v-1.61c0-.91-.63-1.68-1.48-1.87-.13-.02-.26-.04-.4-.04-1.03 0-1.88.86-1.88 1.91v1.61h-2.08v-1.61c0-.78-.46-1.45-1.12-1.75-.23-.1-.49-.16-.76-.16-1.03 0-1.88.86-1.88 1.91v1.61h-.74v-3.29l.65-.76h28.34l.65.76z"></path>
                <path fill="#53bf9f" d="M52.59 52.79h-1.83l-.02-2.75c.02-10.21-7.91-15.12-11.29-17.21-.53-.32-.87-.54-1.12-.73l.14-.03c.29.19.69.42 1.32.76 3.83 2.09 12.8 7 12.78 17.21l.02 2.75zM51.67 57.82v-3.29l-.65-.76h1.86l.74.76v3.29zM55.17 59.54v3.48h-1.62v-1.47c0-.53-.19-1.02-.51-1.38v-.63l-1.06-.73h1.99l1.2.73z"></path>
                <path fill="#3ba580" d="M19.73 58.81h1.99l-1.06.75v.76c-.25.34-.39.77-.39 1.23v1.47h-1.74v-3.46l1.2-.75zm15.66-26.72c-.24.18-.6.41-1.14.74-3.38 2.09-11.31 7-11.28 17.2l-.03 2.76h-1.83l.03-2.76c-.03-10.2 8.94-15.11 12.77-17.2.64-.35 1.05-.58 1.33-.77l.15.03zM20.82 53.77h1.86l-.65.76v3.29h-1.95v-3.29z"></path>
            </g>
        </svg>
    )
}

export const Download = (props) => {
    const svgStyle = props.svgStyle;
    const strokeWidth = props.strokeWidth;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={svgStyle}>
            <g>
                <path d="M336 336.142h76c44.182 0 80-35.818 80-80 0-44.185-31.818-80-76-80 0-44.185-35.818-80-80-80-9.526 0-18.538 1.948-27.012 5.005-22-27.236-55.251-45.005-92.988-45.005-66.274 0-120 53.726-120 120-44.182 0-76 35.815-76 80 0 44.182 35.818 80 80 80h76" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M336 336.142h76c44.182 0 80-35.818 80-80 0-44.185-31.818-80-76-80 0-44.185-35.818-80-80-80-9.526 0-18.538 1.948-27.012 5.005-22-27.236-55.251-45.005-92.988-45.005-66.274 0-120 53.726-120 120-44.182 0-76 35.815-76 80 0 44.182 35.818 80 80 80h76M256 216.142v239.711M196 404.142 241.858 450c7.81 7.81 20.474 7.81 28.284 0L316 404.142" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}