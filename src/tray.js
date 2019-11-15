let {app,Menu,Tray,shell,ipcMain,BrowserWindow} = require('electron');

var path = require('path')

let win=BrowserWindow.getFocusedWindow();

var id = BrowserWindow.getFocusedWindow().id

win.on('resize',function(){
    console.log('123')
    let firstWins=BrowserWindow.fromId(id)
    firstWins.webContents.send('resizeWin',win.isMaximized())
})

// 托盘图标设置
// console.log(__dirname)
var iconTray=new Tray(path.join(__dirname,'./tray.ico'));

// 绑定托盘的右键菜单
var tpl=[
    {
        label: '设置',
        click:function(){
            console.log('123')
        }
    },
    {
        label: '退出',
        click:function(){
            win.close()
        }
    }
]

let rightIcon=Menu.buildFromTemplate(tpl)

iconTray.setContextMenu(rightIcon)

// 托盘图标 提示文字
iconTray.setToolTip('云应用')

// 点击关闭按钮，让应该保存在托盘里，双击托盘，打开应用




// 双击 托盘图标 打开窗口
iconTray.on('double-click',function(){
    win.show()
})
