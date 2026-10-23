// تحديث سنة حقوق النشر تلقائيًا

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// تجهيز رسالة واتساب حسب التخصص المختار

const serviceLinks = document.querySelectorAll("[data-service]");

serviceLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const service = link.dataset.service;

        const message =
            "مرحبًا ElGaafra Clinic، أرغب في الاستفسار عن خدمة " +
            service +
            " ومعرفة التفاصيل وطلب موعد.";

        const whatsappURL =
            "https://wa.me/201033635577?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener");

    });

});