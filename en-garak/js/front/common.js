$(document).ready(function () {
    // 공통 jQuery 코드 (모바일과 PC 모두에 적용)
    function applyCommonjQuery() {
        $("#footer").append(Footer());
        $("#lnbList").append(LnbList());
        $("#lnbKeyProjectList").append(lnbKeyProjectList());
        $("#lnbMarketGuideList").append(lnbMarketGuideList());

        function Footer() {
            return `
            <section>
                <div class="footer_top pb-sm-4">
                    <div class="container">
                        <div class="sec_inner">
                        <ul class="right familysite">
                            <li>
                            <button type="button" class="btn-family-toggle col s12">Related Agencies</button>
                            <div class="fs_box">
                                <ul>
                                <li>
                                    <a href="http://www.seoul.go.kr" target="_blank" title="Opens new window">Metropolitan
                                    Government</a>
                                </li>
                                <li>
                                    <a href="http://www.i-se.co.kr" target="_blank" title="Opens new window">Seoul Energy
                                    Corporation</a>
                                </li>
                                <li>
                                    <a href="http://www.sisul.or.kr" target="_blank" title="Opens new window">Seoul Facilities
                                    Corporation</a>
                                </li>
                                <li>
                                    <a href="http://www.i-sh.co.kr" target="_blank" title="Opens new window">SH Corporation</a>
                                </li>
                                <li>
                                    <a href="http://www.seoulmetro.co.kr" target="_blank" title="Opens new window">Seoul Metro</a>
                                </li>
                                <li>
                                    <a href="http://www.seoulmc.or.kr" target="_blank" title="Opens new window">Seoul Medical
                                    Center</a>
                                </li>
                                <li>
                                    <a href="https://fsi.seoul.go.kr/front/index.do" target="_blank" title="Opens new window">Seoul
                                    Food Safety Information</a>
                                </li>
                                <li>
                                    <a href="http://www.snssgarak.co.kr" target="_blank" title="Opens new window">Seoul
                                    Agro-Fisheries & Food Corporation</a>
                                </li>
                                <li>
                                    <a href="https://www.splib.or.kr/spalib/index.jsp" target="_blank"
                                    title="Opens new window">Garak Mall Library</a>
                                </li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="sec_inner">
                            <div class="left">
                            <a href="#" class="footer-logo"><img src="images/logo_footer.svg" alt="Seoul Agro-Fisheries & Food Corporation"></a>
                            <div class="info">
                            <div class="top">
                                <p>Seoul Agro-Fisheries & Food Corporation</p>
                                <p>(05699) 932, Yangjae-daero, Songpa-gu, Seoul, Republic of Korea</p>
                                <p>TEL: +82 2-3435-1000</p>
                            </div>
                            <div class="bottom">
                                <p>COPYRIGHT(C) 2024 BY SEOUL AGRO-FISHERIES & FOOD CORPORATION ALL RIGHTS RESERVED</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            `
        };

        function LnbList() {
            return `
            <li class="active">
                <a href="0_01_company_ceo.html" class="body-1-semibold btn-menu-toggle ">About
                    the Corporation</a>
                <ul class="dept2">
                    <li><a href="0_01_company_ceo.html" class="body-1 active">CEO's Message</a></li>
                    <li><a href="0_02_company_purpose.html" class="body-1">Establishment Objectives</a></li>
                    <li><a href="0_03_company_vision.html" class="body-1">Management Vision</a></li>
                    <li><a href="0_04_company_history.html" class="body-1">Company History</a></li>
                </ul>
            </li>
            `
        }

        function lnbKeyProjectList() {
            return `
            <li>
                <a href="09_01_public_market_operation.html" class="body-1-semibold link-active">Operation of Public
                    Wholesale Markets</a>
            </li>
            <li>
                <a href="09_02_digital_market_transform.html" class="body-1-semibold link-active">Electronic Auction Market</a>
            </li>
            <li>
                <a href="09_03_school_meal_project.html" class="body-1-semibold link-active">School meal project</a>
            </li>
            <li>
                <a href="09_04_retail_market_info.html" class="body-1-semibold link-active">Wholesale Distribution Information Generation and Dissemination</a>
            </li>
            <li>
                <a href="09_05_market_operate.html" class="body-1-semibold link-active">Garak Mall Operation & Management</a>
            </li>
            <li>
                <a href="09_08_dd_meal_project.html" class="body-1-semibold link-active">Dundeun Meal Project</a>
            </li>
            <li>
                <a href="09_05_garak_market_modernize.html" class="body-1-semibold link-active">Garak Market Facility Modernization Project</a>
            </li>
            <li>
                <a href="09_07_garakmall_highlight.html" class="body-1-semibold link-active">Garak Mall Landmark Project</a>
            </li>
            <li>
                <a href="09_06_food_safety_management.html" class="body-1-semibold link-active">Agricultural and fishery food<br>safety management</a>
            </li>
            `
        }

        function lnbMarketGuideList() {
            return `
            <li>
                <a href="#" class="body-1-semibold btn-menu-toggle">Wholesale Market Guide</a>
                <ul class="dept2">
                    <li><a href="13_06_market_status.html" class="body-1">Market Status</a></li>
                    <li><a href="13_07_distribution_system.html" class="body-1">Distribution System Guide</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="body-1-semibold btn-menu-toggle">Garak Market Guide</a>
                <ul class="dept2">
                    <li><a href="13_19_garak_status.html" class="body-1">Garak Market Overview</a></li>
                    <li><a href="13_21_garak_auction_times.html" class="body-1">Auction Time</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="body-1-semibold btn-menu-toggle">Gangseo Market Guide</a>
                <ul class="dept2">
                    <li><a href="13_11_gangseo_status.html" class="body-1">Gangseo Market Overview</a></li>
                    <li><a href="13_13_gangseo_auction_times.html" class="body-1">Auction Time</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="body-1-semibold btn-menu-toggle">Yanggok Market Guide</a>
                <ul class="dept2">
                    <li><a href="13_42_yangok_market_status.html" class="body-1">Yanggok Market Overview</a></li>
                </ul>
            </li>
            `
        }
    };

    // 공통 jQuery 적용
    applyCommonjQuery();

    $(".sidenav-trigger").click(function () {
        // $('.sidenav-trigger').on('click', function (e) {
        e.preventDefault(); // 기본 링크 동작 방지
        $(this).addClass("active");
        $(this).parent('li').siblings().children('a').removeClass("active");
        $(this).siblings(".dept2").slideToggle();
        return false;
    });
    $(".btn-menu-toggle").click(function () {
        $(this).addClass("active");
        $(this).parent('li').siblings().children('a').removeClass("active");
        $(this).siblings(".dept2").slideToggle();
        return false;
    });

    $(".trigger-all").click(function () {
        $(".all_menu_box").fadeToggle();
    });
    $(".all-close").click(function () {
        $(".all_menu_box").hide();
    });
    $(".trigger-search").click(function () {
        $(".search_wrap").slideToggle();
        $(".dark_overlay").fadeToggle();
    });
    $(".dark_overlay").click(function () {
        $(".search_wrap").hide();
        $(".dark_overlay").hide();
    });
    //접근성강화로 스크립트수정 1003//
    $(".dept-trigger > a").on('focus mouseenter', function () {
        // 다른 모든 메뉴 닫기
        $(".w-gnb-wrap").removeClass('is-open');
        $(".w-gnb-overlay").hide();
        $(".dept-trigger > a").attr('aria-expanded', 'false');

        // 현재 포커스 된 메뉴 열기
        $(this).siblings(".w-gnb-wrap").addClass('is-open');
        $(this).siblings(".w-gnb-overlay").stop(true, true).fadeIn();
        $(this).attr('aria-expanded', 'true');
    });

    $(".dept-trigger").on('mouseleave', function () {
        $(this).children(".w-gnb-wrap").removeClass('is-open');
        $(this).children(".w-gnb-overlay").stop(true, true).fadeOut();
        $(this).children('a').attr('aria-expanded', 'false');
    });

    // 서브메뉴가 열린 상태에서 탭을 눌러 이동할 때 서브메뉴를 닫지 않도록 제어
    $(".dept-trigger").on('blur', function () {
        var $self = $(this);
        setTimeout(function () {
            if (!$self.find(':focus').length) {
                $self.children(".w-gnb-wrap").removeClass('is-open');
                $self.children(".w-gnb-overlay").stop(true, true).fadeOut();
                $self.children('a').attr('aria-expanded', 'false');
            }
        }, 10);
    });

    $(".w-gnb-overlay").on('mouseenter', function () {
        $(this).stop(true, true).fadeOut();
        $(this).siblings(".w-gnb-wrap").removeClass('is-open');
    });

    $(".trigger-lan").click(function () {
        $(".lan-group").slideToggle();
    });

    // 메뉴 클릭 시 이벤트 발생
    $('.dept1 > li > a').on('click', function (e) {
        e.preventDefault(); // a 태그 기본 동작 방지

        var $this = $(this);  // 클릭한 a 태그
        var submenu = $this.next('.dept2');  // a 태그 바로 아래의 서브메뉴(.dept2)

        // 현재 활성화된 메뉴 이외의 모든 메뉴 닫기
        $('.dept1 > li > a').not($this).removeClass('active');  // 모든 a 태그에서 active 클래스 제거
        $('.dept2').not(submenu).slideUp();  // 클릭하지 않은 서브메뉴들 닫기
    });

    // dept2가 없는 경우 a태그 활성화
    $('.dept1 > li > a.link-active').on('click', function (e) {
        e.stopPropagation(); 
        window.location.href = $(this).attr('href');
    });

    $('.menu-wrap .mn').on('click', function (e) {

        // 모든 메뉴에서 active 클래스 제거
        $('.menu-wrap .mn').removeClass('active');

        // 클릭한 메뉴에 active 클래스 추가
        $(this).addClass('active');
    });
    
    $('.submenu-wrap .dt').on('click', function (e) {
        $(this).toggleClass('active');
        // 클릭한 메뉴에 active 클래스 추가
        $(this).siblings(".submenu").slideToggle();
    });

    // Swiper 초기화 공통 함수 (기본 슬라이더 설정)
    function initSwiper(containerClass, paginationClass, nextBtnClass, prevBtnClass, autoplay = true) {
        return new Swiper(containerClass, {
            speed: 1000,
            spaceBetween: 30, // 슬라이드 간 간격
            loop: true,
            autoplay: autoplay
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                }
                : false,
            slidesPerView: 1, // 기본적으로 1개의 슬라이드만 보이게 설정
            on: {
                init: function () {
                    var totalSlides = this.slides.length - this.loopedSlides * 2;
                    if (document.querySelector(containerClass + ' .total-slides')) {
                        document.querySelector(containerClass + ' .total-slides').textContent = totalSlides;
                    }
                    if (document.querySelector(containerClass + ' .current-slide')) {
                        document.querySelector(containerClass + ' .current-slide').textContent = this.realIndex + 1;
                    }
                },
                slideChange: function () {
                    if (document.querySelector(containerClass + ' .current-slide')) {
                        document.querySelector(containerClass + ' .current-slide').textContent = this.realIndex + 1;
                    }
                },
            },
            pagination: {
                el: paginationClass,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: nextBtnClass,
                prevEl: prevBtnClass,
            },
        });
    }

    // Autoplay 토글 함수
    function toggleAutoplay(swiper, iconSelector) {


        // var isPaused = !swiper.autoplay.running; // 현재 상태 확인
        $(iconSelector).on('click', function () {
            if (isPaused) {
                swiper.autoplay.start();
                $(this).attr('src', 'images/icon_pause.svg');
                isPaused = false;
            } else {
                swiper.autoplay.stop();
                $(this).attr('src', 'images/icon_play.svg');
                isPaused = true;
            }
        });
    }

    // Swiper 초기화 (sec_06 제외 다른 Swiper들)
    var swiper0 = initSwiper('.swiper0', '', '.swiper0-next', '.swiper0-prev', false);
    var swiper1 = initSwiper('.swiper1', '.swiper1-pagination', '.swiper1-next', '.swiper1-prev');
    var swiper2 = initSwiper('.swiper2', '.swiper2-pagination', '.swiper2-next', '.swiper2-prev');
    var swiperReport = initSwiper('.swiper-report', '', '.swiper-report-next', '.swiper-report-prev', false);
    var swiperExplanation = initSwiper('.swiper-explanation', '', '.swiper-explanation-next', '.swiper-explanation-prev', false);
    var swiperParticipation = initSwiper('.swiper-participation', '', '.swiper-participation-next', '.swiper-participation-prev', false);
    var swiperRecruitment = initSwiper('.swiper-recruitment', '', '.swiper-recruitment-next', '.swiper-recruitment-prev', false);

    // sec_06 Swiper (반응형 설정 추가)
    var swiperFood = new Swiper('.swiper-food', {
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 4, // 기본적으로 4개의 슬라이드
        breakpoints: {
            1280: {
                slidesPerView: 4, // 1280px 이상일 때 4개 보이도록 설정
                spaceBetween: 30, // 슬라이드 간 간격
            },
            1024: {
                slidesPerView: 3, // 1024px 이상일 때 4개 보이도록 설정
                spaceBetween: 30, // 슬라이드 간 간격
            },
            0: {
                slidesPerView: 1, // 1025px 이하일 때 1개의 슬라이드만 보이도록 설정
                spaceBetween: 10, // 모바일에서 슬라이드 간격 축소
            },
        },
        navigation: {
            nextEl: '.swiper-food-next',
            prevEl: '.swiper-food-prev',
        },
    });

    // Autoplay 제어 (swiper1, swiper2 각각 적용)
    toggleAutoplay(swiper1, '#pausePlayIcon1');
    toggleAutoplay(swiper2, '#pausePlayIcon2');
    toggleAutoplay(swiperFood, '#pausePlayIconFood');

    // fixed-alarm Swiper 추가
    var swiperAlarm = new Swiper('.swiper-alarm', {
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1, // 슬라이드 하나씩 보여주기
        navigation: {
            nextEl: '.swiper-alarm-next',
            prevEl: '.swiper-alarm-prev',
        },
        on: {
            init: function () {
                var totalSlides = this.slides.length - this.loopedSlides * 2;
                $('.swiper-alarm-total-slides').text(totalSlides);
                $('.swiper-alarm-current-slide').text(this.realIndex + 1);
            },
            slideChange: function () {
                $('.swiper-alarm-current-slide').text(this.realIndex + 1);
            },
        },
    });

    // Autoplay 제어 (fixed-alarm 슬라이드)
    toggleAutoplay(swiperAlarm, '#pausePlayIconAlarm');

    $(".board-ico").click(function () {
        $(this).parent().siblings(".files-info").show();
        return false;
    });
    $(".close_files").click(function () {
        $(this).parent().hide();
        return false;
    });

    $(".btn-family-toggle").click(function () {
        $(".fs_box").slideToggle();
        $(this).toggleClass("active");
        return false;
    });

    jQuery('.change-area').hide();

    jQuery('ul.tabs li').click(function () {
        jQuery('.change-area').hide();
        jQuery(jQuery('.change-area')[jQuery(this).index()]).show();
    }).first().trigger('click');


    // Go to main text
    function focus_anchor(_target) {
        var $target = $(_target);
        if ($target.length > 0) {
            $target.attr("tabIndex", -1).focus();
        }
    }

    focus_anchor();

    // 탭 클릭 이벤트
    $('.tabs li a').on('click', function (e) {
        e.preventDefault(); // 기본 앵커 동작 방지

        // 모든 탭의 활성화 클래스 제거
        $('.tabs li a').removeClass('active').attr('aria-selected', 'false');

        // 클릭한 탭 활성화
        $(this).addClass('active').attr('aria-selected', 'true');

        // 관련 콘텐츠 표시
        const target = $(this).attr('href');

        // 모든 탭 콘텐츠 숨기기
        $('.tab-content').hide().removeClass('active');

        // 선택된 탭 콘텐츠 표시
        $(target).show().addClass('active');
    });

    // 기본 활성화된 탭 콘텐츠 표시
    const defaultTab = $('.tabs li a[aria-selected="true"]');
    if (defaultTab.length) {
        const target = defaultTab.attr('href');
        defaultTab.addClass('active');
        $(target).show().addClass('active');
    }

    $('.open-window-map').on('click', function(e) {
        e.preventDefault();

        const mobileImageUrl = 'images/new/09_map_mo.svg';
        const pcImageUrl = 'images/new/09_map_pc.svg';
        const isMobile = window.innerWidth <= 992;

        const selectedImageUrl = isMobile ? mobileImageUrl : pcImageUrl;

        if (isMobile) {
            // const newWindow = window.open(selectedImageUrl, '_blank', 'width=892,height=400');
            // Mobile 
            const modal = `
                <div class="map-modal">
                    <img src="${selectedImageUrl}"">
                    <button class="modal-close">닫기</button>
                </div>`;
            $('body').append(modal);
            $('body').addClass('none-scroll')

            $('.modal-close').on('click', function() {
                $('.map-modal').remove();
                $('body').removeClass('none-scroll')
            });
        } else {
            // PC
            const newWindow = window.open(selectedImageUrl, '_blank', 'width=892,height=400');
        }
    });
});