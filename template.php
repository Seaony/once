<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Once</title>
    <link rel="stylesheet" href="/assets/css/app.css">
    <link rel="shortcut icon" href="/favicon.png"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
</head>
<body>

<div class="loading">
    <img src="/assets/images/loading.svg">
</div>

<!-- poster -->
<div id="poster" style="background-image: url(http://attach.bbs.miui.com/forum/201105/17/113554rnu40q7nbgnn3lgq.jpg)" data-src="http://attach.bbs.miui.com/forum/201105/17/113554rnu40q7nbgnn3lgq.jpg"></div>
<!-- poster end -->

<!-- footer -->
<div class="footer">
    <div class="container">
        <div class="song-progress">
            <div class="progress">
                <div class="progress-bar striped animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="song">
            <audio id="audio" src=""></audio>
            <div class="l"><i id="player" class="icon-play-circle"></i></div>
            <div class="l">
                <p class="song-info">梶浦由記 - Never leave you alone</p>
                <p class="bg-info">Background by <a href="">ぱち＠お仕事募集中</a></p>
            </div>
        </div>
        <span class="soul">today <b><?php echo $count ?></b> Soul Point</span>
    </div>
</div>
<!-- poster end -->

<script src="/assets/js/jquery.js"></script>
<script src="/assets/js/app.js"></script>
</body>
</html>
