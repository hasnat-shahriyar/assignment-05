// Method 1
function goToBlogPage() {
    // Redirect to the otherpage.html when the button is clicked
    window.location.href = 'blog-page/blog.html';
}

// Method 2
// Get a reference to the button element using its ID
// const navigateButton = document.getElementById('nav-button');

// // Add a click event listener to the button
// navigateButton.addEventListener('click', function () {
//     // Redirect to the otherpage.html when the button is clicked
//     window.location.href = 'blog-page/blog.html';
// });
// Calculate Area Function
// calculate.js

// Triangle Function
function calculateTriangleArea() {
    // Get element the values of input-b and input-h
    const base = parseFloat(document.getElementById('input-b').value);
    const height = parseFloat(document.getElementById('input-h').value);
  
    // Check if the values are numbers
    if (isNaN(base) || isNaN(height)) {
      alert('Please enter valid numbers for base and height.');
      return;
    }
  
    // Calculate the area of the triangle
    const area = 0.5 * base * height;
  
    // Display the result in the Result Area
    document.getElementById('calculated-result').innerText = `Area: ${area} cm²`;
  }
  
  // Rectangle Function
  function calculateRectangleArea() {
        // Get element the values of input-w and input-l
    const width = parseFloat(document.getElementById('input-w').value);
    const length = parseFloat(document.getElementById('input-l').value);
  
    // Check if the values are numbers
    if (isNaN(width) || isNaN(length)) {
      alert('Please enter valid numbers for width and length.');
      return;
    }
  
    // Calculate the area of the rectangle
    const area = width * length;
  
    // Display the result in the Result Area
    document.getElementById('calculated-result').innerText = `Area: ${area} cm²`;
  }
  
  // Event handlers to the buttons
  document.getElementById('calculate-btn-triangle').addEventListener('click', calculateTriangleArea);
  document.getElementById('calculate-btn-rectangle').addEventListener('click', calculateRectangleArea);
  