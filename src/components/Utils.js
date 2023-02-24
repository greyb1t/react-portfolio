import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Divider(props) {
    return (
        <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
    );
}

export function MakeLink(props) {
    return (
        <a href={props.to} className='text-sky-500 hover:underline'>{props.children}</a>
    );
}

export function MakeInternalLink(props) {
    return (
        <Link className='text-sky-500 hover:underline' to={props.to}>{props.children}</Link>
    );
}

export function MakeTitle(props) {
    return (
        <h1 className="text-center font-bold text-3xl py-4">{props.text}</h1>
    );
}

export function MakeTitleMedium(props) {
    return (
        <h1 className="text-center font-bold text-2xl py-4">{props.text}</h1>
    );
}

export function MakeTitleSmaller(props) {
    return (
        <h1 className="text-left font-bold text-xl pt-4 pb-8">{props.text}</h1>
    );
}

export function MakeVideo(props) {
    return (
        <div>
            <video className='p-4 mx-auto' loop="loop" muted autoPlay>
                <source type="video/mp4" src={props.video} />
                Your browser does not support the video tag
            </video>
        </div>
    );
}

export function YoutubeVideo(props) {
    return (
        <div className="video-container">
            <iframe
                className="w-full h-[250px] sm:h-[310px] md:h-[602px]"
                src={props.link}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
                name="fitvid0"
            />
        </div>
    );
}

export function LeftContentRightText1(props) {
    let contentElement = null;

    if (props.video) {
        contentElement = <MakeVideo video={props.video} />;
    }
    else if (props.image) {
        contentElement = <img className='p-4 mx-auto' src={props.image} />;
    }

    return (
        <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
            <div className='lg:basis-2/3'>
                {contentElement}
            </div>
            <div className='lg:basis-1/3'>
                {props.children}
            </div>
        </div>
    );
}

export function LeftContentRightTextHalf(props) {
    let contentElement = null;

    if (props.video) {
        contentElement = <MakeVideo video={props.video} />;
    }
    else if (props.image) {
        contentElement = <img className='p-4 mx-auto' src={props.image} />;
    }

    return (
        <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
            <div className='lg:basis-1/2'>
                {contentElement}
            </div>
            <div className='lg:basis-1/2'>
                {props.children}
            </div>
        </div>
    );
}

export function ImageSlideshow(props) {
    return (
        <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} thumbWidth={150}>
            {props.children}
        </Carousel>
    );
}