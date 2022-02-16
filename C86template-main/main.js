var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
background_image = "BirthdayImage.jpg";

var img_array= ["BirthdayImage", "BirthdayImage1", "BirthdayImage2", "BirthdayImage3 ", "BirthdayImage4"];



function new_image() 
{
  fobric.image.fromURL('BirthdayImage', function(Img) {
block_Image_object = Img;

block_Image_object.scaleToWidth(700);
block_Image_object.scaleToHeight(510);
block_Image_object.set({
top:0,
left:0
});
canvas.add(block_Image_object);
  });
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function playSound() {
    x.play("myAudio");
}
