var image

function readURL(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
    image = input.files[0]
  }
}


function postImage(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('image', image);

    fetch('/image/', {
        method: 'POST',
        body: formData
    }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );


}