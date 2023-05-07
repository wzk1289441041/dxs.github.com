// 获取页面元素
const navItems = document.querySelectorAll('.nav-item');
const registerForm = document.querySelector('#register form');
const userProfileForm = document.querySelector('#user-profile form');
const userProfileImage = document.querySelector('#user-profile img');
const userProfileImageInput = document.querySelector('#user-profile input[type="file"]');
const userProfilePreview = document.querySelector('#user-profile .image-preview');
const userProfileImageDelete = document.querySelector('#user-profile .image-delete');
const userProfileSubmitButton = document.querySelector('#user-profile input[type="button"]');
const userProfileCancelButton = document.querySelector('#user-profile input[type="reset"]');

// 导航栏交互
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// 注册表单交互
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('注册成功！');
});

// 用户资料表单交互
userProfileImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            userProfilePreview.setAttribute('src', reader.result);
            userProfilePreview.style.display = 'block';
            userProfileImage.style.display = 'none';
            userProfileImageDelete.style.display = 'inline-block';
        }
        reader.readAsDataURL(file);
    }
});

userProfileImageDelete.addEventListener('click', function() {
    userProfilePreview.setAttribute('src', '');
    userProfilePreview.style.display = 'none';
    userProfileImage.style.display = 'block';
    userProfileImageDelete.style.display = 'none';
});

userProfileSubmitButton.addEventListener('click', function() {
    alert('用户资料已保存！');
});

userProfileCancelButton.addEventListener('click', function() {
    userProfilePreview.setAttribute('src', '');
    userProfilePreview.style.display = 'none';
    userProfileImage.style.display = 'block';
    userProfileImageDelete.style.display = 'none';
    userProfileForm.reset();
});