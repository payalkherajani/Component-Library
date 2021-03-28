function toggle(id) {
    const sidebarData = document.getElementById(id);
    sidebarData.style.display === 'none' ? (sidebarData.style.display = 'block') : (sidebarData.style.display = 'none')
}

function showCode(id) {
    const imagetoShow = document.getElementById(id);
    imagetoShow.style.display === 'none' ? (imagetoShow.style.display = 'block') : (imagetoShow.style.display = 'none')
}