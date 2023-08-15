import { tabularNav } from "../tabularNav/tabularNav";
import { companyList } from "../constant/contant";

export function experience() {
  const container = document.createElement("article");
  container.append(tabularNav(companyList));

  return container;
}
