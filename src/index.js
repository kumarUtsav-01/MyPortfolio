import { loader } from "./loader/loader";
import "./index.css";

const container = document.getElementById("root");
container.append(loader());
