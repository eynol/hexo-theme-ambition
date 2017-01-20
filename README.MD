# Screenshot and live demo


# Intro

# Install

1.Clone

Open your Hexo project folder and Clone this project into `/themes/`.If you don't have a hexo project, please visit Hexo official site to start.

Run following command in your Hexo project root path,
```
git clone https://github.com/vankai/hexo-theme-ambition.git themes/ambition
```
When it's done,this theme should be in path like this:`/Your Hexo Root Folder/themes/ambition`.

Then modify the property `theme` of the file `/Your Hexo Root Folder/_config.yml` to `theme: ambition`.

2.Packages.json

Add required packages into your `packages.json`, add the dependecies packages you don't have.
```
{
    ...
    ...
    "dependencies": {
        "hexo": "^3.2.0",
        "hexo-deployer-git": "^0.2.0",
        "hexo-generator-archive": "^0.1.4",
        "hexo-generator-category": "^0.1.3",
        "hexo-generator-index": "^0.2.0",
        "hexo-generator-mypage": "^1.0.1",
        "hexo-generator-tag": "^0.2.0",
        "hexo-renderer-ejs": "^0.2.0",
        "hexo-renderer-marked": "^0.2.10",
        "hexo-renderer-stylus": "^0.3.1",
        "hexo-server": "^0.2.0"
  }
}
```
After you modified your `packages.json`, please run command `npm install` to install those packages.

3.Root Config File

My `/Hexo_project_root/_config.yml` file is like this.Append the key&value you don't have and modify some values to yours.
```
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: Vankai
subtitle:
description:
author: Vankai
language: en
timezone:

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: /
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
  lang: 

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true


# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss


# Mypages
# left is generated page, right is your personal modified ejs file
mypage:
  about.html: about
  tags/index.html: alltags

# Pagination
## Set per_page to 0 to disable pagination

index_generator:
  per_page: 10

archive_generator:
  per_page: 40  //set to 0 to disable 
  yearly: true  // archive by year 
  monthly: true // archive by month 

tag_generator:
  per_page: 40

pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
#theme: landscape
theme: ambition


# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
- type: git
  repo:  git@github.com:yourname/yourname.github.io.git
  branch: master
  message: update

```
Change these value by yourself.
From now on, you can write your posts and generate a site with a default look.

# Do It Yourself

Most of the words can be changed in `/Your_Hexo_Project_Root_Folder/themes/ambition/_config.yml`.

The homepage's wallpaper can be changed in `/ambition/layout/parts/firstimpression.ejs` and `/ambition/source/img/`.

The `footer` can be changed in `/ambition/layout/parts/footer.ejs`.

The `about` page can be changed in `/ambition/layout/about.ejs`.

The main stylesheet rules can be changed in `/ambition/source/style-common.styl`.

In this `manifest.json` ,you should change values to yours, such as `name` `icons` `theme_color`.

You can change the `PRECACHE_URLS` in `/ambition/sw.js`.


# **Attention！**
This theme is using service worker to cache pages, and your blog must deployed with `https` protocol.
And **every time** you update your blog, you **have to** change the value of `PRECACHE` in `source/sw.js` file.

If you don't want to using service worker, do following steps to disable it.

1.Modify the manifest.json 

Delete the `serviceworker` member of `manifest.json` file.
```
{
  "short_name": "Vankai",
  "name": "Vankai's Blog",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#000",
  "background_color": "#FFF",
  "icons": [{
      "src": "vankai_icon_1x.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "vankai_icon_1_5x.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "vankai_icon_2x.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "vankai_icon_3x.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "vankai_icon_4x.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]

}
```


2.Comment out the `service worker` part in `common.js` file.

```
...
...

//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker.register('/sw.js');
//}
 
```


