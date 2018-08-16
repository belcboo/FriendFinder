$("#submit").on("click", function(event){
  event.preventDefault();

  //Validate if all fields were selected
  function validateForm() {

    var isValid = true;

    $(".form-control").each(function() {
      if ($(this).val() === "Select an option") {
        isValid = false;
        console.log("Inside IF" + isValid);
      }
    });
    return isValid;
  }

  if(validateForm()){
    var userData = {
      name : $("#survey_name").val(),
      photo : $("#survey_link").val(),
      scores: [
        $("#survey_q1").val(),
        $("#survey_q2").val(),
        $("#survey_q3").val(),
        $("#survey_q4").val(),
        $("#survey_q5").val(),
        $("#survey_q6").val(),
        $("#survey_q7").val(),
        $("#survey_q8").val(),
        $("#survey_q9").val(),
        $("#survey_q10").val()
      ]
    };

    //Cleaning the fields.
    $("#survey_name").val("");
    $("#survey_link").val("");



  } else{
    alert("Please fill out all fields before submitting.")
  }
})