$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //toggle menu navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn svg").toggleClass("fa-bars");
    $(".menu-btn svg").toggleClass("fa-times-circle");
  });

  // Owl Carousel Script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

async function sendEmail(e) {
  $("body").waitMe({
    effect: "bounce",
    text: "Please Wait! You will receive an email shortly.",
    maxSize: "",
    waitTime: -1,
    textPos: "vertical",
    fontSize: "25px",
    source: "",
    onClose: function () {},
  });
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  let message = await emailjs.send("service_32jfnbm", "template_jxcjjbr", {
    from_name: "Amrideep Baksi",
    to_name: value.name,
    to_email: value.email,
  });
  await emailjs.send("service_32jfnbm", "template_fa4u0hu", {
    from_name: value.name,
    message: value.message,
    from_email: value.email,
  });
  $("body").waitMe("hide");
  if (message.text == "OK") {
    message = "Email sent successfully.";
  } else {
    message = message.text;
  }
  alert(message);
  document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);
