const videoEl = document.querySelector("video");
const button = document.querySelector(".btn");

const selectStream = async () => {
  try {
    // select stream
    const stream = await navigator.mediaDevices.getDisplayMedia();
    // stream pass to video
    videoEl.srcObject = stream;
    // video play
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    alert("Sorry,something went wrong");
  }
};

// picture in picture if button click;
const buttonClick = async () => {
  button.disabled = true;
  await videoEl.requestPictureInPicture();
  button.disabled = false;
};

button.addEventListener("click", buttonClick);

selectStream();
