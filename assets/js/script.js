document.addEventListener("DOMContentLoaded", () => {
    // SkillBar 설정
    const skillBars = document.querySelectorAll(".skill-bar");
    const skillsSection = document.getElementById("skills"); // skills 섹션의 id가 'skills' 라고 가정
    let hasAnimated = false; // 애니메이션이 발동했는지를 판단하는 플래그

    function fillSkillBars() {
        skillBars.forEach((bar) => {
            const skill = bar.getAttribute("data-skill");
            const level = bar.getAttribute("data-level");

            const levelBar = bar.querySelector(".skill-level") || document.createElement("div");

            if (!levelBar.classList.contains("skill-level")) {
                levelBar.classList.add("skill-level");
                bar.appendChild(levelBar);
            }

            // 애니메이션 효과를 위해 setTimeout 사용
            setTimeout(() => {
                levelBar.style.width = `${level}%`;
                levelBar.innerText = `${skill} (${level}%)`;
            }, 50); // 약간의 딜레이를 줘서 애니메이션이 스무스하게 보이게 합니다.
        });
    }

    // 스크롤 이벤트에 대한 리스너 추가
    window.addEventListener('scroll', () => {
        const rect = skillsSection.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) { // skills 섹션이 화면에 보일 때
            fillSkillBars();
        }
    });


    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // 스크롤 내리면 버튼 노출
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // 최상위로 스크롤
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Swiper 설정
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});