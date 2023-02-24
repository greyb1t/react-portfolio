import { Divider, MakeLink, LeftContentRightTextHalf, YoutubeVideo, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo } from './Utils'
import PortalsGoalVideo from './../resources/videos/portalgoal.mp4'
import WrongProjectionVideo from './../resources/videos/wrongprojection.mp4'
import DrawInfrontOfCamVideo from './../resources/videos/drawinfrontofcam.mp4'
import CannotSeeThroughPortalVideo from './../resources/videos/cannotseethroughportal.mp4'
import RecursiveProblemVideo from './../resources/videos/recursiveproblem.mp4'
import SeamProblemVideo from './../resources/videos/seam.mp4'
import OneFrameEmptinessVideo from './../resources/videos/portal1frameemptyness.mp4'
import SuperliminalGoalVideo from './../resources/videos/goal.mp4'
import PickupObjectVideo from './../resources/videos/pixkupobject.mp4'
import ScalingMathImage from './../resources/images/scalingmath2.png'
import CollisionVideo from './../resources/videos/collision.mp4'

function Specialization() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="SPECIALIZATION" />
            <div className='max-w-md mx-auto pb-8'>
                <p className='pt-10'>I am partly interested in both rendering and gameplay, to be able to challenge myself within these two categories I decided to try to replicate the portals from Portal 2 together with the perspective scaling from Superliminal and combine these together.</p>
                <p className='pt-10'>I am very happy with the result considering the time that was spent on it. You can view the result in the video below!</p>
            </div>

            <Divider />

            <MakeTitle text="THE RESULT" />
            <div className='pt-8' />
            <YoutubeVideo link="https://www.youtube.com/embed/1NOSwHr8Kz8?feature=oembed" />
            <div className='pt-8' />
            <Divider />

            <MakeTitle text="PORTALS RECREATION" />
            <MakeTitleMedium text="THE GOAL" />
            <p className='text-center'>I love the portal games and I wanted to re-create the seemless portal feature from it.</p>

            <div className='mx-auto max-w-sm'>
                <MakeVideo video={PortalsGoalVideo} />
            </div>

            <Divider />

            <MakeTitleMedium text="PROBLEMS ENCOUNTERED" />

            <LeftContentRightTextHalf video={WrongProjectionVideo}>
                <MakeTitleSmaller text="ACHIEVING CORRECT PROJECTION" />
                <p>The result being displayed in the GIF is an already perspective divided result, however, it was “flat” because it was simply a flat texture.</p>
                <p>Another step was need to properly project the result onto the resulting target quad.</p>
                <p>To achieve that I thought about my previous knowledge from implementing deferred decals which was done by calculating the UV screen space coordinates.</p>
                <p>I was able to solve this issue the same way.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={DrawInfrontOfCamVideo}>
                <MakeTitleSmaller text="OBJECT WERE DRAWN IN FRONT OF PORTAL" />
                <p>To achieve the  effect I am moving the target portal camera and rendering with that. When objects are in between the camera and the portal, it renders the objects.</p>
                <p>My initial attempt to solve was to use 2 different projection matrices for the camera. One for culling with near plane further forward to the portal with same rotation as portal, another one for rendering. This did not work properly because it culled stuff that was in the render view.</p>
                <p>Second attempt was done using a beautiful thing called “oblique matrix” which is making the near plane be straight at an angle.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={CannotSeeThroughPortalVideo}>
                <MakeTitleSmaller text="PORTAL RENDERS ITS OWN PORTAL TEXTURE" />
                <p>The initial solution was to simply cull the portals for the portal cameras. Now they do not render them. It fixed the issue, however, looks weird and I want to be able to see portals through portals recursively.</p>
                <p>The final solution was to control the rendering order of the portal cameras myself and simply disabling its own portal texture when drawing the camera.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={RecursiveProblemVideo}>
                <MakeTitleSmaller text="RECURSIVE PORTALS WAS NOT WORKING FOR FREE" />
                <p>This was fun to do, I solved it by drawing the deepest portal (painters algorithm) and then backtracking and everytime calculate the proper position and rotation for each portal.</p>
                <p>There are performance issues depending on how deep the recursion is that I ignore at the moment.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={SeamProblemVideo}>
                <MakeTitleSmaller text="SEAM WHEN CAMERA MOVES" />
                <p>When moving camera, the portal shows a seam which looks like it has 1 frame delay and using the previous frames result.</p>
                <p>That was partly true and was because I originally calculated the destination portal camera transform then drawing the current portal and vice versa. Meaning I caused the 1 frame delay.</p>
                <p>This was fixed by actually calculating the correct camera transform for the one I was going to render.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={OneFrameEmptinessVideo}>
                <MakeTitleSmaller text="1 FRAME OF EMPTINESS" />
                <p>When moving through a portal, when teleporting the player and the camera to the destination portal, 1 frame of empty world would appear.</p>
                <p>The solution was to simply change script order execution to ensure that the rendering of the portals occur after actually teleporting the player.</p>
            </LeftContentRightTextHalf>

            <div className='lg:flex lg:flex-row lg:gap-x-10'>
                <div className='lg:basis-1/2'>
                    <MakeTitleMedium text="UNSOLVED ISSUES" />

                    <p>If I was able to spend more time, there are a couple of problems I would like to solve.</p>
                    <ul className='list-disc list-outside'>
                        <li>When having multiple portals, performance drops quite a lot and proper culling of the portals would be very beneficial.</li>
                        <li>It is not 100% seemless when going through a portal, there is a couple of units deadspace when you are in the middle of the portal texture quad. Meaning, when going through, the camera is not allowed to be too near the portal texture to avoid clipping.</li>
                        <li>Unlimited recursion is not handled at the moment, the deepest portal recursion is not handled properly and is glitchy looking.</li>
                    </ul>
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleMedium text="HINDSIGHT THOUGHTS" />
                    <p>If I had more time, I would like to add another feature which involved picking up and placing objects within a portal. Would be very cool.</p>
                    <p>I did not anticipate this many issues needing to be solved because they kept appearing one after the other. Another thing, I initially thought doing it in Unity would be easier than doing it in our own Engine. But in hindsight, I am not sure if that’s really true. Doing it in our own engine, I would have much more control over the rendering part.</p>
                </div>
            </div>

            <Divider />

            <MakeTitle text="SUPERLIMINAL RECREATION" />
            <MakeTitleMedium text="THE GOAL" />
            <p className='text-center'>The goal for this is to re-create the perspective scaling feature from Superliminal as seen in the below GIF.</p>

            <div className='mx-auto'>
                <MakeVideo video={SuperliminalGoalVideo} />
            </div>

            <Divider />

            <LeftContentRightTextHalf video={PickupObjectVideo}>
                <MakeTitleSmaller text="THE SCALING MATH" />
                <p>Something I initially expected to be more difficult turned out to be quite easy to understand.</p>
                <p>Using the Intercept Theorem or ratio of similar triangles we can get the formula.</p>
                <p>Which says that an object of size s1 with the distance from camera d1, with another distance of d2, the size s2 is given using the following formula.</p>
                <img src={ScalingMathImage} />
            </LeftContentRightTextHalf>

            <Divider />

            <MakeTitleMedium text="PROBLEMS ENCOUNTERED" />

            <LeftContentRightTextHalf video={CollisionVideo}>
                <MakeTitleSmaller text="FINAL OBJECT POSITION INTERSECTED OBJECTS" />
                <p>First iteration had a big issue where I was unable to find the correct position  for the carried object.</p>
                <p>SweepTest was not scaled up. Unity does not support.</p>
                <p>Tried SweepTest for each unity forward while scaling and moving the object. Did not work because SweepTest works on the Rigidbody which seems to not be able to change position during a frame.</p>
                <p>Bad because poor performance on large distances.</p>
                <p>Next was Raycasting lines from the vertices. Gives me perspective scaling collision checks for free.</p>
                <p>Had to avoid collision by offsetting the object and then doing another perspective pass onto it with the newly offsettet position.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf video={CollisionVideo}>
                <MakeTitleSmaller text="THE FINAL POSITION INTERSECTED OTHER GEOMETRY" />
                <p>After figuring out the resulting object size and distance, very often the object was intersecting other geometry at target position.</p>
                <p>This issue was solved by offsetting the resulting position by the intersecting vertex and then again re-calculating the size and distance.</p>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default Specialization;