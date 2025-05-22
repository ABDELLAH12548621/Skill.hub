const lessons = [
  {
    title: "Introduction to the Python Language",
    description: "Learn the basics of Python with this practical lesson..",
    videoId: "rfscVS0vtbw"
  },
  {
    title: "HTML and CSS Course for Beginners",
    description: "A comprehensive practical guide to learning web design using HTML and CSS..",
    videoId: "UB1O30fR-EE"
  },
  {
    title: "Basics of JavaScript",
    description: "The most important concepts of JavaScript with simple and clear examples..",
    videoId: "PkZNo7MFNFg"
  },
  {
    title: "Introduction to Digital Marketing",
    description: "Explanation of digital marketing concepts and its key tools..",
    videoId: "nU-IIXBWlS4"
  }
];

// DOM Elements
const lessonsList = document.getElementById('lessons');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');

// Render lessons
function renderLessons() {
  lessons.forEach(lesson => {
    const li = document.createElement('li');
    li.textContent = lesson.title;

    li.addEventListener('click', () => {
      videoPlayer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
      videoTitle.textContent = lesson.title;
      videoDescription.textContent = lesson.description;
    });

    lessonsList.appendChild(li);
  });
}

renderLessons();