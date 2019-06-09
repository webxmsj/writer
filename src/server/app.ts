import { BrowserWindow, app } from 'electron'
import * as path from 'path'
import EventClasses from './events/index'

import { IApplicationDb, IApplicationSetting } from './interfaces/application'
// eslint-disable-next-line
declare const __static: string

export default class App {
  mainWindow: BrowserWindow

  app: any

  baseDir: string

  appDir: string

  db: IApplicationDb

  constructor(setting: IApplicationSetting) {
    this.mainWindow = setting.mainWindow
    this.app = setting.app
    this.baseDir = setting.baseDir
    this.appDir = path.join(this.app.getPath('documents'), 'gridea')

    this.db = {
      posts: [],
      tags: [],
      menus: [],
      themeConfig: {
        themeName: '',
        postPageSize: 10,
        archivesPageSize: 50,
        siteName: '',
        siteDescription: '',
        footerInfo: 'Powered by Writers',
        showFeatureImage: true,
        domain: '',
        postUrlFormat: 'SLUG',
        tagUrlFormat: 'SLUG',
        dateFormat: 'YYYY-MM-DD',
      },
      themeCustomConfig: {},
      themes: [],
      setting: {
        platform: '',
        domain: '',
        repository: '',
        branch: '',
        username: '',
        email: '',
        token: '',
        cname: '',
      },
      commentSetting: {
        showComment: false,
        commentPlatform: 'gitalk',
        gitalkSetting: {
          clientId: '',
          clientSecret: '',
          repository: '',
          owner: '',
        },
        disqusSetting: {
          api: '',
          apikey: '',
          shortname: '',
        },
      },
    }
    this.initEvents()
  }

  private initEvents(): void {
    const {
      SiteEvents,
      PostEvents,
      TagEvents,
      MenuEvents,
      ThemeEvents,
      SettingEvents,
    } = EventClasses

    const site = new SiteEvents(this)
    const post = new PostEvents(this)
    const tag = new TagEvents(this)
    const menu = new MenuEvents(this)
    const theme = new ThemeEvents(this)
    const setting = new SettingEvents(this)
  }
}
