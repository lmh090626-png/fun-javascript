// 변수선언, 연산자 활용
        // 이름저장하기 위한 변수 => 이름
        let =name = '이민호';
        // 혈액형 (AB, O, B, RH-)
        let bloodtype = 'O';
        // 키
        let myHeight = 180;
        // 성인, 미성년 구분.
        let isAdult = true; // false

        let sum = 10 + 20;
        console.log('sum의 값은' + sum + '입니다.');

        // 내 이름은 이민호 입니다
        console.log('내 이름은' + name + '입니다.');

        // +, -, *, /, %
        let num1 = 10;
        let num2 = 5;
        let result = 0;
        result = num1 + num2;
        result = num1 - num2;
        result = num1 * num2;
        result = num1 / num2;
        result =  (result + num1) % num2;
        result++; // result = result + 1;
        result++;
        result++;
        result--;
        result =+ 2;
        result *= 2; // result = result * 2;
        result %= 5; // 2
        result = result > 10;
        result += 3; // result = result + 3; => NaN 값을 출력.
        result = 'hello' * 3; // NaN
        result = result - 3;
        console.log('현재 result 값은 ' +result);