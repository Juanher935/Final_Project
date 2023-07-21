document.addEventListener("DOMContentLoaded", function() {
    // Get the elements from the HTML file
    var widthInput = document.getElementById('width');
    var lengthtInput = document.getElementById('length');
    var computeBtn = document.getElementById('btn');
    var estimateResult = document.getElementById('estimate-result');

    // Add event listener to the compute button
    computeBtn.addEventListener('click', calculateEstimate);

    // Function to calculate BMI
    function calculateEstimate() {
    var width = parseFloat(widthInput.value);
    var length = parseFloat(lengthtInput.value);
    
    // Check if the inputs are valid numbers
    if (isNaN(width) || isNaN(length)) {
        estimateResult.value = 'Invalid input';
        return;
    }
    
    // Calculate BMI
    var estimate = (width * length) * 1.25;
    
    // Display the BMI result
    estimateResult.value = '$' + estimate.toFixed(0);
    }
});