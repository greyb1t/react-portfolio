import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import GridVideo from './../resources/runmir/grid2.mp4'
import GridImage from './../resources/runmir/grid1.png'
import GridGroupsVideo from './../resources/runmir/gridgroups.mp4'
import FrogPathFindingVideo from './../resources/runmir/frogpathfind.mp4'
import InteractiveTutorialImage from './../resources/runmir/interactive_tutorial.png'
import SwitchVideo from './../resources/runmir/switch.mp4'
import SpeedFeedbackVideo from './../resources/ghostcruiser/speedfeedback.mp4'
import SpeedPickupsVideo from './../resources/ghostcruiser/speed_pickups.mp4'
import HudPickupVideo from './../resources/ghostcruiser/hud_pickup-1.mp4'

function GhostCruiser() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="GHOST CRUISER" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/adXAO4p8pXc" />

            <MakeTitle text="MAIN RESPONSIBILITIES" />

            <Divider />

            <MakeTitleMedium text="GAMEPLAY" />

            <LeftContentRightText1 video={SpeedFeedbackVideo}>
                <p>I was responsible for making sure the whole gameplay loop was fully working at quickly as possible to later on iterate upon it. That includes, respawning, start countdown, player death, loose and win conditions.</p>
                <p>Camera implementation, speed and camera shake feedback.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={SpeedPickupsVideo}>
                <p>Speed, time and boosts pickups have been implemented by me.</p>
            </LeftContentRightText1>

            <MakeTitleMedium text="UI & HUD" />

            <LeftContentRightText1 video={HudPickupVideo}>
                <p>In-game HUD for the pickup effects</p>
                <p>The UI upon player win and death, startup logos</p>
            </LeftContentRightText1>
        </div>
    );
}

export default GhostCruiser;