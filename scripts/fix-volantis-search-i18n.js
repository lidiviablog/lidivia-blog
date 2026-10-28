/* global hexo */
'use strict';

// hexo-theme-volantis 6.8.3 的 layout/_plugins/global/config.ejs 在
// GLOBAL_CONFIG.languages 裡寫了兩個 `search` key，後者會覆蓋前者，
// 導致搜尋介面的多語系文字（hits_empty、hits_stats…）全部變成 undefined。
//
// 這裡不改 node_modules，而是在產生頁面前取得該 view 的原始模板，
// 於記憶體中把兩個 `search` 合併成一個，再透過 theme.setView 覆蓋。
// 若主題日後修好了（找不到重複的 search），則不做任何事。

const VIEW_PATH = '_plugins/global/config.ejs';

function patchTemplate(src) {
  const re = /(languages:\s*\{\s*<% if\(theme\.search\.enable\) \{ %>\s*)search:\s*\{([\s\S]*?)\}\s*,(\s*<% \} %>\s*)search:\s*\{/;
  if (!re.test(src)) return null;
  return src.replace(re, (_, head, body, endif) =>
    'languages: {\n      search: {\n' +
    head.replace(/^languages:\s*\{\s*/, '      ') +
    body.replace(/\s*$/, ',\n') +
    endif.replace(/^\s*/, '      ')
  );
}

hexo.extend.filter.register('before_generate', function () {
  const theme = this.theme;
  const view = theme.getView(VIEW_PATH);
  if (!view || view.__searchI18nPatched) return;

  const patched = patchTemplate(view.data._content);
  if (!patched) return;

  theme.setView(VIEW_PATH, patched);
  theme.getView(VIEW_PATH).__searchI18nPatched = true;
});
