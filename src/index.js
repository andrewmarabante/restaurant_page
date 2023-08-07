import { homeLoad } from "./home";
import { objectiveLoad } from "./objective";
import { menuLoad } from "./menu";
import { contactLoad} from "./contactus";
homeLoad();

document.getElementById('home').addEventListener('click', homeLoad);
document.getElementById('obj').addEventListener('click', objectiveLoad);
document.getElementById('menu').addEventListener('click', menuLoad);
document.getElementById('contact').addEventListener('click', contactLoad);

