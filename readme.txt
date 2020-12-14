in Messenger/client : execute ` npm start `
in Messenger/server : execute ` npm start devStart `   -- script found in package.json

to test the connexion you should follow these steps, as of this commit it doesn't work:

1) npm devStart
2) npm start
3) you should get a page open in your default browser to the page: http://localhost:3000/
3') Just to be sure, you should press f12 and delete the local storage under application, you might need to press the arrow( f12 -> application -> local storage -> rightclick localhost 3000 -> clear)

4) open another incognito page and go to the link: http://localhost:3000/
5) create a new id on both incognito and default page
6) copy your id from either pages (bottom left as of right now) 
7) add it onto the other page under: contacts -> new contact
8) create a new conversation; conversation tab(top left) -> new conversation -> select the added user -> send message