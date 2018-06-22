# FitRankings Intro Project

### Getting Started
- Fork to your own repo
- RUN `npm install && npm start && open localhost:3000`

### Goal: 
##### Demonstrate the ability to work with TypeScript, React, and SCSS, in a webpack-dev environment. Effectively manipulate state to navigate the UI and traverse parent-child relationships to efficiently display and update content. Communicate across a RESTful API and render content delivered asynchronously. Consider the following principles in your final implementation: OOP, DRY, SOA.

### Checklist:
- Render the Table Component
- Iterate through the `data` array and render a TableRow for each resource.
- Render the status and duration of a response.
- Complete the methods: `onClickFetchResource`, `onClickViewDetails`
- In the ApiService class, complete the `fetchResources` method to communicate with any resource endpoint. Create or update the resource object properties to store the status, duration, and body of the response.
- Implement a timer constructor function to determine the duration of each API request/response.
- Use `isLoading` from the Table Component state to show/hide a loading icon when a resource is requested. Use SCSS to make the icon spin.
- Render the Sample Component, with the appropriate resource object, in place of the Table Component when the "Sample" button is clicked in the TableRow Component.
- Bonus: Use the Sample Component to render the response data. This a blank slate for you to showcase any skills you wish. Feel free to visit https://fitrankings.com to see where and how we're using this data.