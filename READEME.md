#Custom Web Component Exercise

The second Hybrid exercise is to create your own two custom Web Components without using any Web Component library like Lit and without using any AI generation tool.

The components that you will build are enhanced <\input> and <\textarea> elements which will keep track of the number of characters typed by the user. Each of the elements needs a required attribute to hold the maximum number of allowed characters. The number of characters typed needs to be displayed beside the <\input> or <\textarea> control.

Each class should have a private instance property to hold the number of characters typed. The default value of the property needs to be zero. All private class properties should include a day of the week in the name. An internal listener for the input event will update this property and the display of the number of typed characters and its styling. The input event must use an addEventListener method to attach the event.

The display of the typed characters needs to include 3 colors - a base color that is appropriate for the website (same as the color used on form labels), then an amber hue for warning that the user has reached 80% of the max length, and finally a red hue when the user reaches the max length. Additionally, you can update the form control's border-color or background-color.

In addition to the color changes there should be another visual indicator of the progress towards the max length. Examples include an SVG circle with an arc around the edge that shows how much of the max length has been filled or a box along the top or bottom edge of the form control that fills in to represent the percentage of the max length typed. The colors used in the visual indicators should match the color used for displaying the number of characters typed.
