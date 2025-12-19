// object3.js
const syudentAry = [{
        stdNo: '25-0001',
        stdName: "홍길동",
        phone: "010-2222-3333, score: 70"
    },
    {
        stdNo: '25-0002',
        stdName: "김명수",
        phone: "010-1111-3333, score: 80"
    },
    {
        stdNo: '25-0003',
        stdName: "최덕배",
        phone: "010-2222-1111, score: 75"
    },
    {
        stdNo: '25-0003',
        stdName: "박우수",
        phone: "010-4444-1111, score: 85"
    }


    for (let student of studentAry) {
        htmlStr += `<tr>
        <td>${student.stdNo}</td>
        <td>${student.stdName}</td>
        <td>${student.phone}</td>
        <td>${student.score}</td>
        </tr>`;
    }
{
htmlStr +=`</tbody>
    </table>`;
document.writeln(htmlStr);

}


















let htmlStr = "<table border : 2 >";
htmlStr += "<thead>"
htmlStr += "<tr>"
htmlStr += < th > < /th>