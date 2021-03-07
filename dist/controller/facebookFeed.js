"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookUserUser = void 0;
const superagent_1 = __importDefault(require("superagent"));
var facebookURL;
(function (facebookURL) {
    facebookURL["accessToken"] = "https://graph.facebook.com/v10.0/oauth/access_token";
    facebookURL["feedUser"] = "https://graph.facebook.com/v10.0/10156282988163547/feed";
})(facebookURL || (facebookURL = {}));
class facebookFeed {
    async getAcessToken() {
        return new Promise(async (resolve, reject) => {
            await superagent_1.default.get(facebookURL.accessToken)
                .query({ grant_type: `fb_exchange_token` })
                .query({ client_id: process.env.FB_CLIENT_ID })
                .query({ client_secret: process.env.FB_CLIENT_SECRET })
                .query({ fb_exchange_token: process.env.FB_ACCESS_TOKEN })
                .end(function (err, resp) {
                if (err) {
                    reject(err);
                }
                resolve(resp.body.access_token);
            });
        });
    }
    async getFeedUser(data) {
        let init = superagent_1.default.get(facebookURL.feedUser).query({ access_token: data.accessToken });
        if (!data.page) {
            init.query({ limit: 10 });
        }
        else {
            init.query({ limit: data.page });
        }
        return new Promise(async (resolve, reject) => {
            await init.end(function (err, resp) {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(resp.text));
            });
        });
    }
    async main(req, res) {
        try {
            const facebookFeedMethod = new facebookFeed();
            const getToken = await facebookFeedMethod.getAcessToken();
            console.info(getToken, req.body);
            const payload = req.body;
            payload.accessToken = getToken;
            const getUserFeed = await facebookFeedMethod.getFeedUser(payload);
            if (getUserFeed.data.length > 0) {
                res.status(200).send({
                    TYPE: "SUCCESS",
                    data: getUserFeed
                });
            }
            else {
                res.status(400).send({
                    TYPE: "EMPTY_DATA",
                    data: []
                });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500)
                .json({
                TYPE: 'UNHANDLE_ERROR',
                message: error.message
            });
        }
    }
}
exports.facebookUserUser = new facebookFeed();
//# sourceMappingURL=facebookFeed.js.map