# Community Board - 
*Top 10 Places to Play Soccer in Doral*

by: **Franklin Neves Filho**

This web app: **Lists the best locations to play soccer throughout the city of Doral**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **There is a unique theme for events or resources relevant to a specific community**
- [X] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [X] Buttons or links to a related resources are on each card component
- [X] The site is responsive for both desktop and mobile formats
- [X] Links are updated on Hover

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='src/assets/communityBoard.gif' title='Video Walkthrough' width='500px' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Creating a grid format that dynamically changes between screens is very challenging.
```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust gap between cards as needed */
  justify-content: center; /* Center all the card in the screen */

  @media (max-width: 768px) {
    flex-direction: column; /* Switch to a single column layout for smaller screens */
    align-items: center; /* Align cards to the center */
  }
}
```
This was the Css class I used to dynamically configure the columns and rows depending on the devices screen size.

It was also very challenging to configure the images to be responsive as well. In this case we needed the images to shrink with a bigger screen and enlarge with a smaller one.
The following code was used to configure this adaptation:
```css
/* Styling for every card and it's components*/
.card {
    border-radius: 0.5rem;
    border: 1px solid #242424;
    padding: 16px;
    text-align: center;

    background-color: #242424;

    max-width: 300px;
    min-width: 300px;
}

.card img {
    max-width: 100%; /* Ensure the image scales proportionally */
    max-height: 100%; /* Ensure the image scales proportionally */
    border-radius: 0.3rem; /* Apply rounded corners if desired */
}
    
```

## License

    Copyright [2023] [Franklin Neves Filho]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
