import { expect,Page,Locator } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlayWrightWrapper";
import {getEnv} from "../../helper/env/env";

export default class HomePage {
 
    private readonly base: PlaywrightWrapper


    constructor(private page:Page){

        this.base = new PlaywrightWrapper(page);
        getEnv();
    }

    async navigate():Promise<void> {
        await this.base.goto(process.env.BASEURL);
    }


    }


