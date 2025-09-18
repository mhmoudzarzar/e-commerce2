import { Cart } from './cart.js';

let cart = new Cart();
let dropmenu = document.getElementById("dropmenu");
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  cart.toggleVisibility(dropmenu);
});

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  save() {
    const users = JSON.parse(localStorage.getItem('users')) || []; // تأكدنا إنه مش null
    users.push(this);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// 🔹 تعريف العناصر
const form = document.getElementById("form"); // لازم يكون عندك <form id="form">
const emailInput = document.getElementById("email"); // <input id="email">
const passwordInput = document.getElementById("password"); // <input id="password">

form.addEventListener('submit', async (event) => { 
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
    return;
  }

  const user = new User(email, password);
  user.save();

  alert("تم حفظ المستخدم بنجاح!");
});
