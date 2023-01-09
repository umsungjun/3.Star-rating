export const makeDOMwithProperties = (domType, propertyMap) => { 
  const dom = document.createElement(domType); 
  Object.keys(propertyMap).map((key) => { 
    dom[key] = propertyMap[key];
  });
  return dom;
}
// 1. domType을 매개변수로 받아서 해당 태그의 해당하는 엘리먼트를 생성
// 2. propertyMap라는 매개변수로 넘어온 객체를 Object.keys()함수(key만 추출)
// 3. map() 함수를 이용하여 propertyMap의 key값들을 dom의 key값으로 대입

export const appendChildrenList = (target, childrenList) => {
  // childrenList가 배열일 지 아닐 지 모름 -> 타입스크립트 필요
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  })
};

// 1. targetDOM과 chiderenList돔을 배열인 매개변수로 받는다
// 2. 만약에 받은 childrenList가 배열이 아니라면 early return 을 통해서 반환
// 3. 배열의 값으로 들어온 childrenList라면 각각 target의 아래 자식으로 DOM을 구성해 줌