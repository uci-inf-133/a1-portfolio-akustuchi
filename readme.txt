--Readme document for *Anoki Tran*, *anokit@uci.edu*--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 0/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features
    - Semantic HTML tags
    - Images with alt text
    - Custom icons from Google Material Icons 

(b) CSS features
    - Added custom font from Google fonts
    - Custom color palette
    - Modified padding and margins

(c) Advanced features
    - Navigation bar
    - Hero page with a blurred personal photo
    - JavaScript form handling

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

    - There weren't any 

4. How long, in hours, did it take you to complete this assignment?

    - 12 Hours

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

    Generative AI (Gemini):
        - Query: "How can I blur a background image without blurring the text on top of it?"
        - Use: The AI explained that CSS filters applied to a parent container also blur the child text. It suggested using a CSS "pseudo-element" (::before) to create a separate background layer.

        - Query: "How can I keep the navigation bar at the top of the screen even when I scroll down?"
        - Use: The AI suggested using "position: sticky" combined with "top: 0" and a high "z-index" to make sure the navigation bar floats above the content.

        - Query: "How do I make each section take up the full screen and center the content?"
        - Use: The AI helped me implement "min-height: 80vh" to force card height and "display: flex" with "justify-content: center" to align the text.

        - Query: "How can I separate my main content into distinct "cards" instead of one big container?"
        - Use: The AI helped refactor the CSS, moving the shadow and padding styles from the main wrapper to individual <section> tags with a new ".card" class.
        

6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

    - N/A

7. Is there anything special we need to know in order to run your code?

    - N/A
