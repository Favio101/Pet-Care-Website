// Dropdown toggle
document.querySelectorAll('.dropdown').forEach(function(dd){
  var link = dd.querySelector('a');
  var menu = dd.querySelector('.dropdown-menu');
  link.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('show');
  });
  document.addEventListener('click', function(e){
    if(!dd.contains(e.target)){ menu.classList.remove('show'); }
  });
});
// Active nav highlight
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===path){a.classList.add('active');}
});
// Consultation form handling
const form=document.getElementById('consultForm');
if(form){
form.addEventListener('submit',function(e){
 e.preventDefault();
 if(!form.checkValidity()){form.reportValidity();return;}
 form.classList.add('hidden');
 document.getElementById('thankyou').classList.remove('hidden');
});}
