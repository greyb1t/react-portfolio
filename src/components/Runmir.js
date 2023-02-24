import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import GridVideo from './../resources/runmir/grid2.mp4'
import GridImage from './../resources/runmir/grid1.png'
import GridGroupsVideo from './../resources/runmir/gridgroups.mp4'
import FrogPathFindingVideo from './../resources/runmir/frogpathfind.mp4'
import InteractiveTutorialImage from './../resources/runmir/interactive_tutorial.png'
import SwitchVideo from './../resources/runmir/switch.mp4'

function Runmir() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="RUNMIR" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/1k97vjflZuE" />

            <MakeTitle text="MAIN RESPONSIBILITIES" />

            <Divider />

            <MakeTitleMedium text="WORLD GRID TOOL" />

            <LeftContentRightText1 video={GridVideo}>
                <p>The puzzle game was grid based therefore, I was tasked with creating the actual grid tool that the level designers use. </p>
                <p>Features includes grid debug drawing, grid generation, modification to each grid item. Grid item highlighting when dragging and dropping pieces. Groups of grid items to enable/disable them through code.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={GridGroupsVideo}>
                <img src={GridImage} />
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="ANIMALS & PATHFINDING" />

            <LeftContentRightTextHalf video={FrogPathFindingVideo}>
                <p>When player puts a piece on an animal occupied piece, animal runs to another position.</p>
                <p>Animals finds path using the grid and avoids obstacles. Their speed animations are also animated to fit the movement speed from the animation using Animation Curves.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf image={InteractiveTutorialImage}>
                <MakeTitleSmaller text="INTERACTIVE TUTORIAL" />
                <p>An interactive tutorial to make the user familiar with the controls</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={SwitchVideo}>
                <MakeTitleSmaller text="GAMEPLAY" />
                <p>I did one of the game pieces called “Switch” which enables a part of the world when it is interacted with.</p>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default Runmir;