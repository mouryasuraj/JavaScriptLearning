// Logic

// select
let insert = document.querySelector('.insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <table border=2>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
    document.querySelector('table').style.fontSize = '30px'
    document.querySelector('table').style.borderCollapse = 'collapse'
    document.querySelector('table').style.color = 'rgb(16, 78, 103)'
})