const todolist = [
  {
    _id: 1,
    title: "Javascript 공부",
    done: true,
  },
  {
    _id: 2,
    title: "Typescript 공부",
    done: false,
  },
  {
    _id: 3,
    title: "React 공부",
    done: false,
  },
  {
    _id: 4,
    title: "React 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록
{
  let doneList = [];
  for (const item of todolist) {
    if (item.done) doneList.push(item.title);
  }
  console.log("완료된 할 일 목록 : ", doneList);
}

// 남은 할일 목록
{
  let remainList = [];
  for (const item of todolist) {
    if (!item.done) remainList.push(item.title);
  }
  console.log("남은 할 일 목록 : ", remainList);
}

// 남은 할일 수
{
  let remainCount = 0;
  for (const item of todolist) {
    if (!item.done) remainCount++;
  }
  console.log("남은 할 일 수 : ", remainCount);
}

// _id=2인 할일
{
  let todo = {};
  for (const item of todolist) {
    if (item._id === 2) todo = { ...item };
  }
  console.log("_id=2인 할 일 : ", todo);
}

// _id=3인 할일의 index
{
  let todoIndex = 0;
  for (const item of todolist) {
    if (item._id === 3) todoIndex = todolist.indexOf(item);
  }
  console.log("_id=3인 할 일의 index : ", todoIndex);
}

// 남은 할일이 하나라도 있는가?
{
  let hasTodo = false;
  for (const item of todolist) {
    if (!item.done) {
      hasTodo = true;
      break;
    } else {
      hasTodo = false;
    }
  }
  console.log("남은 할 일이 하나라도 있는가? ", hasTodo);
}

// 할 일이 모두 완료 되었는가?
{
  let busy = true;
  for (const item of todolist) {
    if (!item.done) {
      busy = false;
      break;
    } else {
      busy = true;
    }
  }
  console.log("할 일이 모두 완료 되었는가? ", busy);
}
