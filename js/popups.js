
      // Форма заказа
      var link = document.querySelectorAll(".shop__btn");
      var order = document.querySelector(".order");
      var overlay = document.querySelector(".order__overlay");
      var i = link;
      for(i = 0; i < link.length; i++){
      link[i].onclick = function show(event) {
        event.preventDefault();
        order.classList.toggle("order-show");
         overlay.classList.toggle("order__overlay-show");
      };
      }

      window.onkeydown = function (event){
        if (event.keyCode === 27){
          order.classList.remove("order-show");
          overlay.classList.remove("order__overlay-show");
        }
      };


      // var link = document.querySelector(".shop__btn");


      // link.addEventListener('click', function (event) {
      //   // event.preventDefault();
      //   overlay.classList.toggle("order__overlay-show");
      //    });

      //   window.addEventListener('keydown', function (event){
      //   if (event.keyCode === 27){

      //   }
      // });
