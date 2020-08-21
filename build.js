const rimraf = require("rimraf");
const copydir = require('copy-dir')
const fs = require('fs')
const handlebars = require('handlebars')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt({
        html: true,
    });

rimraf.sync('./docs')
copydir.sync('./static', './docs');
fs.mkdirSync('./docs/articles')

let article = fs.readFileSync('./template/article.html', 'utf8')
let articleTemplate = handlebars.compile(article)

let index = fs.readFileSync('./template/index.html', 'utf-8')
let indexTemplate = handlebars.compile(index)

let articles = getArticles()
// console.log(articles)
let data = {
    articles: articles.filter(({ bignews }) => {
        return bignews == '1'
    }).slice(0, 9),
    smallarticles: articles.filter(({ bignews }) => {
        return bignews == '0'
    }).slice(0, 15),
}
fs.writeFileSync('./docs/index.html', indexTemplate(data))
// console.log(index)
// getArticles()
// console.log(data.articles)

function getArticles() {
    let articles = []
    let things = fs.readdirSync('./articles')
    for (let i = 0; i < things.length; i++) {
        let it = fs.readFileSync(`./articles/${things[i]}`, 'utf8')
        let data = it.split('\n')
        let j = 0
        articles.push({})
        while (data[j][0] == '[') {
            let attr = data[j].match(/\[(.*?)\]/)[0]
            attr = attr.slice(1, attr.length - 1)
            let value = data[j].match(/\((.*?)\)/)[0]
            value = value.slice(1, value.length - 1)
            articles[i][attr] = value
            j++
        }
        let articleName = articles[i]['title'].replace(/\s/g, '_').toLowerCase()
        articles[i]['href'] = `articles/${articleName}.html`
        fs.writeFileSync(`./docs/articles/${articleName}.html`, articleTemplate({
            article: md.render(it)
        }))
        // console.log(i, articles[i])
    }
    articles.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
    return articles
}