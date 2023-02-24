import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo } from './Utils'
import ShowcaseImage1 from './../resources/starfall/Starfall_01.jpg'
import ShowcaseImage2 from './../resources/starfall/Starfall_02.jpg'
import ShowcaseImage3 from './../resources/starfall/Starfall_03.jpg'
import ShowcaseImage4 from './../resources/starfall/Starfall_04.jpg'
import ShowcaseImage5 from './../resources/starfall/Starfall_05.jpg'
import ShowcaseImage6 from './../resources/starfall/Starfall_06.jpg'
import ShowcaseImage7 from './../resources/starfall/Starfall_07.jpg'
import IntroVideo from './../resources/starfall/intro.mp4'
import HandAttackLaserVideo from './../resources/starfall/hand-attack-laser.mp4'
import CrawlerHandVideo from './../resources/starfall/crawler-hand.mp4'
import HandPunchVideo from './../resources/starfall/hand-punch.mp4'
import BodyBigLaserVideo from './../resources/starfall/body-big-laser.mp4'
import BodyMissilesVideo from './../resources/starfall/body-missiles.mp4'
import BodyWaveAttackVideo from './../resources/starfall/body-wave-attack.mp4'
import BodyDeathVideo from './../resources/starfall/body-death.mp4'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Starfall() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="STARFALL" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/_0jA8NTG43Y" />

            <div className='pt-10'>
                <ImageSlideshow>
                    <div><img src={ShowcaseImage1} /></div>
                    <div><img src={ShowcaseImage2} /></div>
                    <div><img src={ShowcaseImage3} /></div>
                    <div><img src={ShowcaseImage4} /></div>
                    <div><img src={ShowcaseImage5} /></div>
                    <div><img src={ShowcaseImage6} /></div>
                    <div><img src={ShowcaseImage7} /></div>
                </ImageSlideshow>
            </div>

            <MakeTitle text="MAIN RESPONSIBILITIES" />

            <Divider />

            <MakeTitleMedium text="FINAL BOSS" />

            <LeftContentRightText1 video={IntroVideo}>
                <MakeTitleSmaller text="INTRO" />
                <p>I played a part in making the intro for the final boss together with animators and sound designers.</p>
            </LeftContentRightText1>
            <LeftContentRightText1 video={HandAttackLaserVideo}>
                <MakeTitleSmaller text="PHASE 1" />
                <p>The boss hands are the targets to kill and will try to kill you.</p>
                <p>Left hand has two unique attacks, right hand has two other unique attacks.</p>
                <p>When one hand is killed, the other one is enraged and gain an additional attack and is more dangerous.</p>
            </LeftContentRightText1>

            <LeftContentRightTextHalf video={CrawlerHandVideo}>
                <MakeVideo video={HandPunchVideo} />
            </LeftContentRightTextHalf>

            <LeftContentRightText1 video={BodyBigLaserVideo}>
                <MakeTitleSmaller text="PHASE 2" />
                <p>The hands are dead, the body is the target to kill.</p>
                <p>It now has four new attacks, Giga Laser, Mouth Mortar, Shockwave Scream and Poison Breath.</p>
            </LeftContentRightText1>

            <LeftContentRightTextHalf video={BodyMissilesVideo}>
                <MakeVideo video={BodyWaveAttackVideo} />
            </LeftContentRightTextHalf>

            <MakeVideo video={BodyDeathVideo} />
        </div>
    );
}

export default Starfall;