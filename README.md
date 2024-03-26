<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">AIRBNB_CLONE</h1>
</p>
<p align="center">
	<!-- Shields.io badges not used with skill icons. --><p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=css,js,md,react,tailwind,html&theme=light">
	</a></p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
</details>
<hr>

##  Overview

The Airbnb project is a web application designed to emulate the functionality of the popular accommodation rental platform Airbnb. Built using Next.js, React, and Tailwind CSS, the project aims to provide users with a familiar and intuitive experience for browsing and booking accommodations.

---

##  Features

1. Search Functionality
Users can search for accommodations based on location, dates, and number of guests.
The search results are dynamically populated and displayed on the page.
2. Accommodation Listings
Detailed information about accommodations, including images, location, title, description, star rating, price, and total price, is provided.
Users can explore various accommodation options and view pricing details.
3. Interactive Map View
Accommodation locations are showcased on an interactive map, allowing users to visualize their geographical distribution.
Users can click on map markers to view additional information about specific accommodations.
4. Responsive Design
The application is designed to be responsive, ensuring optimal viewing and usability across different devices and screen sizes.


---

##  Repository Structure

```sh
└── Airbnb_Clone/
    ├── README.md
    ├── components
    │   ├── Banner.js
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── InfoCard.js
    │   ├── LargeCard.js
    │   ├── Mappy.js
    │   ├── MediumCard.js
    │   └── SmallCard.js
    ├── jsconfig.json
    ├── next.config.js
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── _app.js
    │   ├── api
    │   ├── index.js
    │   └── search.js
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   ├── next.svg
    │   └── vercel.svg
    ├── styles
    │   └── globals.css
    └── tailwind.config.js
```

---

##  Modules


<details closed><summary>InfoCard</summary>

| File                                                                                                | Summary                         |
| ---                                                                                                 | ---                             |
| [InfoCard.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/InfoCard.js)     | The `InfoCard` component in this project simulates the display of property cards in the Airbnb search results page. It includes information such as location, title, description, star rating, price, and total price. This component is designed to be reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Display property cards with customizable information.
- Responsive design for various screen sizes.
- Hover effects for improved user interaction.
- Integration with Next.js Image component for optimized image loading.

## Usage

To use the `InfoCard` component in your Next.js project, follow these steps:

1. Import the `InfoCard` component: `import InfoCard from './path/to/InfoCard'`.
2. Pass props to the `InfoCard` component to customize the information displayed.
3. Customize the styling as needed using Tailwind CSS classes.

</details>

<details closed><summary>SmallCard</summary>

| File                                                                                                | Summary                         |
| ---                                                                                                 | ---                             |
| [SmallCard.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/SmallCard.js)   | 
The `SmallCard` component in this project simulates the display of small cards containing location information. It includes properties such as an icon, location name, and distance. This component is designed to be reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Display small cards with customizable location information.
- Responsive design for various screen sizes.
- Hover effects for improved user interaction.

## Usage

To use the `SmallCard` component in your Next.js project, follow these steps:

1. Import the `SmallCard` component: `import SmallCard from './path/to/SmallCard'`.
2. Pass props to the `SmallCard` component to customize the location information displayed.
3. Customize the styling as needed using Tailwind CSS classes.

</details>

<details closed><summary>MediumCard</summary>
| [MediumCard.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/MediumCard.js) | The `MediumCard` component in this project simulates the display of medium-sized cards containing images and titles. It includes properties such as an image and a title. This component is designed to be reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Display medium-sized cards with customizable images and titles.
- Responsive design for various screen sizes.
- Hover effects for improved user interaction.

## Usage

To use the `MediumCard` component in your Next.js project, follow these steps:

1. Import the `MediumCard` component: `import MediumCard from './path/to/MediumCard'`.
2. Pass props to the `MediumCard` component to customize the image and title displayed.
3. Customize the styling as needed using Tailwind CSS classes.

</details>

<details closed><summary>Header</summary>
	
| [Header.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/Header.js)         | The `Header` component in this project simulates the header section of the Airbnb website, including a search bar, date range picker, and user controls. It allows users to search for locations, select dates, and adjust the number of guests. This component is designed to be reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Search bar with autocomplete functionality.
- Date range picker for selecting check-in and check-out dates.
- User controls for becoming a host and language settings.
- Responsive design for various screen sizes.

## Usage

To use the `Header` component in your Next.js project, follow these steps:

1. Import the `Header` component: `import Header from './path/to/Header'`.
2. Pass props to the `Header` component to customize its behavior, such as placeholder text for the search bar.
3. Customize the styling as needed using Tailwind CSS classes.


</details>

<details closed><summary>LargeCard</summary>

 
| [LargeCard.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/LargeCard.js)   | The LargeCard component is structured as a section element and includes an image, title, description, and button. It utilizes the Next.js Image component for optimized image loading and responsive design. The component is designed to be interactive, with a cursor pointer indicating clickable behavior.

## Features

- Display large cards with images, titles, descriptions, and action buttons.
- Responsive design with optimized image loading using the Next.js Image component.
- Customizable content, including image source, title, description, and button text.

## Usage

To use the LargeCard component in your React project, follow these steps:

1. Import the LargeCard component into your project: `import LargeCard from './path/to/LargeCard'`.
2. Include the LargeCard component within your project's layout or content sections.
3. Pass props to the LargeCard component to customize the content displayed, including the image source, title, description, and button text.

</details>

<details closed><summary>Mappy</summary>

 
| [Mappy.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/Mappy.js)           | The `Mappy` component in this project simulates the map view of the Airbnb website, displaying markers for search results and popups with additional information when markers are selected. This component utilizes React Map GL for map rendering and interaction. It allows users to explore search results visually on a map. This component is designed to be reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Display search results on an interactive map.
- Markers for each search result with clickable popups showing additional information.
- Responsive design for various screen sizes.

## Usage

To use the `Mappy` component in your Next.js project, follow these steps:

1. Import the `Mappy` component: `import Mappy from './path/to/Mappy'`.
2. Pass the `searchResults` prop to the `Mappy` component, containing an array of search results with latitude and longitude information.
3. Customize the styling and behavior as needed using React Map GL and Tailwind CSS.

</details>

<details closed><summary>Banner</summary>

 
| [Banner.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/Banner.js)         | The `Banner` component in this project simulates the banner section of the Airbnb website, displaying an image with overlay text and a button. This component is designed to be responsive, adjusting its height based on the screen size. It provides a visually appealing introduction to the website's content. This component is reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Responsive banner with adjustable height for various screen sizes.
- Overlay text and button for engaging user interaction.
- Stylish design with Tailwind CSS classes.

## Usage

To use the `Banner` component in your Next.js project, follow these steps:

1. Import the `Banner` component: `import Banner from './path/to/Banner'`.
2. Include the `Banner` component within your project's layout or homepage.
3. Customize the image source, overlay text, and button text as needed.

</details>

<details closed><summary>Footer</summary>

 
| [Footer.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/components/Footer.js)         | The `Footer` component in this project simulates the footer section of the Airbnb website, providing information about various aspects such as company details, community, hosting, and support. It is designed to be responsive and visually appealing, with a grid layout for organizing content. This component is reusable and customizable, making it easy to integrate into any Next.js project that requires similar functionality.

## Features

- Grid layout for organizing footer content into multiple columns.
- Information about company, community, hosting, and support.
- Responsive design for various screen sizes.

## Usage

To use the `Footer` component in your Next.js project, follow these steps:

1. Import the `Footer` component: `import Footer from './path/to/Footer'`.
2. Include the `Footer` component at the bottom of your project's layout or homepage.
3. Customize the content as needed, adding or removing sections and updating the text.

</details>

<details closed><summary>_app</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [_app.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/pages/_app.js)     | The global styles are defined in the `globals.css` file, which is imported into the project to maintain consistent styling across components. Additionally, a progress bar from the `@badrap/bar-of-progress` library is implemented to indicate page loading progress. The progress bar is customized with a specific size, color, and delay. Event listeners are attached to the router to update the progress bar accordingly on route changes. This setup ensures a seamless user experience during navigation within the application.

## Features

- Global styles for maintaining consistent design across components.
- Progress bar implementation to indicate page loading progress.
- Customizable progress bar appearance and behavior.

## Usage

To use the global styles and progress bar implementation in your Next.js project, follow these steps:

1. Import the `globals.css` file into your project's global styles: `import "@/styles/globals.css";`.
2. Customize the global styles as needed to match your project's design requirements.
3. Ensure that the `@badrap/bar-of-progress` library is installed in your project.
4. Implement the progress bar setup in your `_app.js` file as shown in the provided code snippet.
5. Customize the progress bar options such as size, color, and delay according to your preferences.
6. Include the `Component` and `pageProps` props in the return statement of your `_app.js` file to ensure proper rendering of pages.


</details>

<details closed><summary>index</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [index.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/pages/index.js)   | The application provides users with the ability to explore nearby locations and discover accommodations to live anywhere. It utilizes Next.js for server-side rendering and fetching data from API endpoints to populate content dynamically. Components such as `Header`, `Banner`, `SmallCard`, `MediumCard`, `LargeCard`, and `Footer` contribute to the layout and functionality of the application, offering a seamless user experience.

## Features

- Explore nearby locations with detailed information such as distance and location.
- Discover accommodations for living anywhere with a variety of options.
- Responsive design for optimal viewing on different devices.
- Server-side rendering for efficient content delivery.

## Usage

To use Chevo Airbnb, follow these steps:

1. Clone the repository or download the project files.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm run dev` or `yarn dev`.
4. Explore nearby locations and accommodations, and enjoy the experience!

</details>

<details closed><summary>search</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [search.js](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/master/pages/search.js) | The Search page is designed to provide users with a seamless experience when searching for accommodations. It utilizes Next.js for server-side rendering and fetching data from an API endpoint to populate search results dynamically. Components such as `Header`, `InfoCard`, and `Mappy` contribute to the layout and functionality of the page, offering users various options for exploring available accommodations.

## Features

- Search for accommodations based on location, dates, and number of guests.
- Display search results with detailed information such as location, title, description, star rating, price, and total price.
- Interactive map view for visualizing search results geographically.
- Responsive design for optimal viewing on different devices.

## Usage

To use the Search page in the Chevo Airbnb application, follow these steps:

1. Navigate to the Search page from the application's navigation menu or search bar.
2. Enter the desired location, dates, and number of guests in the search form.
3. Explore the search results displayed on the page, including accommodation details and pricing information.
4. Utilize filters and sorting options to refine search results according to preferences.
5. Click on individual accommodation cards or map markers for more information and booking options.

</details>

---

##  Getting Started

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the Airbnb_Clone repository:
>
> ```console
> $ git clone https://github.com/Iloke-Alusala/Airbnb_Clone
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd Airbnb_Clone
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run Airbnb_Clone using the command below:
> ```console
> $ node app.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---


##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Iloke-Alusala/Airbnb_Clone/issues)**: Submit bugs found or log feature requests for the `Airbnb_Clone` project.
- **[Submit Pull Requests](https://github.com/Iloke-Alusala/Airbnb_Clone/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Iloke-Alusala/Airbnb_Clone/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Iloke-Alusala/Airbnb_Clone
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Iloke-Alusala/Airbnb_Clone/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Iloke-Alusala/Airbnb_Clone">
   </a>
</p>
</details>

---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
