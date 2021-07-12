const btn = document.querySelector('.btn');
const boxs = document.querySelectorAll('.box');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
  console.log('click!');

  // active 클래스 추가
  btn.classList.add('active');
  // 클래스 확인
  console.log(btn.classList.contains('active'));

  btn.classList.remove('active');
  console.log(btn.classList.contains('active'));
});

/* boxs는 유사 배열 형태로 됨 그래서 forEach 가능
찾은 요소들 반복해서 함수 실행
1번째 매개변수: 반복중인 요소
2번째 매개면수: 반복중인 순서 */
boxs.forEach((box, index) => {
  box.classList.add(`order-${index + 1}`);
  console.log(index, box);
});

// Getter, 값을 얻는 용도
console.log(box.textContent);

// Setter, 값을 지정하는 용도
box.textContent = 'park';
console.log(box.textContent);