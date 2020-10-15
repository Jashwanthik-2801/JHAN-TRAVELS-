function blockDates(){
var today = new Date().toISOString().split('T')[0];
var trial = new Date(today);
trial.setDate(trial.getDate() + 1);
var today1 = new Date(trial).toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today1);
}