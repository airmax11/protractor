import { ProtractorBrowser, Config, PluginConfig, ProtractorPlugin, Ptor, ElementFinder, ElementArrayFinder, ElementHelper, ProtractorBy, ProtractorExpectedConditions, ProtractorBrowser, firefox, chrome, http, remote } from '../node_modules/protractor/built/index';

declare global {
    let browser: ProtractorBrowser;
    let protractor: Ptor;
    let Command: any;
    let CommandName: any;
    let protractor: Ptor;
    let browser: ProtractorBrowser;
    let $: (search: string) => ElementFinder;
    let $$: (search: string) => ElementArrayFinder;
    let element: ElementHelper;
    let By: ProtractorBy;
    let by: ProtractorBy;
    let ExpectedConditions: ProtractorExpectedConditions;
    type PluginConfig = PluginConfig;
    type ProtractorPlugin = ProtractorPlugin;
    let utils: {
        firefox: any;
        http: any;
        remote: any;
        chrome: any;
    };
}

