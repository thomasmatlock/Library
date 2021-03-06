/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable vars-on-top */
/* eslint-disable no-labels */
/* eslint-disable no-var */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// <https://www.electronjs.org/docs/api/app>

// APP EVENTS (main node process)
// The app object emits the following events:

app.on('will-finish-launching' () => {}, //  Emitted when the application has finished basic startup. On Windows and Linux, the will-finish-launching event is the same as the ready event; on macOS, this event represents the applicationWillFinishLaunching notification of NSApplication. You would usually set up listeners for the open-file and open-url events here, and start the crash reporter and auto updater.In most cases, you should do everything in the ready event handler.
        app.on('ready' () => {}, //  Emitted once, when Electron has finished initializing. On macOS, launchInfo holds the userInfo of the NSUserNotification that was used to open the application, if it was launched from Notification Center. You can also call app.isReady() to check if this event has already fired and app.whenReady() to get a Promise that is fulfilled when Electron is initialized.
            app.on('window-all-closed' () => {}, //  Emitted when all windows have been closed.
                app.on('before-quit' () => {}, //  Emitted before the application starts closing its windows. Calling event.preventDefault() will prevent the default behavior, which is terminating the application.
                    app.on('will-quit' () => {}, //  Emitted when all windows have been closed and the application will quit. Calling event.preventDefault() will prevent the default behavior, which is terminating the application.
                        app.on('quit' () => {}, //  Emitted when the application is quitting.
                            app.on('open-file-macos' () => {}, //  Emitted when the user wants to open a file with the application. The open-file event is usually emitted when the application is already open and the OS wants to reuse the application to open the file. open-file is also emitted when a file is dropped onto the dock and the application is not yet running. Make sure to listen for the open-file event very early in your application startup to handle this case (even before the ready event is emitted).
                                app.on('open-url-macos' () => {}, //  Emitted when the user wants to open a URL with the application. Your application's Info.plist file must define the URL scheme within the CFBundleURLTypes key, and set NSPrincipalClass to AtomApplication.
                                    app.on('activate-macos' () => {}, //  Emitted when the application is activated. Various actions can trigger this event, such as launching the application for the first time, attempting to re-launch the application when it's already running, or clicking on the application's dock or taskbar icon.
                                        app.on('continue-activity-macos' () => {}, //  Emitted during Handoff when an activity from a different device wants to be resumed. You should call event.preventDefault() if you want to handle this event.
                                            app.on('will-continue-activity-macos' () => {}, //  Emitted during Handoff before an activity from a different device wants to be resumed. You should call event.preventDefault() if you want to handle this event.
                                                app.on('continue-activity-error-macos' () => {}, //  Emitted during Handoff when an activity from a different device fails to be resumed.
                                                    app.on('activity-was-continued-macos' () => {}, //  Emitted during Handoff after an activity from this device was successfully resumed on another one.
                                                        app.on('update-activity-state-macos' () => {}, //  Emitted when Handoff is about to be resumed on another device. If you need to update the state to be transferred, you should call event.preventDefault() immediately, construct a new userInfo dictionary and call app.updateCurrentActivity() in a timely manner. Otherwise, the operation will fail and continue-activity-error will be called.
                                                            app.on('new-window-for-tab-macos' () => {}, //  Emitted when the user clicks the native macOS new tab button. The new tab button is only visible if the current BrowserWindow has a tabbingIdentifier
                                                                app.on('browser-window-blur' () => {}, //  Emitted when a browserWindow gets blurred.
                                                                    app.on('browser-window-focus' () => {}, //  Emitted when a browserWindow gets focused.
                                                                        app.on('browser-window-created' () => {}, //  Emitted when a new browserWindow is created.
                                                                            app.on('web-contents-created' () => {}, //  Emitted when a new webContents is created.
                                                                                app.on('certificate-error' () => {}, //  Emitted when failed to verify the certificate for url, to trust the certificate you should prevent the default behavior with event.preventDefault() and call callback(true).
                                                                                    app.on('select-client-certificate' () => {}, //  Emitted when a client certificate is requested.
                                                                                        app.on('login' () => {}, //  Emitted when webContents wants to do basic auth.
                                                                                            app.on('gpu-info-update' () => {}, //  Emitted whenever there is a GPU info update.
                                                                                                app.on('gpu-process-crashed' () => {}, //  Emitted when the GPU process crashes or is killed.
                                                                                                    app.on('renderer-process-crashed' () => {}, //  Emitted when the renderer process of webContents crashes or is killed.
                                                                                                        app.on('accessibility-support-changed-macos-windows' () => {}, //  Emitted when Chrome's accessibility support changes. This event fires when assistive technologies, such as screen readers, are enabled or disabled. See chromium.org/developers/design-documents/accessibility for more details.
                                                                                                            app.on('session-created' () => {}, //  Emitted when Electron has created a new session.
                                                                                                                app.on('second-instance' () => {}
                                                                                                                    a //pp.on('desktop-capturer-get-sources' () => {} , //  Emitted when desktopCapturer.getSources() is called in the renderer process of webContents. Calling event.preventDefault() will make it return empty sources.
                                                                                                                    app.on('remote-require' () => {}, //  Emitted when remote.require() is called in the renderer process of webContents. Calling event.preventDefault() will prevent the module from being returned. Custom value can be returned by setting event.returnValue.
                                                                                                                        app.on('remote-get-global' () => {}, //  Emitted when remote.getGlobal() is called in the renderer process of webContents. Calling event.preventDefault() will prevent the global from being returned. Custom value can be returned by setting event.returnValue.
                                                                                                                            app.on('remote-get-builtin' () => {}, //  Emitted when remote.getBuiltin() is called in the renderer process of webContents. Calling event.preventDefault() will prevent the module from being returned. Custom value can be returned by setting event.returnValue.
                                                                                                                                app.on('remote-get-current-window' () => {}, //  Emitted when remote.getCurrentWindow() is called in the renderer process of webContents. Calling event.preventDefault() will prevent the object from being returned. Custom value can be returned by setting event.returnValue.
                                                                                                                                    app.on('remote-get-current-web-contents' () => {}, //  Emitted when remote.getCurrentWebContents() is called in the renderer process of webContents. Calling event.preventDefault() will prevent the object from being returned. Custom value can be returned by setting event.returnValue.