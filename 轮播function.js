HTMLDivElement.prototype.createTurnPage = function (imgArr) {
        this.style.overflow = "hidden";
        var siledUl = document.createElement('ul');
        siledUl.style.height = this.offsetHeight + 'px';
        siledUl.style.width = (this.offsetWidth * (imgArr.length + 1)) + 'px';
        siledUl.style.position = "absolute";
        siledUl.style.left = '0px';
        siledUl.style.top = '0px';
        siledUl.className = 'siledUl';
        this.appendChild(siledUl);
        var btnleft = document.createElement('div');
        var btnright = document.createElement('div');
        btnleft.style.width = this.offsetWidth * (30 / 520) + 'px';
        btnleft.style.height = this.offsetHeight * (50 / 280) + 'px';
        btnleft.style.position = 'absolute';
        btnleft.style.backgroundColor = 'black';
        btnleft.style.opacity = '0.3';
        btnleft.style.top = "50%";
        btnleft.style.left = '0px';
        btnleft.style.marginTop = (this.offsetHeight * (50 / 280)) / -2 + 'px';
        btnleft.style.color = "aliceblue";
        btnleft.style.textAlign = "center";
        btnleft.style.lineHeight = (this.offsetHeight * (50 / 280)) + 'px';
        btnleft.style.fontSize = (this.offsetHeight * (20 / 280)) + 'px';
        btnleft.innerText = "<";
        btnleft.style.border = "none";
        btnleft.className = 'btnleft';
        this.appendChild(btnleft);
        //创建按钮
        btnright.style.width = this.offsetWidth * (30 / 520) + 'px';
        btnright.style.height = this.offsetHeight * (50 / 280) + 'px';
        btnright.style.position = 'absolute';
        btnright.style.backgroundColor = 'black';
        btnright.style.opacity = '0.3';
        btnright.style.top = "50%";
        btnright.style.right = "0px";
        btnright.style.border = "none";
        btnright.style.marginTop = (this.offsetHeight * (50 / 280)) / -2 + 'px';
        btnright.style.color = "aliceblue";
        btnright.style.textAlign = "center";
        btnright.style.lineHeight = (this.offsetHeight * (50 / 280)) + 'px';
        btnright.style.fontSize = (this.offsetHeight * (20 / 280)) + 'px';
        btnright.innerText = ">";
        btnright.className = 'btnright';
        this.appendChild(btnright);
        this.onmouseenter = function(){
            var btnleft = document.getElementsByClassName('btnleft')[0];
            var btnright = document.getElementsByClassName('btnright')[0];
            btnleft.style.opacity = '0.7';
            btnright.style.opacity = '0.7';     
        }
        this.onmouseleave = function(){
            var btnleft = document.getElementsByClassName('btnleft')[0];
            var btnright = document.getElementsByClassName('btnright')[0];
            btnleft.style.opacity = '0.3';
            btnright.style.opacity = '0.3';     
        }
        var siledUl = document.getElementsByClassName('siledUl')[0];
        console.log('2');
        for (var i = 0, len = imgArr.length + 1; i < len; i++) {
            var li = document.createElement('li');
            li.style.width = siledUl.offsetWidth / len + 'px';
            li.style.height = siledUl.offsetHeight + 'px';
            li.style.cssFloat = 'left';
            siledUl.appendChild(li);
        }
        var siledUlLi = document.getElementsByClassName('siledUl')[0].getElementsByTagName('li');
        for (var h = 0, hlen = imgArr.length + 1; h < hlen; h++) {
            var img = document.createElement('img');
            console.log(imgArr[h]);
            img.style.width = this.offsetWidth + 'px';
            img.style.height = this.offsetHeight + 'px';
            siledUlLi[h].appendChild(img);
        }
        for (var g = 0, glen = imgArr.length + 1; g < glen; g++) {
            (function (i) {
                var siledUlLiImg = document.getElementsByClassName('siledUl')[0].getElementsByTagName('li')[i].getElementsByTagName('img')[0];
                if (i == imgArr.length) {
                    siledUlLiImg.src = imgArr[0];
                } else {
                    siledUlLiImg.src = imgArr[i];
                }
            }(g))
        }
        //创建小圆点
        var indexSiled = document.createElement('div');
        indexSiled.className = 'indexSiled';
        indexSiled.style.position = "absolute";
        indexSiled.style.width = this.offsetWidth + 'px';
        indexSiled.style.bottom = (this.offsetHeight) * (15 / 280) + 'px';
        indexSiled.style.textAlign = 'center';
        indexSiled.style.height = (this.offsetHeight) * (20 / 280) + 'px';
        indexSiled.style.border = "none";
        this.appendChild(indexSiled);
        var indexSiled = document.getElementsByClassName('indexSiled')[0];
        function span() {
            for (var j = 0; j < imgArr.length; j++) {
                var span = document.createElement('span');
                span.style.display = 'inline-block';
                span.style.width = indexSiled.offsetWidth * (10 / 520) + 'px';
                span.style.height = indexSiled.offsetHeight * 0.5 + 'px';
                span.style.backgroundColor = 'aliceblue';
                span.style.borderRadius = '50%';
                span.style.marginLeft = indexSiled.offsetWidth * (15 / indexSiled.offsetWidth) + 'px';
                indexSiled.appendChild(span);
            }
            indexSiled.getElementsByTagName('span')[0].style.backgroundColor = 'red';
        }
        span();
        function getStyle(dom, target) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(dom, null)[target];
            } else {
                return dom.currentStyle[target];
            }
        }
        function getmove(dom, odmObj, speed, fun) {
            clearInterval(dom.timer)
            var ispeed = null, iCur = null;
            dom.timer = setInterval(function () {
                var bStop = true;
                // console.log('a');
                for (var prop in odmObj) {
                    if (prop == "opacity") {
                        iCur = parseFloat(getStyle(dom, prop)) * 100;
                    } else {
                        iCur = parseFloat(getStyle(dom, prop));
                    }
                    iSpeed = ((odmObj[prop] - iCur) / speed);
                    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                    if (prop == "opacity") {
                        dom.style.opacity = (iSpeed + iCur) / 100;
                    } else {
                        dom.style[prop] = iSpeed + iCur + 'px';
                    }
                    if (iCur != odmObj[prop]) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    clearInterval(dom.timer);
                    typeof (fun) == "function" && fun();
                }
            }, 30)
        }
        var siledUl = document.getElementsByClassName('siledUl')[0];
        var ulLiwidth = siledUl.children[0].offsetWidth;//获取ul下il的宽度；
        var timer = null;
        var num = siledUl.children.length - 1;
        var btnleft = document.getElementsByClassName('btnleft')[0];
        var btnright = document.getElementsByClassName('btnright')[0];
        var key = true;
        var index = 0;
        var indexSiledArr = document.getElementsByClassName('indexSiled')[0].getElementsByTagName('span');
        btnleft.onclick = function () {
            autoMove("right -> left");
        }
        btnright.onclick = function () {
            autoMove("left -> right");

        }
        function autoMove(direction) {
            if (key) {
                key = false;
                clearTimeout(timer);
                if (!direction || direction == "left -> right") {
                    index++;
                    getmove(siledUl, { left: (siledUl.offsetLeft - ulLiwidth) }, 6, function () {
                        if (siledUl.offsetLeft == -num * ulLiwidth) {
                            index = 0;
                            siledUl.style.left = "0px";
                        }
                        changeIndex(index);
                        timer = setTimeout(autoMove, 1500);
                        key = true;
                    })
                } else if (direction == "right -> left") {
                    if (siledUl.offsetLeft == 0) {
                        siledUl.style.left = -num * ulLiwidth + 'px';
                        index = num;
                    }
                    index--;
                    getmove(siledUl, { left: (siledUl.offsetLeft + ulLiwidth) }, 6, function () {
                        changeIndex(index);
                        timer = setTimeout(autoMove, 1500);
                        key = true;
                    })
                }
            }
        }
        function changeIndex(_index) {
            for (var i = 0; i < indexSiledArr.length; i++) {
                indexSiledArr[i].style.backgroundColor = '#fff';
            }
            indexSiledArr[_index].style.backgroundColor = 'red';
        }
        for (var i = 0; i < indexSiledArr.length; i++) {
            (function (myindex) {
                indexSiledArr[myindex].onclick = function () {
                    key = false;
                    clearTimeout(timer);
                    index = myindex;
                    changeIndex(index);
                    getmove(siledUl, { left: -index * ulLiwidth }, 6, function () {
                        key = true;
                        timer = setTimeout(autoMove, 1500);
                    })
                }
            }(i))
        }
        timer = setTimeout(autoMove, 1500);
    };
