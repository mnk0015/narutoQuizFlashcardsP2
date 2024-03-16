# Web Development Project 3 - *Naruto Quiz!*

Submitted by: **Mohammed Nazib Hossain Khan**

**Embark on an immersive journey into the captivating world of Naruto with our interactive flashcard quiz. Test your knowledge of the beloved anime series with challenging questions and discover how much of a true Naruto fan you truly are!**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='src\assets\narutoQuizFlashcardsP2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ... [ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

One significant challenge was integrating user input into the flashcard app. Enabling users to input guesses and providing feedback on correctness demanded a deep understanding of React's state management with useState(). Ensuring the visibility and functionality of the input field and submit button across flashcards, while revealing answers only upon submission, required meticulous attention to detail and effective state management.

Another challenge arose in enabling smooth navigation between flashcards. Managing the current card index and maintaining input state during transitions demanded careful consideration of state persistence and component re-rendering.

Moreover, aligning the app's visual appearance with requirements posed challenges. Balancing design aesthetics with functionality while adhering to provided CSS styles demanded creativity and attention to detail.

Overall, overcoming these challenges provided valuable insights into managing state in React and maintaining a seamless user experience, deepening my understanding of React's capabilities in building interactive web applications.

## License

    Copyright [2024] [Mohammed Nazib Hossain Khan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
