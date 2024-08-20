document.getElementById('generate').addEventListener('click', function() {
    var mini = parseInt(document.getElementById('minimum').value);
    var maxi = parseInt(document.getElementById('maximum').value);
    if (isNaN(mini) || isNaN(maxi)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }
    if (mini > maxi) {
        alert("Minimum value should be less than or equal to the maximum value.");
        return;
    }
    var rn= Math.floor(Math.random()*(maxi-mini+1))+mini;
    document.getElementById('answer').textContent = "Random Integer: " + rn;
});