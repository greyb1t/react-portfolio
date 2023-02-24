import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import ShowcaseImage1 from './../resources/silencethesun/SilenceTheSun_Screenshot1.png'
import ShowcaseImage2 from './../resources/silencethesun/SilenceTheSun_Screenshot2.png'
import ShowcaseImage3 from './../resources/silencethesun/SilenceTheSun_Screenshot3.png'
import ShowcaseImage4 from './../resources/silencethesun/SilenceTheSun_Screenshot4.png'
import ShowcaseImage5 from './../resources/silencethesun/SilenceTheSun_Screenshot5.png'
import ExplosionEffectVideo from './../resources/silencethesun/exploisioneffect.mp4'
import PlayerLaserVideo from './../resources/silencethesun/playerlaser.mp4'
import RenderBufferImage from './../resources/silencethesun/renderbuffer.png'
import DoubleRenderBufferImage from './../resources/silencethesun/doublerenderbuffer.png'
import MenuVideo from './../resources/silencethesun/menu.mp4'
import BossIntroVideo from './../resources/silencethesun/boss_intro3.mp4'
import BossPhase1Video from './../resources/silencethesun/phose1.mp4'
import BossPhase2Video from './../resources/silencethesun/phase2.mp4'
import BossPhase2_2Video from './../resources/silencethesun/phase2_2.mp4'
import BossPhase3Video from './../resources/silencethesun/phase3_1.mp4'
import BossPhase3_2Video from './../resources/silencethesun/phase3_2.mp4'

function SilenceTheSun() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="SILENCE THE SUN" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/wm4EEgOvmIo" />

            <div className='pt-10'>
                <ImageSlideshow>
                    <div><img src={ShowcaseImage1} /></div>
                    <div><img src={ShowcaseImage2} /></div>
                    <div><img src={ShowcaseImage3} /></div>
                    <div><img src={ShowcaseImage4} /></div>
                    <div><img src={ShowcaseImage5} /></div>
                </ImageSlideshow>
            </div>

            <MakeTitle text="MAIN RESPONSIBILITIES" />

            <Divider />

            <MakeTitleMedium text="BOSS 2" />

            <p className='text-center'>I made our 2nd boss together with a Graphic Designer and a Animator.</p>
            <p className='text-center'>It contains an introduction, 3 major phases and death all with unique behaviour.</p>

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="Intro" />
                    <MakeVideo video={BossIntroVideo} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="Phase 1" />
                    <MakeVideo video={BossPhase1Video} />
                </div>
            </div>

            <MakeTitleSmaller text="Phase 2" />
            <LeftContentRightTextHalf video={BossPhase2Video}>
                <MakeVideo video={BossPhase2_2Video} />
            </LeftContentRightTextHalf>

            <MakeTitleSmaller text="Phase 3" />
            <LeftContentRightTextHalf video={BossPhase3Video}>
                <MakeVideo video={BossPhase3_2Video} />
            </LeftContentRightTextHalf>

            <Divider />

            <MakeTitleMedium text="PARTICLES & EFFECTS" />
            <p className='text-center'>I have implemented the sprite sheet animated particles and their glow effects.</p>

            <LeftContentRightText1 video={ExplosionEffectVideo}>
                <b>Explosion</b>
                <br />
                <br />
                <p>The explosions have been iterated upon and polished to make them feel powerful by using extra layerer glowing effects and screen shake.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={PlayerLaserVideo}>
                <b>Player Laser (Gold polish only)</b>
                <br />
                <br />
                <p>The actual laser was not done by me, however, the actual glow polish was. Additive layered glow can make a world of polish difference.</p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="ENGINE" />

            <div className='max-w-md mx-auto py-8'>
                <MakeTitleSmaller text="Engine Responsibilities" />
                <p>I was a big part of the whole engine used for the game and I partook in the following:</p>
                <ul className='list-disc list-inside'>
                    <li>Collision management</li>
                    <li>Rendering</li>
                    <li>Game object management</li>
                    <li>Game states</li>
                    <li>Transitions between game states</li>
                </ul>
            </div>

            <MakeTitleMedium text="Multithreaded Rendering" />

            <LeftContentRightTextHalf image={RenderBufferImage}>
                <p>I implement multithreaded rendering because I wanted more experience multithreading and it was encouraged by our teacher. In retrospect, was it needed? Absolutely not.</p>
                <img src={DoubleRenderBufferImage} />
            </LeftContentRightTextHalf>

            <Divider />

            <MakeTitleMedium text="UI & HUD" />

            <LeftContentRightTextHalf video={MenuVideo}>
                <p>I have done all the menus & hud in the game which includes the following:</p>
                <ul className='list-disc list-inside'>
                    <li>Main menu</li>
                    <li>Options menu</li>
                    <li>Credits</li>
                    <li>Score</li>
                    <li>Boss healthbar</li>
                    <li>Win and death screens</li>
                    <li>Pause menu</li>
                </ul>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default SilenceTheSun;