/**
 * 需求:
 *   复制『资料』文件夹下的『笑看风云.mp4』
 */
const fs = require('fs');
const process = require('process');

//方式一 readFile
//读取文件内容
let data = fs.readFileSync('../资料/笑看风云.mp4');
//写入文件
fs.writeFileSync('../资料/笑看风云-2.mp4', data);
console.log(process.memoryUsage()); // rss    110710784 字节   105MB
// {rss: 121552896, heapTotal: 9015296, heapUsed: 7597008, external: 82478504, arrayBuffers: 81610072}

//方式二 流式操作
//创建读取流对象
const rs = fs.createReadStream('../资料/笑看风云.mp4');
//创建写入流对象
const ws = fs.createWriteStream('../资料/笑看风云-3.mp4');

//绑定 data 事件
rs.on('data', chunk => {
    ws.write(chunk);
});

rs.on('end', () => {
    console.log(process.memoryUsage());  // 43106304   =>  41M
    // {rss: 58126336, heapTotal: 12423168, heapUsed: 8682752, external: 12617116, arrayBuffers: 11748696}
});

// 方式三 通过管道的方式实现文件复制
rs.pipe(ws);

