// //submit product details form using ajax
// $("#product-details").submit(function (e) {
//   e.preventDefault(); // avoid to execute the actual submit of the form.
//   var form = $(this);
//   var url = form.attr("action");
//   // serializes the form's elements.
//   const data =
//     form.serialize() + `&pid=p${Math.floor(Math.random() * 999999999)}`;
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: data,
//   })
//     .done(function (data) {
//       //reset form after submitting using jquery
//       $("#product-details").trigger("reset");
//       alert("product successfully listed");
//     })
//     .fail(function (xhr, data) {
//       $("#product-details").trigger("reset");
//       alert("some error occuerd");
//     });
//   // this will stop it from changing the page, and you will still get the information back.
//   return false;
// });
