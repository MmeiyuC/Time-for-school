let age
let day

// Connect "Submit" button to function
document.getElementById('submit').addEventListener('click', ageandday)

function ageandday () {
  // Get age and convert into an integer
  age = document.getElementById('age').value
  age = parseInt(age)

  // Get the day of the week
  day = document.getElementById('day').value

  // Check user's age and the day of the week
  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age > 18)) {
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}
