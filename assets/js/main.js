// import axios from 'axios';

const container = document.querySelector(".container");
const table = document.querySelector(".table");
const ul = document.querySelector("ul");

// let dataArr = []
const titles = [
  "id",
  "Name",
  "LastName",
  "Capsule",
  "age",
  "City",
  "Gender",
  "Hobby",
];

//dynamic data fetch
const fetchData = async (url) => {
  try {
    const fetch = await axios.get(url);
    const data = await fetch;
    return data;
  } catch (e) {
    console.log(e);
  }
  // console.log(data);
};

//
const getDataId = async () => {
  const dataOne = await fetchData(
    "https://capsules7.herokuapp.com/api/group/one",
  );
  const dataTwo = await fetchData(
    "https://capsules7.herokuapp.com/api/group/two",
  );

  let dataArr = [];

  for (let i of dataOne.data) {
    let { id } = i;
    dataArr.push(id);
  }
  for (let i of dataTwo.data) {
    let { id } = i;
    dataArr.push(id);
  }

  return dataArr;
};

const studentsObj = { students: [] };
const fetchUsers = async () => {
  let arr = await getDataId();

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i];
    const fetch1 = (
      await fetch(`https://capsules7.herokuapp.com/api/user/${id}`)
    ).json();

    arr2.push(fetch1);
  }

  let fetchStudents = await Promise.all(arr2);

  return fetchStudents;
};

const dataStructureObj = () => {};

const createElementToHTML = async () => {
  const usersOBJ = await fetchUsers();

  for (let i of usersOBJ) {
    const { id, capsule, age, city, gender, firstName, lastName, hobby } = i;

    const div = document.createElement("div");
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const li6 = document.createElement("li");
    const li7 = document.createElement("li");
    const li8 = document.createElement("li");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");
    div.classList.add("li-head");
    ul.appendChild(div);
    div.appendChild(li);
    li.id = "idx";
    div.appendChild(li2);
    div.appendChild(li3);
    div.appendChild(li4);
    div.appendChild(li5);
    div.appendChild(li6);
    div.appendChild(li7);
    div.appendChild(li8);
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    div.appendChild(button4);
    li.textContent = id;
    li2.textContent = firstName;
    li3.textContent = lastName;
    li4.textContent = capsule;
    li5.textContent = age;
    li6.textContent = city;
    li7.textContent = gender;
    li8.textContent = hobby;
    button1.textContent = "Edit";
    button1.classList.add("btn1");
    button2.textContent = "Delete";
    button2.classList.add("btn2");
    button3.textContent = "Cancel";
    button3.className = "hide btn3";

    button4.textContent = "Confirm";
    button4.className = "hide btn4";
  }
};
function createElementToHTML2(test) {
  const usersOBJ = test;
  const ul2 = document.createElement("ul");
  table.appendChild(ul2);
  for (let i of usersOBJ) {
    const { id, capsule, age, city, gender, firstName, lastName, hobby } = i;

    const div = document.createElement("div");
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const li6 = document.createElement("li");
    const li7 = document.createElement("li");
    const li8 = document.createElement("li");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    div.classList.add("li-head");
    ul.appendChild(div);
    div.appendChild(li);
    li.id = "idx";
    div.appendChild(li2);
    div.appendChild(li3);
    div.appendChild(li4);
    div.appendChild(li5);
    div.appendChild(li6);
    div.appendChild(li7);
    div.appendChild(li8);
    div.appendChild(button1);
    div.appendChild(button2);
    li.textContent = id;
    li2.textContent = firstName;
    li3.textContent = lastName;
    li4.textContent = capsule;
    li5.textContent = age;
    li6.textContent = city;
    li7.textContent = gender;
    li8.textContent = hobby;
    button1.textContent = "Edit";
    button1.classList.add("btn1");
    button2.textContent = "Delete";
    button2.classList.add("btn2");
  }
}

const buttonDeleteElement = () => {
  const button2 = document.querySelectorAll(".btn2");
  console.log(button2);
  button2.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
    });
  });
};

//! TO DO
const buttonEditElement = async () => {
  const button1 = document.querySelectorAll(".btn1");
  const button2 = document.querySelectorAll(".btn2");
  const button3 = document.querySelectorAll(".btn3");
  const button4 = document.querySelectorAll(".btn4");
  const li = document.querySelectorAll(".li-head li");
  const p = document.createElement("p");
  const idx = document.querySelector("#idx");
  const usersOBJ = await fetchUsers();
  console.log(button1);
  button1.forEach((e) => {
    e.addEventListener("click", () => {
      // console.log(e.id);
      li.forEach((e) => {
        console.log(button4);
        if (e.id === "idx") {
          e.contentEditable = false;
        } else {
          e.contentEditable = true;
        }
        if (e.className === "btn3") {
          e.classList.remove("hide");
        }
      });
    });
  });
  // button4.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     // console.log(e.id);
  //     li.forEach(e=>{
  //       console.log(button4);
  //       if (e.className === 'btn3'){
  //         e.classList.remove('hide')

  //       }else{
  //         e.contentEditable = true;
  //       }

  //     })

  //   });

  // });
};
const searchInput = async () => {
  const input = document.querySelector(".filter-input");
  const div = document.querySelector(".li-head");
  const divAll = document.querySelectorAll(".li-head");
  const li = document.querySelectorAll(".li-head li");
  const button = document.querySelectorAll(".li-head li btn1");

  const usersOBJ = await fetchUsers();

  input.addEventListener("input", () => {
    let search = input.value.toLowerCase();

    for (let i of divAll) {
      let item = i.textContent.toLowerCase();
      if (item.indexOf(search) == -1) {
        i.classList.add("hide");
      } else {
        i.classList.remove("hide");
      }
    }
  });
};

const sortTable = async () => {
  const li = document.querySelectorAll(".header li");
  const id = document.querySelector("#id");
  const ul = document.querySelector("ul");
  let list, switchItem, i;
  let switching = true;
  const usersOBJ = await fetchUsers();

  li.forEach((e) => {
    e.addEventListener("click", async (e) => {
   
      targetId = e.target.id;

      console.log(targetId);
      if (targetId == "id") {
        usersOBJ.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "id") {
        usersOBJ.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "name") {

        usersOBJ.sort((a, b) => a.firstName.localeCompare(b.firstName));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "last") {
        usersOBJ.sort((a, b) => a.lastName.localeCompare(b.lastName));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "capsule") {
        usersOBJ.sort((a, b) => parseFloat(a.capsule) - parseFloat(b.capsule));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "age") {
        usersOBJ.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "city") {
        usersOBJ.sort((a, b) => a.city.localeCompare(b.city));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "gender") {
        usersOBJ.sort((a, b) => a.gender.localeCompare(b.gender));

        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
      if (targetId == "hobby") {
        usersOBJ.sort((a, b) => a.hobby.localeCompare(b.hobby));
   
        const div = document.querySelectorAll(".li-head");
        div.forEach((e) => e.remove());
        createElementToHTML2(usersOBJ);
      }
    });
  });
};

const resetTable = () => {
  const resetBtn = document.querySelector("#reset");
  const div = document.querySelectorAll(".li-head");
  resetBtn.addEventListener("click", () => {

    window.location = "/";
  });
};

const start = async () => {
  await fetchUsers();
  await createElementToHTML();

  buttonDeleteElement();
  sortTable();
  resetTable();
  searchInput();
  buttonEditElement();
};
// const localS = async ()=>{
//   localStorage.setItem('ApiFetchUsers', await fetchUsers() );
//   localStorage.setItem('ApiFetchHTMLElement',  await createElementToHTML());

// }
start();
