# ion-tabs-without-tab-bar-help
Need help to get rid of ion-tabs bar from bottom of my tab pages (both root and child tabs).

Also, adding following to app.modules.ts:
IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true})
Gets rid of the Tab Bar on child tabs; however, it causes the Tab
switch behavior to break.

# Setup
1. clone repo
2. cd to project root
3. npm install
4. ionic serve
5. Navigate to http://localhost:8100/ in Chrome
6. Open Chrome tools and set display to iPhone/Android device
7. Go to http://localhost:8100/ to reload the app
