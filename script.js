// // function validateForm() {
// //     var x = document.forms["myForm"]["fullname"].value;
// //     if (x == "") {
// //       alert("Name must be filled out");
// //       return false;
// //     }
// //   }
// $(document).ready(function(){
//   $("#regestrationform").validate({
//     rules:{
//       name: {
//         required: true,
//         minlength: 3
//       },
//       email:{
//         email: true,
//         required: true
//       },
//       password: {
//         required: true,
//         minlength:5
//       },
//       confirmpassword: {
//         required: true,
//         minlength:5,
//         equalTo: "#password"
//       },
//       address: "required",
//       policy: "required",
//       messages: {
//         name: {
//           required :"Please enter name",
//           minlength: "Name must be above 3 letters"
//       },
//       password: {
//         required: "Please enter password",
//         minlength: "Must be 5"
//       },
//       confirmpassword: {
//         required: "Please enter confirm password",
//         minlength: "Must be 5",
//         equalTo: "Same as password"
//       },
//       policy: "Accept terms & conditions"
//       }
//     }
//   })
//   $.validator.addMethod( "gmail.com", function( value, element ) {
//     return this.optional( element ) || /^.+@gmail.com$/i.test( value );
//   }, "Emailid invalid" );
// })

// window.alert("lkjlk");
