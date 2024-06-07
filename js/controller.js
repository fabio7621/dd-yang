//banner
var swiper = new Swiper(".indexSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
  },
  keyboard: true,
});
//shop cart
var swiper = new Swiper(".shopSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
//數量
// const input = document.getElementById("shop-qty");
// input.addEventListener("input", function (e) {
//   if (e.target.value < 0) {
//     e.target.value = 0;
//   }
// });
//結帳切換
$(document).ready(function () {
  $('input[name="shippingMethod"]').change(function () {
    if ($("#methodHomeDelivery").is(":checked")) {
      $(".pickup-normal").show().find("select").prop("disabled", false);
      $(".pickup-shop").hide().find("select").prop("disabled", true);
    } else if ($("#methodStorePickup").is(":checked")) {
      $(".pickup-normal").hide().find("select").prop("disabled", true);
      $(".pickup-shop").show().find("select").prop("disabled", false);
    }
  });

  $('input[name="bill-choese"]').change(function () {
    if ($("#bill-type1").is(":checked")) {
      $(".bill-type1").show();
      $(".bill-type2").hide();
    } else if ($("#bill-type2").is(":checked")) {
      $(".bill-type1").hide();
      $(".bill-type2").show();
    }
  });
});
