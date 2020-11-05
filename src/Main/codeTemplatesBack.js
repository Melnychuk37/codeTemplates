export const backendTemplates = [
    {
        id: 1, 
        name: 'app.js', 
        description: 'Импорт необходимых библиотек',
        script: `const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');  

... `
    },
    {
        id: 2,
        name: 'app.js',
        description: 'Описываем разрешенные параметры для входящих запросов',
        script: 
        `...
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, POST, GET');
        return res.status(200).json({});
    }

    next();
})
        
...`
    },
    {
        id: 3,
        name: 'app.js',
        description: 'Импортируем модуль route, и используем его по тригеру на путь /stats/passing',
        script: 
        `...
const PassingStatsRoute = require('./api/routes/passingStats');

app.use('/stats/passing', PassingStatsRoute);
...`
    },
    {
    id: 4, 
    name: 'app.js', 
    description: 'Если после сканирования ни один из endpoints не подошел, отправляем ответ что модуль не найден (404)',
    script: `...
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

... `
    },
    {
        id: 5,
        name: 'app.js',
        description: 'Отлавливаем ошибки, если есть таковые отправляем ответ с ошибкой',
        script: 
        `...
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});
        
...`
    },
    {
        id: 6,
        name: 'app.js',
        description: 'Экспорт модуля',
        script: 
        `...

module.exports = app;
        `
    },
    {
        id: 7,
        name: 'utils.js',
        description: 'Модуль с утилитой для загрузки запросов с папки queries (в моем проекте стандартная папка для всех роутов, в ней лежат скрипты запросов в базу, в большинстве случает select ). Использую здесь стороннюю библиотеку для работы с файловой системой. Дальше в роуте использую данную утилиту чтобы импортировать нужный сприпт через dot notation (в файле route example)',
        script: `
"use strict";

const fs = require("fs-extra");
const {join} = require("path");
        
const loadSqlQueries = async folderName => {
    const filePath = join(process.cwd(), "api", "routes", folderName, "queries" );
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith(".sql"));
    const queries = {};
    for(const sqlFile of sqlFiles) {
        const query = fs.readFileSync(join(filePath, sqlFile), {encoding: "UTF-8"});
        queries[(sqlFile.replace(".sql", ""))] = query;
    }
    return queries;
}
        
module.exports = loadSqlQueries;
`
    },
    {
        id: 8,
        name: 'index.js (folder: routes/passStats)',
        description: 'Здесь описаны endpoints и типы запросов которые будут приходить на данный путь (полный путь = путь, который указан в app.js + путь указанный в первом параметре express.Router(), также здесь использую утилиту для загрузки sql скриптов, описаной в разделе \' backend\\util \' )',
        script: `
const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../sqlconfig');
        
const queriesPass = require('../utils');
const folderName = 'passingStats';
let query;
        
router.get('/', (req, res, next) => {
    sql.on('error', err => console.log(err));
    sql.connect(config).then(async pool => {
        let waitQuery = () => queriesPass(folderName);
        await waitQuery().then(result => query = result.totalPasses);
        return pool.request().query(query);
    }).then(result => {
        res.status(200).json(result.recordset);
    }).catch(err => {
      console.log(err);
    });
});

...
        `
    }
]


