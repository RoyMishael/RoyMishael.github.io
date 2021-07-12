function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}

let isRunning = false;
let interval;
let newImage;

function random_image() {
  if (!isRunning) {
    isRunning = true;
    document.getElementById("jsstyle").innerHTML = "Stop";
    var arrImages = [
      {
        src: "../images/Roy_Mishael.jpg",
        width: "320",
        height: "180",
      },
      {
        src: "../images/Banana.jpg",
        width: "320",
        height: "180",
      },
      {
        src: "../images/Apple.jpg",
        width: "320",
        height: "180",
      },
      {
        src: "../images/Fisfus.jpg",
        width: "320",
        height: "180",
      },
    ];

    var buffer = [];
    for (var i = 0, j = arrImages.length; i < j; i++) {
      buffer[i] = new Image();
      buffer[i].src = arrImages[i].src;
      buffer[i].width = arrImages[i].width;
      buffer[i].height = arrImages[i].height;
    }

    interval = setInterval(() => {
      // create random image number
      function getRandomImage(min, max) {
        return buffer[Math.floor(Math.random() * (max - min + 1)) + min];
      }

      newImage = getRandomImage(0, buffer.length - 1);

      // remove the previous images
      var images = document.getElementsByTagName("img");
      var lImages = images.length;
      for (var i = 0; i < lImages; i++) {
        images[0].parentNode.removeChild(images[0]);
      }
      // display the image

      document.test.appendChild(newImage);
    }, 50);
  } else {
    isRunning = false;
    document.getElementById("jsstyle").innerHTML = "Start";
    clearInterval(interval);

    if (newImage.getAttribute("src") == "../images/Roy_Mishael.jpg")
      alert("Champion!");
    else alert("Better luck next time");
  }
}
