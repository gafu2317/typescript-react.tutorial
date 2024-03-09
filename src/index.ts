import SaySomesing from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

//インスタンス化
const saySomething = new SaySomesing("Hello, TypeScript!");
saySomething.sayText(root);