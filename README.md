# flyering-locator-app

### React SPA that uses the Google Maps API and manages state with Redux-Toolkit

React app that displays a map with recommendations for places to hang concert flyers based on an inputted location. Users enter an event city and state then select from location types such as `Coffee Shops` or `Bookstores`. Those values are then dispatched with action types to a reducer function before being sent to a Redux store as strings, then concatenated and passed to a Google Maps Embed API call that renders a map with search results based on the user's selections.

The deployed build version can be viewed at https://flyering-locator-app.peterciluzzi.dev