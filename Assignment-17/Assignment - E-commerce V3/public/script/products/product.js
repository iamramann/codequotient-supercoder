import { getCurrentDateAndTime } from "../utilities/dateandtime.min.js";
import { update_cart_value } from "../cart/update_cart_value.min.js";

(function () {
  var total_item_in_cart = 0;
  //update cart value each time page loads
  /*$.ajax({
    type: "GET",
    url: "/checkout",
    success: function (cart_products_string) {
      var length = 0;
      var cart_products_array = JSON.parse(cart_products_string);
      cart_products_array.forEach(function (x, xindex) {
        length += parseInt(x.quantity);
      });

      total_item_in_cart += length;

      //display cart values load from file
      update_cart_value(total_item_in_cart);
      // btn_cart.html(` <i class="fas fa-shopping-cart"></i> Cart (${length})`);
    },
  });*/

  //ajax to get data from the storage
  $.ajax("/get_product_list", {
    method: "GET",
    //this function calls automatically on success of ajax request and data is recieved inside product_list_string
    success: function (product_list_string) {
      //parse recieved data in usable format
      const product_list_array = JSON.parse(product_list_string);

      //check for length of data allow only if it has some content
      if (product_list_array.length) {
        product_list_array.forEach(function (x, xindex) {
          //create html for each product on run time with their values
          var price = x.price;
          var discounted_price = price - Math.round((price / 100) * 30);
          const div_first = $(`<div class="card" id='${x.pid}'></div>`);
          const img = $(
            `<img src=".${x.image_url}" alt="${x.product_name}" title="${x.product_name}"   />`
          );

          //disable someone downloading image using right click context menu
          $("img").bind("contextmenu", function (e) {
            return false;
          });

          //disable user to drag image on the screen
          $("img").on("dragstart", function (e) {
            return false;
          });

          const div_second = $(`<div class="grid"></div>`);
          const btn_add = $(
            `<button class="btn btn-add"><i class="fas fa-cart-plus"></i>&nbsp;Add to cart</button>`
          );
          const btn_description = $(
            `<button class="btn btn-description"><i class="fa fa-eye"></i>&nbsp;Description</button>`
          );
          const div_third = $('<div class="text-center"></div>');
          div_third.html(
            `<label for="price"><h3 style="font-weight: bold">Price</h3></label><span style="text-decoration:line-through"><label style="color: red; font-weight: bold">&#8377;${price}</label></span>&nbsp;<label style="color: var(--primary-color);font-weight:bold">&#8377;${discounted_price}</label>`
          );
          const div_four = $(`<div class="info" id="info${x.pid}"></div>`);
          const h1 = `<h3 style="text-align:center;margin:10px auto">${x.product_name}</h3>`;
          //create product page html by appending all the components
          div_second.append(btn_add);
          div_first.append(h1);
          div_second.append(btn_description);
          div_first.append(img);
          div_first.append(div_second);
          div_first.append(div_third);
          div_first.append(div_four);
          grid_cards.append(div_first);

          //html creation ends

          // add event listeners to add_to_cart
          btn_add.click(function (e) {
            //using javascript handle toast
            // var x = document.getElementById("snackbar");
            // x.className = "show";
            // setTimeout(function () {
            //   x.className = x.className.replace("show", "");
            // }, 3000);

            //using jquery handle toast
            const toast_div = $("#snackbar");
            toast_div.addClass("show transparent"); //add multiple classes
            var time_id = setTimeout(function () {
              toast_div.removeClass(); //remove all classes
              clearTimeout(time_id);
            }, 3000);

            // add data and time of purchase inside cart file
            const date = getCurrentDateAndTime();
            const date_string = `${date.day}/${date.month}/${date.year}`;
            const time_string = `${date.hour}:${date.minutes}:${date.seconds}`;

            //initilaize and modify our cart item and use ajax to send to server
            var modified_cart_object = { ...x };
            modified_cart_object.added_date = date_string;
            modified_cart_object.added_time = time_string;
            modified_cart_object.discounted_price = discounted_price;
            modified_cart_object.quantity = 1;

            //hit ajax to update the cart file on server side
            $.ajax({
              type: "POST",
              url: "/update_cart",
              data: modified_cart_object,
              success: function () {
                //update cart value
                var total = ++total_item_in_cart;
                update_cart_value(total);

                //diplay message
                console.log("cart updated");
              },
            });
          });
        });
      } else {
        console.log("list is empty");
      }
    },
  });
})();
