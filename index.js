$(document).ready(function () {

    // let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    gsap.to(".header__title", {rotation: 360});
    $("#copyrightYear").html(new Date().getFullYear());

    $(".nav__btn").click(function() {

        $(this).siblings().removeClass("active").attr("aria-expanded", "false");
        $(this).addClass("active").attr("aria-expanded", "true");

        const currentSection = $(this).data("toggle");

        $(".section").fadeOut(100);
        $(`#${currentSection}`).fadeIn(100);
       
        gsap.set($(".card"), {scale: 0, opacity: 0});

        if (currentSection === "images" || currentSection === "nft") {

            gsap.to(`#${currentSection} .card`, {
                opacity: 1,
                scale: 1,
                ease: "power1.inOut",
                stagger: {
                    amount: 0.4, 
                    grid: "auto",
                    from: 0
                }
                });    

        }
        
        setFooterMargin($(".site-footer"), currentSection);
    });

    function setFooterMargin($footer, currentSection) {
        const visibleSectionHeight = $(`#${currentSection}`).height();
        currentSection === "social" ? $footer.css("margin-top", "0") : $footer.css("margin-top", `${visibleSectionHeight + 50}px`);
    };


    images.map((image) => {
        const imageCard = [
            `<article class="card card--images">`,
            `<h3 class="sr-only">${image.name}</h3>`,          
            `<a class="zoom-in" title="View full size image" data-fancybox="gallery" href="./images/${image.src}">`,
            `<img src="./images/${image.src}" alt=${image.name}>`,
            `</a>`,
            `</article>`
        ];

        $("#imageCards").append(imageCard.join(''));
    });

    nfts.map((nft) => {
        const nftCard = [
            `<article class="card card--nft">`,
            `<div class="card--nft-overlay">`,
            `<a class="card--nft-overlay__link card--nft-overlay__link--opensea" title="view on Opesea" target="_blank" rel="noreferrer" href="#">&#128279;</a>`,
            `</div>`,
            `<h3 class="sr-only">${nft.name}</h3>`,
            `<a title="view on Opesea" target="_blank" rel="noreferrer" href="#">`,
            `<img class="card--nft__image" src="./images/${nft.src}" alt=${nft.name}>`,
            `</a>`,
            `<div class="card--nft__desc">`,
            `<dl>`,
            `<dt class="card--nft__collection">${nft.collection}</dt>`,
            `<dd class="card--nft__title">${nft.name}</dd>`,
            `</dl>`,
            `<dl>`,
            `<dt>Price</dt>`,
            `<dd class="relative card--nft__price">${nft.price}</dd>`,
            `</dl>`,
            `</div>`,
            `</article>`
        ];

        $("#nftCards").append(nftCard.join(''));
    })

    $('[data-fancybox="gallery"]').fancybox({
	    buttons: [
            "slideShow",
            "close"
        ]
    });
    
    

});

