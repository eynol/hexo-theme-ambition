# Live demo
[My blog](https://vankai.github.io)

# Intro

Using service worker to enhance offline experience.

**Online's resources first**, only a few of files are precached(more specific, please read the `sw.js`).

When you are offline, the blog pages you **have been visited** can be responed like online, while other cross-origin requests are always unreachable.You may have to change the service worker's rules to cache your CDN resources.


# Feature

- Your post's title may have a background image, just add a `cover` member to your header of the post.
The value of cover is a URL `String`, and the image will full covered your title content's background. 
If your image is a low resolution picture, you may add a `fit` memeber and set it to be `true` to your header of the post.



# Install

## 1.Clone

Open your Hexo project folder and Clone this project into `/themes/`.If you don't have a hexo project, please visit Hexo official site to start.

Run following command in your Hexo project root path,
```
git clone https://github.com/vankai/hexo-theme-ambition.git themes/ambition
```
When it's done,this theme should be in path like this:`/Your Hexo Root Folder/themes/ambition`.

Then modify the property `theme` of the file `/Your Hexo Root Folder/_config.yml` to `theme: ambition`.

## 2.Packages.json

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

## 3.Root Config File

My `/Hexo_project_root/_config.yml` file is like this.Append the key&value you don't have and modify some values to yours.
```
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: Vankai
subtitle:
description:
author: Tao Kai
language: 
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
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:

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

# DIY menu
menu:
  Home: /
  Archives: /archives/index.html
  Tags: /tags/index.html
  About: /about.html


# Mypages
mypage:
  about.html: about
  tags/index.html: all_tags
  404.html: oops
# Pagination
## Set per_page to 0 to disable pagination

index_generator:
  per_page: 10

archive_generator:
  per_page: 40  //为0时表示不分页全展示
  yearly: true  //按年生成归档
  monthly: true //按月生成归档

tag_generator:
  per_page: 40

pagination_dir: page


# Impression words
# this displays on homepage
# Notice:the impression words is display with 'pre' tag style ,you may need to
# add some whitespaces to beautify what is your words look like.
# If you don't like this , you may modify 'firstimpression.ejs' file and 
# the firstimpression part of the 'style-common.styl' file.
impression: 倘只看书<br>便变成书橱


# Your Email, 
# this display on the footer part
email: mr.taokai@foxmail.com


# prefetch some sites' dns
# add your CDN provider's domain name to this list
dnsprefetch:
  - https://github.com/vankai/
  - https://vankai.github.io/
  - https://tomato3.coding.me/
  - https://www.heitaov.cn/
  - http://blog.54yh.cn/

# pre-render 
# this 
prerender:
  - /
  - /archives/
  - /tags/
  - /about/


#friends links
friends:
  - name: 逸晖
    link: http://blog.54yh.cn/

# your social links
social:
  github: https://github.com/vankai
  coding: https://coding.net/u/tomato3


# widget behavior
# control the archives's page
archive_type: 'yearly'
show_count: false


# Content translation
excerpt_link: Read More
next_post: 下一篇
prev_post: 上一篇

# For rss
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:

jsonFeed:
  limit: 25



# Google Analytics
google_analytics: false
google_analytics_id: UA-89535578-1

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

- Most of the words can be changed in `/Your_Hexo_Project_Root_Folder/themes/ambition/_config.yml`.

- The homepage's wallpaper can be changed in `/ambition/layout/parts/firstimpression.ejs` and `/ambition/source/img/`.

- The `footer` can be changed in `/ambition/layout/parts/footer.ejs`.

- The `about` page can be changed in `/ambition/layout/about.ejs`.

- The main stylesheet rules can be changed in `/ambition/source/style-common.styl`.

- In this `manifest.json` ,you should change values to yours, such as `name` `icons` `theme_color`.

- You can change the `PRECACHE_URLS` in `/ambition/sw.js`.


# **Attention！**

**Every time** you modified this theme's resources, such as wallpapers, javascript etc, and you **have to** change the values of `PRECACHE` in `source/sw.js` file.
So that the new version of your `PRECACHE_URLS` files can be update.

If you don't want to using service worker, do following steps to disable it.


## 1.Comment out the `service worker` part in `common.js` file.

```
...
...

//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker.register('/sw.js');
//}
 
```



