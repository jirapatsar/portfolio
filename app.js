function toggle_dark_mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    var Nav_Home = document.getElementById('Nav_Home');
    var Nav_Project = document.getElementById('Nav_Project');
    var Nav_About = document.getElementById('Nav_About');
    var Nav_Contact = document.getElementById('Nav_Contact');

    Nav_Home.classList.toggle("dark-mode-nav");
    Nav_Project.classList.toggle("dark-mode-nav");
    Nav_About.classList.toggle("dark-mode-nav");
    Nav_Contact.classList.toggle("dark-mode-nav");
    // var icons = document.getElementById('theme-toggle')
    var sun = document.getElementById('sun');
    var moon = document.getElementById('moon');
    var sun_beams = document.getElementById('sun-beams');
    if(element.classList.contains("dark-mode")){
        console.log("aaa")
        moon.classList.remove('fill-dark');
        moon.classList.toggle('fill-light');
        
        sun.classList.remove('fill-light');
        sun.classList.toggle("fill-dark");
        sun_beams.classList.remove('fill-light');
        sun_beams.classList.toggle("fill-dark");
    }else{
        console.log("bbb")
        moon.classList.remove('fill-light');
        moon.classList.toggle('fill-dark');

        sun.classList.remove('fill-dark')
        sun.classList.toggle("fill-light");
        sun_beams.classList.remove('fill-dark')
        sun_beams.classList.toggle("fill-light");
        // circle_moon.classList.toggle("moon-circle")

    }
    
}