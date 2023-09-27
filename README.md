# QueryNinja - SQL Query Editor

## Overview

QueryNinja is a web-based SQL query editor that allows users to write and execute SQL queries. It provides a user-friendly interface for writing SQL queries, viewing query results, and exporting data. This project is built using React and utilizes various plugins and packages to enhance functionality and styling.

## JavaScript Framework and Major Plugins/Packages

- *React*: v18.2.0, which provides a robust and efficient way to build user interfaces.

- *Ace Editor*: The `react-ace` package is used to incorporate the Ace code editor, which enables users to write and edit SQL queries in a code editor-like environment.

- *FontAwesome Icons*: To add visually appealing icons to buttons and elements in the user interface.

- *Vite*: Vite is the build tool used for development and production builds.

## Measuring Page Load time

- Lighthouse Extension: I have used the Lighthouse extension, integrated with Google Chrome's Developer Tools, to generate detailed performance reports. Lighthouse provides valuable metrics, including First Contentful Paint (FCP), Largest Contentful Paint (LCP), and other key performance indicators. My initial page load time was 5s.
- I opted for a few ways to reduce the page load time:
  - Dynamic Import and Lazy Loading: I applied code splitting to load certain components, such as the Queries component, only when they are required. This reduced the initial 
    bundle size, improving load times.
  - Async JavaScript Imports: I enhanced resource loading by adding the async attribute to JavaScript imports in my HTML files. This modification allows the browser to load 
   scripts asynchronously, preventing them from blocking the rendering of the page. Consequently, this optimization significantly reduced page load times.
- This resulted in an improved page load time of 4s.

[Deployed Link](https://dazzling-chebakia-31c95b.netlify.app/)
  
