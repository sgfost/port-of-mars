import { url } from "@port-of-mars/client/util";
import { TStore } from "@port-of-mars/client/plugins/tstore";
import { AjaxRequest } from "@port-of-mars/client/plugins/ajax";

export class LeaderboardAPI {
  constructor(public store: TStore, public ajax: AjaxRequest) {}

  async getLeaderboard(): Promise<any> {
    // FIXME: add leaderboard data type
    try {
      return await this.ajax.get(url("/leaderboard/"), ({ data }) => {
        return data;
      });
    } catch (e) {
      console.log("Unable to retrieve leaderboard");
      console.log(e);
      throw e;
    }
  }
}
