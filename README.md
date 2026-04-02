# Streetwise - Flyering Locator App

### React SPA that uses the Google Maps API and manages state with Redux-Toolkit

A location-based discovery tool for independent artists and street teams. Users enter an event city and state, select venue types such as coffee shops or bookstores, and receive an interactive Google Maps display of recommended locations for promotional flyer distribution. User selections are dispatched with action types to a Redux store, then concatenated and passed to a Google Maps Embed API call that renders search results based on the user's selections.

The deployed build version can be viewed at https://flyering-locator-app.peterciluzzi.dev