# belly-button-challenge
# Bellybutton Biodiversity Dashboard

This is a web application that visualizes belly button biodiversity data using interactive charts. It allows users to explore the dataset by selecting different samples from a dropdown menu and displays the corresponding bar chart, bubble chart, and gauge chart.

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Technologies

The application is built using the following technologies:

- HTML
- CSS
- JavaScript
- D3.js
- Plotly.js

## Features

The Bellybutton Biodiversity Dashboard includes the following features:

- Bar Chart: Displays the top 10 OTUs found in the selected individual. Uses sample_values as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext.
- Bubble Chart: Displays each sample as a bubble chart. Uses otu_ids for the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.
- Gauge Chart: Displays the weekly washing frequency of the individual using a gauge chart. The chart updates whenever a new sample is selected.

## Usage

To use the Bellybutton Biodiversity Dashboard, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Open the `index.html` file in a web browser.

Upon opening the web application, you will see the dashboard with the initial sample selected. Use the dropdown menu to select different samples and observe the updated charts and metadata.

## Deployment

The Bellybutton Biodiversity Dashboard can be deployed to a hosting service such as GitHub Pages. To deploy the application, follow these steps:

1. Create a GitHub repository for the project.
2. Push the code to the GitHub repository.
3. Enable GitHub Pages in the repository settings and choose the branch to deploy from.

Once deployed, the web application will be accessible via the deployment URL.

## Contact

If you have any questions or feedback about this script, please feel free to contact me at param.birdi@utoronto.ca.

## Acknowledgments

This code was written by Paramdeep Singh Birdi as part of a project for a data analysis course.

Most of the data used in this project was provided by the course instructors.
