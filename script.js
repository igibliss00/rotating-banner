let bannerStatus = 1;
let bannerTimer = 2000;

window.onload = () => {


    let startBannerLoop = setInterval(() => {
        bannerLoop();
    }, bannerTimer);

    let mainBanner = document.querySelector(".main-banner")
    mainBanner.onmouseenter = () => {
        clearInterval(startBannerLoop);
    }

    document.getElementById("main-banner").onmouseleave = () => {
        startBannerLoop = setInterval(() => {
            bannerLoop();
        }, bannerTimer);
    }

    document.querySelector(".imgbanbtn-next").onclick = () => {
        bannerLoop();
    }

    function bannerLoop() {
        if (bannerStatus === 1) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right= "0px";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban2").style.right= "-1200px";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban3").style.right= "1200px";
                document.getElementById("imgban3").style.zIndex = "500";
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";
            }, 1000);
            bannerStatus = 2;
        }

        else if (bannerStatus === 2) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right= "0px";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban3").style.right= "-1200px";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban1").style.right= "1200px";
                document.getElementById("imgban1").style.zIndex = "500";
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";
            }, 1000);
            bannerStatus = 3;
        }

        else if (bannerStatus === 3) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right= "0px";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban1").style.right= "-1200px";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban2").style.right= "1200px";
                document.getElementById("imgban2").style.zIndex = "500";
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";
            }, 1000);
            bannerStatus = 1;
        }
    }
}