import page from "./node_modules/page/page.mjs";

import { loginPageRendering } from "./Login/loginPageRender.js"
import { allItemsPageRender } from "./catalog/catalogPageRender.js";
import { registerPageRender } from "./RegisterLogic/registerPageRender.js"
import { getLogout } from "./LogoutLogic/logoutAct.js";
import { createPageRender } from "./create/createPageRender.js"
import { detailsPageRender } from "./detailsPage/detailsPageRender.js"
import { editPageRender } from "./editBtn/editPageRender.js"
import { profilePageRender } from "./profile/profilePageRender.js"

page('/', allItemsPageRender)
page('/dashboard', allItemsPageRender)
page('/login', loginPageRendering)
//page('/all-listings', allItemsPageRender)
page('/register', registerPageRender)
page('/logout', getLogout)
page('/create-book', createPageRender)
page('/details/:id', detailsPageRender)
page('/edit/:id', editPageRender)
page('/my-books', profilePageRender)



page.start();