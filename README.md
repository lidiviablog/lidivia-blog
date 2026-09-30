# README
## hexo 的相關教學
### git安裝後執行指令

git config --global user.email "XXX@gmail.com"
git config --global user.name "XXX"

git config --list

### 基本的 git 指令

下載專案
git clone https://github.com/lidiviablog/lidivia-blog.git

git init
git add .
git commit -m "init"

git push

### hexo
需先下載 node 相關執行環境

#### 安裝 hexo 的相關套件
npm install

#### 安裝模板
npm install hexo-theme-volantis --save

#### 拷貝模板的設定檔
cp node_modules/hexo-theme-volantis/_config.yml _config.volantis.yml


本機：
hexo clean && hexo g && hexo s
部署：
hexo clean && hexo g && hexo deploy

===
圖片：
background: https://gcore.jsdelivr.net/gh/MHG-LAB/cron@gh-pages/bing/bing.jpg


img: volantis-static/media/org.volantis/blog/Logo-NavBar@3x.png # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png

## ai 使用提示詞的開頭
方便修改部落格相關功能與語系

我使用 hexo 的 volantis 模板
該如何修改 模板當中所有的簡體字

===
在執行
cp node_modules/hexo-theme-volantis/_config.yml _config.volantis.yml

修改這個 _config.volantis.yml 檔之外
還需要將 node_modules/hexo-theme-volantis/_data/widgets.yml
這個檔案也做 cp 的動作與程式碼的複寫嗎？


如果將 node_modules/hexo-theme-volantis/_data/widgets.yml
當中的

tagcloud:
  class: tagcloud
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fa-solid fa-tags
    title: 热门标签
    url: /blog/tags/
  min_font: 14
  max_font: 24
  color: true
  start_color: '#999'
  end_color: '#555'

添加在
_config.volantis.yml
當中
並且將 热门标签 改為 熱門標籤
能順利將簡中改為繁中嗎？


這隻檔案 _config.volantis.yml 的地方

  ##########################
  # 侧边栏组件库
  widget_library: # 此处配置可被 _data/widgets.yml 覆盖
    # blogger info widget
    blogger:
      class: blogger
    # ---------------------------------------
    # toc widget (valid only in articles)
    toc:
      class: toc
    # ---------------------------------------
    # 所有 widgets 见 _data/widgets.yml 写在这里配置文件太长了
    # ---------------------------------------

添加 node_modules/hexo-theme-volantis/_data/widgets.yml
必且將簡中改為繁中是否能成功呢？


我使用 hexo 的 volantis 模板
該如何將左上角的圖片與文字水平至中呢？

請教我調整 config 檔案的那些程式碼
