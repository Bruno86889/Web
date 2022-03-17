const canvas = document.getElementsByTagName("canvas")[0]
const canvas2 = document.getElementsByTagName("canvas")[1]

const video = document.getElementsByTagName("video")[0]

const ctx = canvas.getContext("2d")
const ctx2 = canvas2.getContext("2d")

video.addEventListener("play", () => {
    const width = 225
    const height = 400

    console.info(width, height);
    ctx.drawImage(video, 0, 0, width, height)
    var frame = ctx.getImageData(0, 0, 225, 400)
    console.log(frame);

    ctx2.putImageData(frame,0,0)
})


