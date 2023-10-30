# <strong>AI Essence: An AI Article Summarizer

## Table Of Contents

- [Description](#description)
- [Screenshot](#screenshot)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Portfolio](#portfolio)
- [License](#license)

<img src="https://img.shields.io/github/repo-size/alghaibb/ai-summarizer?style=plastic" alt="GitHub repo size"><br>
<img src="https://img.shields.io/github/languages/top/alghaibb/ai-summarizer?style=plastic" alt="GitHub top language"></p>

## Description

The application, at its core, is a user-friendly web platform designed to summarize online articles. With an intuitive interface, it streamlines the process of extracting key information from vast amounts of web conten

<a href="#table-of-contents">Back to Table of Contents</a>
### Motivation

In today's information age, the internet is saturated with an overwhelming volume of content. While this bounty of information is invaluable, it presents a distinct challenge: How does one sift through endless articles to extract the essence of the content without investing excessive time? This challenge was the genesis of our article summarization application.

<a href="#table-of-contents">Back to Table of Contents</a>
### Why I Built This

I created this application to help users quickly understand the core of an article without reading it entirely. Additionally, I added a light/dark mode for a comfortable reading experience, addressing the varied preferences of users and enhancing overall usability.

<a href="#table-of-contents">Back to Table of Contents</a>
### Problem Solved

The application bridges the gap between information overload and the time-starved modern individual. With a simple copy-paste mechanism, users can retrieve concise summaries of articles, aiding in quick comprehension and decision-making. Instead of wading through verbose content, users get the crux of the article, saving time and cognitive effort.

<a href="#table-of-contents">Back to Table of Contents</a>
### What I Learned

Building this application was not just about solving a problem, but also a journey of growth and discovery.

**Technical Skills:**  
I honed my proficiency with React, particularly diving deeper into hooks like useState and useEffect. Additionally, integrating Tailwind for styling and theming provided a hands-on experience with modern CSS frameworks.

**UX/UI Design:**  
The importance of intuitive design was reiterated. Realizing that users might return to previously summarized articles led to the addition of a 'Previously Searched' feature, emphasizing the role of anticipating user needs in design.

**Problem Solving:**  
The project underscored the significance of iterative development. Initial versions of the application served the basic summarization function, but feedback and user testing led to refinements like the light/dark mode toggle.

**Persistence and Patience:**  
As with any project, there were hurdles — from debugging unexpected behaviors to refining the summary algorithm for optimal results. Each challenge reinforced the values of persistence, patience, and continuous learning.

<a href="#table-of-contents">Back to Table of Contents</a>
## Screenshot

<p align="center">
  <img alt="Live gif of screenshot" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnMxaGVmMjRxbXNsaXc1bTlocnY5a2E2NDdoZ2J1cWZhenBpYzRzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/36EqDqo9j8OYHsIgl7/giphy.gif" width="400px"><br>
  Live GIF Demonstration of Project
</p>

<a href="#table-of-contents">Back to Table of Contents</a>
## Installation

### 1. Clone the Repository:
Clone the project to your local machine using:
	
  
	git clone https://github.com/alghaibb/ai-summarizer
	cd ai-summarizer
  


### 2. Install Dependencies:

We use npm for dependency management. Install the required dependencies with:

	npm install

### 3. Setting up Tailwind CSS:

If Tailwind CSS isn't already set up in the project, follow these steps:

	npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p

[Tailwind CSS](https://tailwindcss.com/docs/installation)

### 4. Setting up Vite:

Ensure Vite is set up in the project. If it isn't, you can add it via:

	npm create vite@latest

[Vite](https://vitejs.dev/guide/)

### 5. Setting up Redux Toolkit:

To add Redux Toolkit to the project, use:

	npm install @reduxjs/toolkit

If you need React bindings:

	npm install react-redux

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

### 6. Running the Application:

With all dependencies and configurations set up, run the development server using:

	npm run dev

After executing the command, visit the port displayed in your console

<a href="#table-of-contents">Back to Table of Contents</a>
## Usage

After you've successfully the application, here's how to use it:

1. **Start the Application**: To start the application, navigate to the project directory in your terminal and run:

    ```bash
    npm run dev

This will start the development server, and the application should open in your default web browser.

2. **Enter an Article URL**: On the main page, you'll see an input box where you can paste or type in the URL of an online article you'd like to summarize.

3. **Get the Summary**: Click the submit button (or hit the `Enter` key) after entering the URL. In a short while, the application will provide a concise summary of the article.

4. **Switch Themes**: You can toggle between light and dark mode by using the theme switch button located on the top right of the application.

5. **Review Previous Searches**: The app saves your previous article searches for easy access. Just scroll down on the main page to see your previously summarized articles. Click on any previous article to view its summary again.

6. **Copy Article URL**: Next to each previously summarized article, there's a copy button. Clicking this will copy the article's URL to your clipboard.

Remember, the application uses RapidAPI's Article Extractor and Summarizer, so ensure you have an active internet connection for the best experience.

<a href="#table-of-contents">Back to Table of Contents</a>
## Contribution

Firstly, thank you for considering contributing to AI-Summarizer! We appreciate any and all help, whether it's a small typo correction or a new feature. Here's how you can help:

### Reporting Bugs

1.  Ensure the bug was not already reported: Before submitting a bug report, please search through our [issues](https://github.com/alghaibb/ai-summarizer/issues) to see if someone has already reported the issue.

2.  Submit a detailed bug report: If the issue has not been reported, open a new issue. Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior.

### Suggesting Enhancements

1.  Check the issues list: First, check if the enhancement has already been suggested by browsing the [issues](https://github.com/alghaibb/ai-summarizer/issues).

2.  Provide detailed information: When opening an issue for an enhancement, please provide as much detail as possible, including the steps that you imagine the implementation would require.

### Pull Requests

1.  Fork the Repository: Start by forking the [AI-Summarizer repository](https://github.com/alghaibb/ai-summarizer).

2.  Create a Branch: Create a branch in your forked repo based on the main branch.

3.  Commit Your Changes: Commit the changes you've made, ensuring you follow the [commit message conventions](https://www.conventionalcommits.org/en/v1.0.0/).

4.  Push to the Branch: Push your branch changes to your forked repository.

5.  Open a Pull Request: Navigate to the original [AI-Summarizer repository](https://github.com/alghaibb/ai-summarizer) and click "New pull request". Choose your fork and then the branch you've been working on. Submit your pull request with a meaningful title and a clear description of the changes.

6.  Address Review Comments: Once the pull request is opened, maintainers will review your changes. Address any comments or feedback they provide.

### Code Style and Standards

Please ensure your code adheres to the project's existing coding conventions and styles. This ensures uniformity in the codebase and makes it easier for other contributors to understand your changes.

<a href="#table-of-contents">Back to Table of Contents</a>
## Tests

Before contributing or making changes to the AI-Summarizer, it's crucial to run tests to ensure the application's stability. Here are the steps to run tests:

### Setting up the Testing Environment

1. Clone the Repository:

    ```bash
    git clone https://github.com/alghaibb/ai-summarizer.git

2. Navigate to the Project Directory:

    ```bash
    cd ai-summarizer

3. Install Dependencies:

    ```bash
    npm install
    

### Running Tests

1. Run the Test Suite: Execute the following command to run all tests.

    ```bash
    npm test

2. View Test Results: After running the tests, the results will be displayed in the console. Ensure all tests pass without any errors or failures.

3. Run Specific Tests (Optional): If you wish to run specific tests or a single test file, you can provide the test file's name or path as an argument.

    ```bash
    npm test [test-file-name]

### Reporting Test Issues

1. If you encounter any failing tests or unexpected behavior during testing, please document the issue with as much detail as possible.

2. Open a new [issue](https://github.com/alghaibb/ai-summarizer/issues) in the GitHub repository, providing the test's name, a brief description of the problem, and any error messages or screenshots.

<a href="#table-of-contents">Back to Table of Contents</a>
## Portfolio

Visit my portfolio:
[Visit my portfolio](https://alghaibb-portfolio.vercel.app/)

<a href="#table-of-contents">Back to Table of Contents</a>
## License

This application is covered under the following licence:
<p><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue" alt="License"></p>

