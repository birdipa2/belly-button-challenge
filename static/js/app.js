const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let d3Output = d3.json(url);
console.log(d3Output)

// Function to create the bar chart
function createBarChart(dataObj) {
  // Get the top 10 OTUs
  const top10OTUs = dataObj.sample_values.slice(0, 10).reverse();
  const top10Labels = dataObj.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
  const top10HoverText = dataObj.otu_labels.slice(0, 10).reverse();

  // Create the trace
  const trace = {
    x: top10OTUs,
    y: top10Labels,
    type: "bar",
    orientation: "h",
    text: top10HoverText,
    hovertemplate: "%{text}<extra></extra>"
  };

  // Create the data array
  const traceData = [trace];

  // Define the layout
  const layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTU IDs" }
  };

  // Plot the chart
  Plotly.newPlot("bar", traceData, layout);
}

// Function to create the bubble chart
function createBubbleChart(dataObj) {
  // Create the trace
  const trace = {
    x: dataObj.otu_ids,
    y: dataObj.sample_values,
    mode: "markers",
    marker: {
      size: dataObj.sample_values,
      color: dataObj.otu_ids,
      colorscale: "Earth"
    },
    text: dataObj.otu_labels,
    hovertemplate: "OTU ID: %{x}<br>Sample Value: %{y}<br>OTU Label: %{text}<extra></extra>"
  };

  // Create the data array
  const traceData = [trace];

  // Define the layout
  const layout = {
    title: "Samples",
    xaxis: { title: "OTU IDs" },
    yaxis: { title: "Sample Values" },
    showlegend: false
  };

  // Plot the chart
  Plotly.newPlot("bubble", traceData, layout);
}

// Function to create the gauge chart
function createGaugeChart(wfreq) {
    // Create the trace
    const trace = {
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 9] },
        steps: [
          { range: [0, 1], color: 'rgba(255, 241, 156, .5)' },
          { range: [1, 2], color: "rgba(242, 239, 139, .5)" },
          { range: [2, 3], color: "rgba(221, 237, 122, .5)" },
          { range: [3, 4], color: "rgba(199, 236, 105, .5)" },
          { range: [4, 5], color: "rgba(178, 235, 89, .5)" },
          { range: [5, 6], color: "rgba(137, 208, 66, .5)" },
          { range: [6, 7], color: "rgba(96, 181, 44, .5)" },
          { range: [7, 8], color: "rgba(55, 154, 22, .5)" },
          { range: [8, 9], color: 'rgba(14, 127, 0, .5)' }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: wfreq,
          shape: "angular"
        },
        bar: { color: "black" }
      }
    };
  
    // Create the data array
    const traceData = [trace];
  
    // Define the layout
    const layout = {
      width: 500,
      height: 400,
      margin: { t: 0, b: 0 }
    };
  
    // Plot the chart
    Plotly.newPlot("gauge", traceData, layout);
  }
  
  
  

// Function to update the chart and metadata based on the selected dropdown value
function optionChanged(selectedValue) {
  // Read the JSON data
  d3.json(url).then(function(jsonData) {
    // Get the selected sample
    const selectedSample = jsonData.samples.find(sample => sample.id === selectedValue);
    const selectedMetadata = jsonData.metadata.find(metadata => metadata.id.toString() === selectedValue);

    // Create the charts
    createBarChart(selectedSample);
    createBubbleChart(selectedSample);
    createGaugeChart(selectedMetadata.wfreq);
  });
}

// Function to initialize the page
function init() {
  // Read the JSON data
  d3.json(url).then(function(jsonData) {
    // Get the dropdown menu
    const dropdown = d3.select("#selDataset");

    // Add the sample IDs to the dropdown options
    jsonData.names.forEach(function(name) {
      dropdown.append("option").text(name).property("value", name);
    });

    // Update the chart and metadata when a new option is selected
    dropdown.on("change", function() {
      const selectedValue = dropdown.property("value");
      optionChanged(selectedValue);
    });

    // Get the first sample and create the initial chart and metadata
    const firstSample = jsonData.samples[0];
    const firstMetadata = jsonData.metadata[0];
    createBarChart(firstSample);
    createBubbleChart(firstSample);
    createGaugeChart(firstMetadata.wfreq);

    // Display the initial sample metadata
    const metadataDiv = d3.select("#sample-metadata");
    Object.entries(firstMetadata).forEach(([key, value]) => {
      metadataDiv.append("p").text(`${key}: ${value}`);
    });
  });
}

// Initialize the page
init();
