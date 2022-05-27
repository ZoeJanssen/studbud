
# StudBud 
__Assignment Overview__

I found this assignment to be very enjoyable and a fun challenge. It was a lot more difficult to use github than repplit at the start, espically as i didn't clear my cache, so was confused and kept changing my nav bar as i was unable to see an outcome from my changes. I feel a lot more confident with coding, and feel like i have a greater understanding overall of all three languages but particularly the use of javascript in Web design. It is a bit of challenge when you can't find the missing semicolons but in the end it all went okay. 

## development documentation
 __Changes__ There were various changes that came about from my inital mockups, particularly as i can design a great website but can not always code it. Although i did change a lot up, it was generally a cosmetic change and did not effect the user experience. 
 * __Removed the Profile Page__
    * I did actually code this page but at the end of the day i realised it did not add anything to the design and hence was deemed unnecessary. You can see below the inital designed 
    Profile page:

    (img/designedProfilePage.png)
    ![Image of profile page](/Users/zoejanssen/studbud/img/designedProfilePage.png)

    * And the coded Profile Page: 

    (img/codedProfilePage.png)

 * __Workspace overview__
     * There were many changes that came about from my workspace, i removed the page that contained multiple different study boards and just choose to have the overall study board as i re-designed it to only be features that can benefit creative students.
     * This was further reflected by usability testing when i showed the overview of the workspace to people they felt that it was too busy and that they would spend more time actually playing with the settings rather than productively studying
     * I re designed the workspace feautures many times to ensure that the features made sense within their environment. I also re designed the layout for the workspace as it was extremly difficult to create the grid structure i wanted aswell as being responsive therefore i choose to do equal boxes, but i actually think this looks cleaner and more put together.
     * I removed the changing background as the header and moved it to its own div, and made buttons that changed the colour of the background, as i wanted my design to be accessible to everyone and if i was uploading multiple images this would slow down the efficiency of my website
     * I also changed the features around and utilised a colour generator, acronym generator, background colour changer, stop watch, pomodoro and music player
     * I constantly was re-designing this page to allow for more efficent type spent coding in stead of wasting time with thinking how it would be layout
     * Original Mockup
     (img/originalWorkspace.png)
    * Re-Designed Mockup
      (img/editedWorkspace.png)
    * Final Version
     (img/finalWorkspace.png)

* __Resource List__
    * I removed this page as i changed features from Reading list to Acronym generator as i felt that it would be more beneficial to a creative mind to use acronyms then have a reading list 
    * This was further backed up by my usability testing as users suggested that the reading list wasn't that relevant to a creative student and they didn't find it particularlly beneficial. They also commented about how the user interface of the design was confusing

* __Task Page__
    * I re designed this page to include the task list itself and form to make it easier for the user to access the Kanban Board 
    * I made the descision to not include an adding of a column as the origianl Kanban board is suppose to be in three columns as it makes for a more structured output for tasks 
    * Original Mockup
      (img/orignalKanban.png)
    * Final Version
     (img/finalTask.png)

## Requirements

__Features__
I used the following features which were required for the code

*Primary Features*

* Task List (found within the Kanban board, Task Page)
* StopWatch (found within the Workspace Page)
* Music Player (found within the Workspace Page)

*Secondary Features*

* Kanban Board (found within the Kanban board, Task Page)
    * instead of creating and naming columns i have made the design decision to only allow the user to re name the column as with too much freedom, the user, especially a creative student, will be caught up in the adding and removing of columns, Hence only re-naming it is able to give personal features without distraction
* Pomodoro Timer (found within the Workspace Page)
* Acronym Maker (found within the Workspace Page)

__Technical Requirements__
* Page Titles, All pages have a title 
* Favicon, Have included a favicon of the 2 letters S and B
* Appropriate HTML tags have been used, when deemed necessary divs have been used for Presentational markup, seperating content in the workspace and the nav bar
* Responsiveness, My design is complelty responsive which i am very proud of and think that it works well on both a phone and laptop
* Design Principles, my website uses colour theory as well as grid alignment to ensure that the website is efficent and follows the international standards of a website
* 5 commits, my website has more than 5 commits

## Challenges
__Local Storage__

Local storage nearly drove me insane, it was increasingly difficult as i over complicated it for myself, i was able to get over this hump by working one form input at a time to ensure that it was working. This method helped for alot of other challenges aswell, making a fresh and new start really allowed me to focus on the code

__Javascript Names__

I had challenges when i would accidentally name the code the same name, this was a particular problem with the pomodoro and stopwatch as i used almost the same names for all the objects

__Various Problems__
Other problems i had included 
* Drag and drop with tasks 
* Moving one of my files to be at index.html
* Using Semantic HTML instead of Divs


## Refrences

__W3Schools__
W3 schools was a lifesaver, from checking refrences to seeing the examples they gave, I was always goiing back to W3 schools to help me work through the code.

__Coding Tutorials__
One of the best things i learnt from this assignment was all the different resources you have to allow for further education and inspiration from other peoples codes.

__Stopwatch__
Potts, T. (2021). Learn HTML, CSS & JavaScript by coding a Stopwatch | A beginner tutorial [YouTube Video]. Retrieved from https://www.youtube.com/watch?v=49f1cjZWRJA&ab_channel=TylerPotts

* I took inspiration from this youtube video to help me understand the math functions involved in the stop watch and how to initially use the interval sections

__Pomodoro__
learn-webdev. (2020). Pomodoro Timer | Javascript Beginner Project Tutorial [YouTube Video]. Retrieved from https://www.youtube.com/watch?v=vAEG6OVCass&t=271s&ab_channel=learn-webdev

* I took inspiration from the javascript of this code as well as the CSS grid layout that it used as it helped me come up with a perfect 3 column which was difficult to do by divs and without effecting the javascript


__Acronym Generator__
(Byron Delpinal, 2022)
Hays, M. (2020). P047 day47 acronym generator worked out [YouTube Video]. Retrieved from https://www.youtube.com/watch?v=sqNWOHXEKho&t=89s&ab_channel=Mr.Hays

* i took inspiration from these codes initally to see how the string function were working in the javscript and how to split and then showcase the start of each character


__Colour Generator__
How To Generate a Random Color in JavaScript | CSS-Tricks. (2009, December 10). Retrieved May 23, 2022, from CSS-Tricks website: https://css-tricks.com/snippets/javascript/random-hex-color/

‌ * I followed along this code to understand how to use the add event listener to the div without changing the colour of the background which took me a little  bit of time to work out

__Drag and Drop__
An Essential Guide to JavaScript Drag and Drop By Examples. (2022, January 8). Retrieved May 27, 2022, from JavaScript Tutorial website: https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/#:~:text=Introduction%20to%20JavaScript%20Drag%20and%20Drop%20API&text=To%20drag%20an%20image%2C%20you,you%20would%20drag%20an%20image

* I used this tutorial to help guide me with how to do the drop function of the javascript, as i was able to drag the funciton but dropping became an issue
‌






