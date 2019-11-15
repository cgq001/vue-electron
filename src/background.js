'use strict'

import { app, protocol, BrowserWindow, Menu ,ipcMain,Tray,shell , desktopCapturer, screen} from 'electron'
// import path from 'path'
// var screenshot = require('desktop-screenshot');
const fs = require('fs')
const os = require('os')
const path = require('path')
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
import { resolve } from 'any-promise'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win


// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ 
    width: 1200, 
    height: 800, 
    title: 'app',
    useContentSize: true,
    fullscreenable: true,  //是否允许全屏
    titleBarStyle: 'hidden',
    frame: false,
    center: true,
    webPreferences: {
    nodeIntegration: true
  } 
})

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
//当应用关闭的时候
  win.on('closed', () => {
    win = null
  })


  //托盘
  require('./tray')
  //最小化
      ipcMain.on('window-min',()=>{
            win.minimize()
          })

  //最大化或者还原
  ipcMain.on('window-tag',()=>{
    if(win.isMaximized()){
            win.restore()  //还原
        }else{
            win.maximize()  //最大化
        }
  })
  

  //关闭
  ipcMain.on('window-close',()=>{
    win.hide()
  })
//当窗口大小发送改变时
  win.on('resize',function(){
    console.log('123')
   
})

//截屏
ipcMain.on('window-screen',(event,data)=>{
    // capturer()
    console.log('12')
  // event.sender.send('man-screen',capturer)
})


}

// 退出应用时触发
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }

  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


