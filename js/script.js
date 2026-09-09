let backTop = document.createElement("div");
backTop.innerText = "回到顶部";
backTop.style.cssText = `
    position: fixed;
    right: 30px;
    bottom: 30px;
    background: #e94560;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    display: none;
    color: #fff;
    z-index: 1000;
`;
document.body.appendChild(backTop);

window.onscroll = function() {
    if(window.scrollY > 300) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}

backTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const galleryImg = document.querySelectorAll('.gallery-item img');
const modal = document.querySelector('.preview-modal');
const previewImg = document.getElementById('previewImg');
const closeBtn = document.querySelector('.close-btn');

if(galleryImg){
    galleryImg.forEach(img => {
        img.onclick = function() {
            previewImg.src = this.src;
            modal.style.display = 'flex';
        };
    });
}

if(closeBtn){
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

const sendBtn = document.querySelector('.send-btn');
if(sendBtn){
    sendBtn.onclick = function() {
        const text = document.querySelector('.forum-text').value;
        
        if(text == "") {
            alert("请输入留言内容");
        } else {
            alert("留言发布成功！");
            document.querySelector('.forum-text').value = "";
        }
    }
}