//Galeria zdjęć

let current = 0;
const slides = document.querySelectorAll('.photo');

setInterval(function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);


//sekcja piosenek

const songs = document.querySelectorAll(".song");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes()
{
    const triggerBottom = window.innerHeight / 4 * 3

    songs.forEach(song => {
        const boxTop = song.getBoundingClientRect().top;

        if(boxTop < triggerBottom)
        {
            song.classList.remove("hide")
        }
        else
        {
            song.classList.add("hide");
        }
    });
}

//muzyka

const sounds = ['Rolling-in-the-Deep', 'Send-My-Love', 'Someone-Like-You', 'Set-Fire-To-The-Rain'];

sounds.forEach(sound => {
  const musicBtn = document.createElement('button');
  musicBtn.classList.add('musicBtn');

  let title = sound.replace(/-/g, ' ');         //zamiana wszystkich myślników na spacje
  musicBtn.innerText = title;
  musicBtn.classList.add(sound);
  musicBtn.classList.add('hidden');

  musicBtn.addEventListener('click', () => {      
    if(musicBtn.classList.contains('playing')) {
      stopSongs();
      remove_playing();
      hide_overview();
    } else {
      stopSongs();  
      document.getElementById(sound).play();
      remove_playing();
      musicBtn.classList.add('playing');
      hide_overview();
      musicBtn.classList.remove('hidden');
    }
  });

  document.getElementById('buttons').appendChild(musicBtn);
});

const musicBtns = document.querySelectorAll('.musicBtn');

function stopSongs()
{
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
  });
}

function hide_overview()
{  
  musicBtns.forEach(musicBtn => {
    musicBtn.classList.add('hidden');
  });
}

function remove_playing()
{
  musicBtns.forEach(musicBtn => {
    musicBtn.classList.remove('playing');
  });
}